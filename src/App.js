import React, { useRef } from 'react';

function App() {
  const audioRef = useRef(null);  // Create a reference to the audio element

  const playSound = () => {
    audioRef.current.play();  // Play the sound when the image is clicked
  };

  return (
    <div className="container" onClick={playSound}>
      <img src="img/gisele-face.png" alt="gisele's face"/>
      Click me!
      <audio ref={audioRef} src="sounds/sound1.mp3" />
    </div>
  );
}

export default App;
