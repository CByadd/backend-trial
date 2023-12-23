// AppCard.js
import React from "react";

const AppCard = ({ app, onDownload }) => {
  return (
    <div className="app-card" onClick={() => onDownload(app)}>
      <h3>{app.name}</h3>
      <p>Size: {app.size}</p>
      <p>Genre: {app.genre}</p>
      <button onClick={() => onDownload(app)}>Download</button>
    </div>
  );
};

export default AppCard;
