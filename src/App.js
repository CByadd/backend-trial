// App.js
import React, { useState } from "react";
import AppCard from "./AppCard";
import appsData from "./data";

const App = () => {
  const [selectedApp, setSelectedApp] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Home");

  const handleDownload = (app) => {
    setSelectedApp(app);
  };

  const filteredApps = selectedCategory === "Home"
    ? appsData
    : appsData.filter(app => app.platform === selectedCategory);

  return (
    <div className="app-store">
      <h1>App Store</h1>
      <div className="navbar">
        <button onClick={() => setSelectedCategory("Home")}>Home</button>
        <button onClick={() => setSelectedCategory("Mobile")}>Mobile</button>
        <button onClick={() => setSelectedCategory("PC")}>PC</button>
      </div>
      <div className="app-list">
        {filteredApps.map((app) => (
          <AppCard key={app.id} app={app} onDownload={handleDownload} />
        ))}
      </div>
      {selectedApp && (
        <div className="app-details">
          <h2>{selectedApp.name}</h2>
          <p>Size: {selectedApp.size}</p>
          <p>Genre: {selectedApp.genre}</p>
          <p>Description: {selectedApp.description}</p>
          <button onClick={() => setSelectedApp(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default App;
