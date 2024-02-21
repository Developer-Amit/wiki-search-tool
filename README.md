# Wikipedia Search and Analysis Tool

## Overview

This application is a high-performance Wikipedia search and analysis tool built with React, TypeScript, Node.js, and Express. It allows users to search Wikipedia articles, view search results with relevance-based sorting, and analyze article details such as word count and snippet.

## Features
-> Search Functionality: Users can enter a search term and receive relevant Wikipedia articles as search results.

-> Search History: The application keeps track of the user's search history for future reference.

-> Virtualized Lists: Search results are displayed using virtualized lists for improved performance.

-> Loading Indicator: Visual feedback is provided to users during data fetching to indicate loading state.

-> Input Debouncing: Search queries are debounced to reduce latency and improve user experience.

## Setup Instructions

Follow these steps to set up and run the application locally:

# Prerequisites
Node.js and npm (or yarn) installed on your machine
Git installed (optional)
Installation
Clone this repository to your local machine using the following command:

```git clone git@github.com:Developer-Amit/wiki-search-tool.git```


Navigate to the project directory:

```wiki-search-tool```

### Navigate to the /frontend :

 for React frontend 

Install dependencies using npm or yarn:

```npm install```
### or
```yarn install```
Running the Application
Start the development server:

npm start
### or
yarn start

This will start both the frontend and backend servers concurrently.

Open your web browser and navigate to http://localhost:3000 to access the application.

### Navigate to the /backend :

 for Express Backend

Install dependencies using npm or yarn:

```npm install```
### or
```yarn install```
Running the Application
Start the development server:

npm start
### or
yarn start

This will start both the frontend and backend servers concurrently.

Open your web browser and navigate to http://localhost:3002/api/hello to access the apis.

Testing
Run tests using the following command:

```npm test```

### or

```yarn test```

## Architecture

The application follows a client-server architecture with the following components:

## Frontend: 
Built with React, TypeScript, Jest testing tool and Tailwind CSS. Handles user interface, search functionality, and data presentation.

## Backend: 
Built with Node.js and Express. Handles API interactions with the Wikipedia API and serves as a proxy between the frontend and Wikipedia.
Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

Fork the repository.
Create your feature branch (git checkout -b feature-name).
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature-name).
Create a new Pull Request.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Feel free to customize this README template further based on your specific project details and requirements. Let me know if you need any more assistance!