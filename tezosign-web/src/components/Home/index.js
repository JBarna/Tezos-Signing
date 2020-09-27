import { UploadDocument } from "../UploadDocument";
import React, { useState } from "react";

import { ValidateDocument } from "../ValidateDocument";

export const Home = () => {
  const [action, setAction] = useState(null);

  return (
    <div className="container">
      {!action && (
        <div className="full-content">
          <h3 className="title is-2 centered">Welcome to Tezosign</h3>
          <p className="subtitle is-5 centered">
            Validate and prove ownership of your documents on the Tezos
            blockchain.
          </p>
          <div className="columns">
            <div className="column">
              <button
                className="button action-button is-success is-large"
                onClick={() => setAction("upload")}
              >
                Upload new Document
              </button>
            </div>

            <div className="column">
              <button
                className="button action-button is-info is-large"
                onClick={() => setAction("validate")}
              >
                Validate existing Document
              </button>
            </div>
          </div>
        </div>
      )}
      {action && (
        <div>
          <button className="button" onClick={() => setAction(null)}>
            ⟵ Go Back
          </button>
        </div>
      )}
      {action === "upload" && <UploadDocument />}
      {action === "validate" && <ValidateDocument />}
    </div>
  );
};
