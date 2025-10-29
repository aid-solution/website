"use client"

import React from "react";
import { useMainContext } from "../_contexts/MainContext";
import "./css/spinner.css";

const Spinner = () => {
  const { loading } = useMainContext();

  return (
    <div>
      <div className={`spinner ${loading ? "hidden" : ""}`}>
        <div className="container-loader">
          <div className="loader">
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
