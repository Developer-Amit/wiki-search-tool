import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import SearchBar from './SearchBar';

jest.mock('axios');

// resetting mock in initial call
describe('SearchBar component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('search input rendering', () => {
    const { getByPlaceholderText } = render(<SearchBar />);
    const input = getByPlaceholderText('Enter a search term');
    expect(input).toBeInTheDocument();
  });

  test('handles user input correctly', () => {
    const { getByPlaceholderText } = render(<SearchBar />);
    const input = getByPlaceholderText('Enter a search term');
    fireEvent.change(input, { target: { value: 'test query' } });
    expect(input.value).toBe('test query');
  });

  test('fetches and displays search results correctly', async () => {
    const mockedResponse = {
      data: {
        query: {
          search: [
            {
              ns: 0,
              title: 'Test Title',
              pageid: 123,
              size: 1000,
              wordcount: 200,
              snippet: 'Test snippet',
              timestamp: '2022-02-19T12:00:00Z',
            },
          ],
        },
      },
    };

    (axios.get).mockResolvedValueOnce(mockedResponse);

    const { getByPlaceholderText, getByText } = render(<SearchBar />);
    const input = getByPlaceholderText('Enter a search term');
    fireEvent.change(input, { target: { value: 'test query' } });

    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));

    expect(getByText('Test Title')).toBeInTheDocument();
    expect(getByText('Test snippet')).toBeInTheDocument();
    expect(getByText('Word Count: 200')).toBeInTheDocument();
  });

  test('displays loading indicator while fetching data', async () => {
    (axios.get).mockImplementationOnce(() =>
      new Promise(resolve => setTimeout(() => resolve(), 1000))
    );

    const { getByText } = render(<SearchBar />);
    const input = getByText('Enter a search term');
    fireEvent.change(input, { target: { value: 'test query' } });

    expect(getByText('Loading...')).toBeInTheDocument();

    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
  });
});
