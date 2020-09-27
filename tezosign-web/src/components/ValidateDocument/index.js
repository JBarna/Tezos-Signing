import React, { Component, useState } from "react";
import FileUploader from "./../FileUploader";

export const ValidateDocument = () => {
  const [result, setResult] = useState(null);
  const cb = (data) => {
    console.log("validate", data);
    setResult(data);
  };
  return (
    <div className="container doc-section">
      <h3 className="title is-3">Validate existing document</h3>
      <p>Upload your document below to check for any existing record.</p>
      <FileUploader
        successCallback={cb}
        type="validate"
        hint="Validate existing document"
      />

      {result && (
        <div>
          {result.name && (
            <div>
              <p className="success">Found a match!</p>
              <p>Name: {result.name}</p>
              {result.size && <p>Size: {result.size}</p>}
              <p>Uploaded at: {result.uploaded}</p>
            </div>
          )}
          {!result.name && (
            <p className="error">Did not find a match for your document.</p>
          )}
        </div>
      )}
    </div>
  );
};
