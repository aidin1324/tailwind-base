# User Directory Application

This project is a user directory application built with React, Redux Toolkit, React Router, and TailwindCSS. The application fetches user data from [FakeStore API](https://fakestoreapi.com/users) and provides a responsive interface to view user information, with state management handled by Redux.

## Screenshots

### User List (Main Page)
![User List Page](https://github.com/user-attachments/assets/09ee4c00-32b1-44e2-95c3-340f05381a80)

### User Detail Page
![User Detail Page](https://github.com/user-attachments/assets/336f4526-d7cf-4fef-b55f-213f0dee016b)

## Project Features

### Main Page (User List)
- Displays cards for all users with:
    - Avatar image (using pravatar.cc)
    - Full name
    - Email
    - Address (city and street)
    - "Details" button
- Interactive hover effects:
    - Card scaling
    - Enhanced shadow
- Data fetching via Redux with createAsyncThunk
- Loading states and error handling managed by Redux

### User Detail Page
- Shows comprehensive user information from Redux store:
    - Complete address (street, house number, city, zip code)
    - Phone number
    - Geolocation coordinates
    - Username and password (with visibility toggle)
    - "Back to users" button
- Individual user data fetched through Redux thunk actions

### Navigation Header
- Persistent header across all pages
- Logo and navigation links
- Link to user list (/users)

### 404 Page
- Large "404" text display
- "Page not found" message
- "Return to main page" button redirecting to /users

## Redux Implementation
- Redux Toolkit for efficient state management
- Centralized store configuration in `store/index.js`
- User data slice in `store/slices/usersSlice.js`
- Async operations using `createAsyncThunk` in `store/async/usersAsync.js`
- Loading states, error handling, and data caching
- Components connect to store using React-Redux hooks

## Technical Implementation
- React and Vite for the frontend
- Redux Toolkit for state management
- React Router for navigation
- TailwindCSS for styling
- Component architecture with pages in dedicated folder
- API integration with FakeStore API through Redux
- Redirect from root path to /users

## Project Structure
```
src/
├── store/
│   ├── index.js - Redux store configuration
│   ├── slices/usersSlice.js - Users reducer and actions
│   └── async/usersAsync.js - Async thunk actions
├── components/ - Reusable components
├── pages/ - User list, user details, and 404 pages
└── App.jsx, main.jsx - Main app logic and routes
```

## Development Setup

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
