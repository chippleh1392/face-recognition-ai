import React from "react";
import "./ImageLinkForm.css";
import "../Signin/Signin.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-image-form100">
            <div className="login100-form">
              <p className="Instructions">
                {"Instructions: Enter the URL of an image and click Find Face."}
                <br />
                {" Facial Recognition AI will detect any faces in the picture."}
              </p>
              <div className="wrap-input100">
                <input
                  className="input100"
                  type="tex"
                  placeholder="Image URL"
                  onChange={onInputChange}
                />
              </div>
              <div className="container-login100-form-btn">
                <div className="wrap-login100-form-btn">
                  <div className="login100-form-bgbtn"></div>
                  <button
                    className="login100-form-btn"
                    onClick={onButtonSubmit}
                  >
                    Find Face
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
