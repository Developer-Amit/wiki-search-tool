import React, { useState } from "react";
import axios from "axios";
import DOMPurify from "dompurify";
import { FixedSizeList as List } from "react-window";
import { SearchResult } from "./SearchBar.types";

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    setSearchHistory((prevSearchHistory) => [...prevSearchHistory, query]);
    try {
      const response = await axios.get(`/api-client/search?query=${query}`);
      setResults(response?.data?.query?.search);
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setLoading(false); // Set loading to false after the API request completes
    }
  };

  let debounceTimer: NodeJS.Timeout | null = null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setQuery(value);

    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    // new timer
    debounceTimer = setTimeout(() => {
      handleSearch();
    }, 200);
  };

  return (
    <div className="flex justify-center items-center flex-col bg-white m-l-auto rounded-2xl shadow-2xl px-8 py-6">
      <div className="flex justify-center items-center flex-row">
        <input
          type="text"
          placeholder="Enter a search term"
          value={query}
          onChange={handleInputChange}
          className="border border-gray-300 rounded-lg p-2 w-full text-black"
        />
      </div>
      <div className="mt-4">
        {loading ? (
          <p>Loading...</p>
        ) : (
          results
            ?.sort((a, b) => a.pageid - b.pageid)
            ?.map((result) => (
              <div
                key={result.pageid}
                className="border-b border-gray-300 py-4"
              >
                <h3 className="text-xl font-semibold">{result.title}</h3>
                <div
                  className="text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(result.snippet),
                  }}
                />
                <p className="text-gray-500 mt-2">
                  Word Count: {result.wordcount}
                </p>
              </div>
            ))
        )}
      </div>
    </div>
  );
};

export default React.memo(SearchBar);
