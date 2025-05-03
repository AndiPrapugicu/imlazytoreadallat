import React, { useState } from "react";
import AudioPlayer from "../AudioPlayer/AudioPlayer";

interface FileRecord {
  id: number;
  filename: string;
  status: string;
  audioUrl?: string;
  processedAt?: string;
}

const dummyFiles: FileRecord[] = [
  {
    id: 1,
    filename: "document.pdf",
    status: "Procesat",
    audioUrl: "/audio/example1.mp3",
    processedAt: new Date().toISOString(),
  },
  {
    id: 2,
    filename: "raport.txt",
    status: "În curs",
    audioUrl: undefined,
    processedAt: undefined,
  },
  {
    id: 3,
    filename: "studii.docx",
    status: "Procesat",
    audioUrl: "/audio/example2.mp3",
    processedAt: new Date().toISOString(),
  },
];

const Dashboard: React.FC = () => {
  const [files] = useState<FileRecord[]>(dummyFiles);

  return (
    <div>
      <h1>Dashboard</h1>
      {files.length === 0 ? (
        <p>Nu există fișiere încărcate.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Fișier</th>
              <th>Status</th>
              <th>Audio</th>
              <th>Data Procesării</th>
            </tr>
          </thead>
          <tbody>
            {files.map((file) => (
              <tr key={file.id}>
                <td>{file.id}</td>
                <td>{file.filename}</td>
                <td>{file.status}</td>
                <td>
                  {file.audioUrl ? (
                    <AudioPlayer src={file.audioUrl} />
                  ) : (
                    "Nu există audio"
                  )}
                </td>
                <td>
                  {file.processedAt
                    ? new Date(file.processedAt).toLocaleString()
                    : "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Dashboard;
