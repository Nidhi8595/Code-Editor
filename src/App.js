import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM for rendering the app
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage'; // Import LandingPage component
import Intro from './Intro';
import Workspace from './Workspace';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,  // Set LandingPage as the root element
  },
  {
    path: "/intro",
    element: <Intro />, // About route
  },
  {
    path: "/workspace",
    element: <Workspace />, // Workspace route
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);