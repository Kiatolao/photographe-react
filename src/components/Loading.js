import React from "react";
import '../index.css';
// Creation du composant de chargement
export default function Loading() {
  return (
    <div className="spinner-container">
      <div className="loading-spinner">
      </div>
    </div>
  );
}