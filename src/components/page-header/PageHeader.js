import React from "react";
import "./PageHeader.css";

const PageHeader = ({ title, subtitle, image }) => {
  return (
    <div className="page-header">
      <img src={image} alt={title} />
      <div className="title">
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
      </div>
    </div>
  );
};

export default PageHeader;
