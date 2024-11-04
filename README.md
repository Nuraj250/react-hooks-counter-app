# React User Data Cache

A React application demonstrating user data fetching with caching using custom hooks for efficient state management. This project showcases how to separate API calls, handle loading states, and cache data to improve performance.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [License](#license)

## Overview

This project is built to demonstrate the usage of multiple React hooks, such as `useState`, `useEffect`, `useCallback`, and `useMemo`, for fetching and caching user data from a mock API. The custom hook encapsulates data-fetching logic, making the code reusable and easier to maintain.

## Features

- Fetches user data with a simulated API call.
- Caches fetched data to reduce redundant API requests.
- Uses `useCallback` for memoizing data-fetching functions.
- Uses `useMemo` for optimizing rendering of user details.
- Provides navigation between user profiles.
- Demonstrates separation of concerns with custom hooks and services.

## Folder Structure

```
my-react-app/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── UserProfile.js
│   │   └── App.js
│   │
│   ├── services/
│   │   └── userService.js
│   │
│   ├── hooks/
│   │   └── useFetchUserData.js
│   │
│   ├── index.js
│   └── styles/
│       └── UserProfile.css
│
├── package.json
└── README.md
```

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Nuraj250/react-user-data-cache.git
   cd react-user-data-cache
   ```

2. **Install the dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

   The app will open in your browser at `http://localhost:3000`.

## Usage

- The app displays user information with a simulated API call.
- Navigate between user profiles using the "Next User" and "Previous User" buttons.
- The app fetches user data only when it’s not available in the cache, reducing unnecessary API calls.
- Check the console to see when the data is being fetched or loaded from the cache.

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **JavaScript**: Programming language for logic implementation.
- **Custom Hooks**: Encapsulate and reuse logic across components.
- **CSS**: Styling for components.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
