import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import "./Summary.css";

const Summary: React.FC = () => {
  const API_URL = import.meta.env.PROD
    ? "https://imlazytoreadallat-backend.onrender.com"
    : "/api";

  const [file, setFile] = useState<File | null>(null);
  const [summary, setSummary] = useState<string | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleGenerateSummary = async (e: FormEvent) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a file!");
      return;
    }

    // Citește textul din fișier
    const text = await file.text();

    try {
      const response = await axios.post(
        `${API_URL}/summarize`,
        { text },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      setSummary(response.data.summary);

      const blob = new Blob([response.data.summary], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      setDownloadUrl(url);
    } catch (error) {
      console.error("Error generating summary:", error);
    }
  };

  return (
    <div className="summary-page">
      <div className="summary-header">
        <h1>Generate Summary</h1>
        <p>
          Upload your documents, articles, or notes, and let our AI summarize
          them for you. Save time and focus on what matters most by getting
          concise and easy-to-read summaries in seconds.
        </p>
      </div>
      <div className="">
        <form onSubmit={handleGenerateSummary} className="upload-container">
          <h2 className="">Upload File</h2>
          <label className="drag-drop-area" htmlFor="file">
            <p>
              Drag and drop files here, or <span>browse</span> your computer.
            </p>
          </label>
          <input type="file" id="file" onChange={handleFileChange} />
          <button type="submit">Generate Summary</button>
        </form>
      </div>
      {summary && (
        <div className="summary-result">
          <h3>Summary:</h3>
          <pre className="text-display">{summary}</pre>
          {downloadUrl && (
            <a href={downloadUrl} download="summary.txt">
              Download Summary
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default Summary;
