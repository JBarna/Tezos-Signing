import React, { Component } from "react";
import FileUploader from "./../FileUploader";

export const UploadDocument = () => {
  const cb = (data) => {
    console.log("upload", data);
  };
  return (
    <div className="container doc-section">
      <h3 className="title is-3">Upload new document</h3>
      <p>Upload your document below to record your document on Tezos.</p>
      <FileUploader
        hint="Upload new document"
        type="register"
        successCallback={cb}
      />
    </div>
  );
};
