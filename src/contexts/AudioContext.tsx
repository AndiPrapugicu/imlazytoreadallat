import React, { createContext, useState, ReactNode } from "react";

interface AudioContextProps {
  currentAudio: string | null;
  setCurrentAudio: (audio: string | null) => void;
}

export const AudioContext = createContext<AudioContextProps | undefined>(
  undefined
);

export const AudioProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentAudio, setCurrentAudio] = useState<string | null>(null);

  return (
    <AudioContext.Provider value={{ currentAudio, setCurrentAudio }}>
      {children}
    </AudioContext.Provider>
  );
};
