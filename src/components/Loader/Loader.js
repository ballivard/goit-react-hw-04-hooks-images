/* eslint-disable react/no-unused-state */
import React, { useState } from "react";
import ThreeDots from "react-loader-spinner";

const Loader = () => {
    return (
      <div className="LoaderWrapper">
        <ThreeDots type="ThreeDots" color="#00BFFF" height={80} width={80} />
      </div>
    );
  };

export default Loader;