import React from "react";
import UploadForm from "./UploadForm";
import "./UploadForm.css"; // Import the CSS file for styling

const Upload: React.FC = () => {
  return (
    <div className="upload-page">
      <div className="upload-content">
        <h1>Convert Text to Speech</h1>
        <p>
          Upload your documents, articles, or notes, and let our AI transform
          them into natural-sounding audio. Perfect for when you're on the go or
          just want to relax and listen instead of reading. It's simple, fast,
          and convenient!
        </p>
        <UploadForm />
      </div>
    </div>
  );
};

export default Upload;
