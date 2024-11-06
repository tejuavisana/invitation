import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div); // Create a root using createRoot
  root.render(<App />); // Use the new render method
  root.unmount(); // Clean up by unmounting the component
});
