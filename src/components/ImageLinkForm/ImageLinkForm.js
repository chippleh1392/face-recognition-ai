import React from "react";
import "./ImageLinkForm.css";
import "../Signin/Signin.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit, imageUrl, boxes }) => {
  return (
    <div>
      <div className="container-login100">
        <div className="wrap-image-form100">
          <div className="login100-form">
            <h1 className="login200-form-title m-r-50 m-l-50 m-t-0">
              FIND A FACE
            </h1>
            <div className="p-b-40">
              <img src="smiley face.png" width="120px" height="auto" />
            </div>
            <p className="p-b-40">
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
                <button className="login100-form-btn" onClick={onButtonSubmit}>
                  Find Face
                </button>
              </div>
            </div>
          </div>
          <div className="center ma relative">
            <div className="mt2">
              <img
                id="inputimage"
                alt=""
                src={imageUrl}
                width="100%"
                height="auto"
              />
              {boxes.map(box => {
                return (
                  <div
                    key={box.topRow}
                    className="bounding-box"
                    style={{
                      top: box.topRow,
                      right: box.rightCol,
                      bottom: box.bottomRow,
                      left: box.leftCol
                    }}
                  ></div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
