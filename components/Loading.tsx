"use client";

import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="loading-overlay" role="status" aria-label="Loading">
      <div className="loading-center">
        <div className="airplane-wrapper">
          <svg className="rafale-svg" width="96" height="96" viewBox="0 -64 640 640" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rafale silhouette">
            <title>Rafale silhouette</title>
            {/* contrail behind the jet */}
            <path className="rafale-contrail" d="M40 260 C140 200 260 180 380 160" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
            {/* main body */}
            <path className="rafale-body" d="M544 224l-128-16-48-16h-24L227.158 44h39.509C278.333 44 288 41.375 288 38s-9.667-6-21.333-6H152v12h16v164h-48l-66.667-80H18.667L8 138.667V208h8v16h48v2.666l-64 8v42.667l64 8V288H16v16H8v69.333L18.667 384h34.667L120 304h48v164h-16v12h114.667c11.667 0 21.333-2.625 21.333-6s-9.667-6-21.333-6h-39.509L344 320h24l48-16 128-16c96-21.333 96-26.583 96-32 0-5.417 0-10.667-96-32z" fill="currentColor" />
            {/* small highlight / cockpit */}
            <path className="rafale-highlight" d="M260 140 C282 132 310 130 338 132" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </div>
        <div className="loading-text">Loading portfolio…</div>
      </div>
    </div>
  );
};

export default Loading;
