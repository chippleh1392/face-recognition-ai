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
        <div className="">
          <input className="" type="tex" onChange={onInputChange} />
          <button type="submit" className="" onClick={onButtonSubmit}>
            Find Face
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
