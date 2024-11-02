// src/components/App.js
import React from 'react';

function App() {
  return (
    <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Hello, Tailwind!
    </div>
  );
}

export default App;
import { register } from './serviceWorkerRegistration';

register({
  onSuccess: registration => {
    console.log('Service worker registration successful with scope:', registration.scope);
  },
  onUpdate: registration => {
    console.log('Service worker update found.  Reloading...');
    window.location.reload();
  }
});
