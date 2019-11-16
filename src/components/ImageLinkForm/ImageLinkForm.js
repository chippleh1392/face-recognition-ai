import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="Instructions">
        {"Instructions: Enter the URL of an image and click Find Face."}
        <br />
        {" Facial Recognition AI will detect any faces in the picture."}
      </p>
      <div className="form center">
        <div className="form center pa4 br3 shadow-5">
          <input
            className="f4 pa2 w-70 center"
            type="tex"
            onChange={onInputChange}
          />
          <button
            type="submit"
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-red"
            onClick={onButtonSubmit}
          >
            Find Face
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
