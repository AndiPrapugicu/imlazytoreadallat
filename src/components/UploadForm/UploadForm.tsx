import React, { useState, useRef, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { FaPlay, FaPause, FaVolumeUp } from "react-icons/fa"; // Importăm iconițele
import "./UploadForm.css";

const UploadForm: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string>("");
  const [fileContent, setFileContent] = useState<string | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [backgroundType, setBackgroundType] = useState<"lofi" | "rap">("lofi");
  const [language, setLanguage] = useState<string>("en");
  // const [musicVolume, setMusicVolume] = useState<number>(0.5);
  // const [voiceVolume, setVoiceVolume] = useState<number>(1);
  const [progress, setProgress] = useState<number>(0); // Progresul generării audio
  const [isPlaying, setIsPlaying] = useState<boolean>(false); // Starea audio
  const [audioProgress, setAudioProgress] = useState<number>(0); // Progresul audio
  const [volume, setVolume] = useState<number>(1);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!file) {
      setUploadStatus("Selectează un fișier!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setUploadStatus("Se încarcă fișierul...");
      const uploadRes = await axios.post("/file/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setUploadStatus("Fișier încărcat cu succes!");

      const contentRes = await axios.get("/file/content", {
        params: { path: uploadRes.data.path },
      });
      setFileContent(contentRes.data.content);
    } catch (error) {
      console.error("Eroare la upload:", error);
      setUploadStatus("Eroare la upload.");
    }
  };

  const handleGenerateAudio = async () => {
    if (!fileContent) return;

    try {
      setUploadStatus("Se generează audio...");
      setProgress(0); // Resetează progresul

      // Simulăm progresul până la 90%
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev < 90) {
            return prev + 1; // Crește progresul cu 1% la fiecare 100ms
          } else {
            clearInterval(interval); // Oprim simularea la 90%
            return prev;
          }
        });
      }, 100);

      // Așteptăm finalizarea generării audio
      const ttsRes = await axios.post("/tts/generate", {
        text: fileContent,
        backgroundType,
        language,
      });

      clearInterval(interval); // Oprim simularea progresului
      setProgress(100); // Setăm progresul la 100% după finalizare
      setAudioUrl(ttsRes.data.audioUrl);
      setUploadStatus("Audio generat cu succes!");
    } catch (error) {
      console.error("Eroare la generarea audio:", error);
      setUploadStatus("Eroare la generarea audio.");
      setProgress(0); // Resetează progresul în caz de eroare
    }
  };

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleAudioProgress = () => {
    if (audioRef.current) {
      const progress =
        (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setAudioProgress(progress);
    }
  };

  const handleSeek = (e: ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      const seekTime =
        (Number(e.target.value) / 100) * audioRef.current.duration;
      audioRef.current.currentTime = seekTime;
      setAudioProgress(Number(e.target.value));
    }
  };

  const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div className="upload-container">
      <h2>Upload File</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="file" className="drag-drop-area">
          <p>
            Drag and drop files here, or <span>browse</span> your computer.
          </p>
        </label>
        <input type="file" id="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {uploadStatus && <p>{uploadStatus}</p>}
      {fileContent && (
        <div className="file-content">
          <h3>Conținut Fișier:</h3>
          <pre className="text-display">{fileContent}</pre>
          <label>
            Selectează tipul de fundal:
            <select
              value={backgroundType}
              onChange={(e) =>
                setBackgroundType(e.target.value as "lofi" | "rap")
              }
              className="styled-select"
            >
              <option value="lofi">Chill Lo-fi</option>
              <option value="rap">Chill Rap</option>
            </select>
          </label>
          <label>
            Selectează limba:
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="styled-select"
            >
              <option value="en">English</option>
              <option value="ro">Română</option>
              <option value="fr">Français</option>
              <option value="es">Español</option>
              <option value="de">Deutsch</option>
              <option value="it">Italiano</option>
              <option value="ja">日本語 (Japanese)</option>
              <option value="zh">中文 (Chinese)</option>
            </select>
          </label>
          <button onClick={handleGenerateAudio}>Generează Audio</button>
        </div>
      )}
      {progress > 0 && (
        <div className="progress-bar-container">
          {/* <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}></div>
          </div> */}
          <p>{progress}%</p>
        </div>
      )}
      {audioUrl && (
        <div className="audio-player">
          <audio
            ref={audioRef}
            src={audioUrl}
            onTimeUpdate={handleAudioProgress}
          ></audio>
          <div className="audio-controls">
            <button onClick={handlePlayPause} className="play-pause-btn">
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            <span className="time-display">
              {audioRef.current && !isNaN(audioRef.current.currentTime)
                ? new Date(audioRef.current.currentTime * 1000)
                    .toISOString()
                    .substr(14, 5)
                : "00:00"}
            </span>
            <input
              type="range"
              min="0"
              max="100"
              value={audioProgress}
              onChange={handleSeek}
              className="progress-bar"
            />
            <span className="time-display">
              {audioRef.current && !isNaN(audioRef.current.duration)
                ? new Date(audioRef.current.duration * 1000)
                    .toISOString()
                    .substr(14, 5)
                : "00:00"}
            </span>
            <div className="volume-control">
              <FaVolumeUp className="volume-icon" />
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="volume-bar"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadForm;
