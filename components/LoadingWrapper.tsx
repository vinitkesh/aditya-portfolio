"use client";

import React, { useEffect, useState } from "react";
import Loading from "./Loading";

const LoadingWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const onLoad = () => setTimeout(() => setLoading(false), 350);
    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
      return () => window.removeEventListener("load", onLoad);
    }
  }, []);

  return (
    <>
      {loading && <Loading />}
      <div style={{ visibility: loading ? "hidden" : "visible" }}>{children}</div>
    </>
  );
};

export default LoadingWrapper;
