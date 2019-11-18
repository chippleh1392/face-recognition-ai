import React from "react";
import "./FaceRecognition.css";
import "../Signin/Signin.css";

const FaceRecognition = ({ imageUrl, boxes }) => {
  return (
    <div className="wrap-login100">
      <div className="login100-form">
        <div className="wrap-input100">
          <img
            id="inputimage"
            alt=""
            src={imageUrl}
            width="500px"
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
  );
};

export default FaceRecognition;
