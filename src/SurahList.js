import React, { useState, useEffect, useRef } from 'react';
import './styles.css';  // Make sure this is correctly imported

const SurahList = () => {
const surahs = [
  { id: 1, number: 1, name: "அல்ஃபாதிஹா", audio: "/audio/001.al-fatihahtheOpening.mp3" },
  { id: 2, number: 2, name: "அல்பகரா", audio: "/audio/002.al-baqarahtheCow.mp3" },
  { id: 3, number: 3, name: "ஆலிஇம்ரான்", audio: "/audio/3.mp3" },
  { id: 4, number: 4, name: "அன்னிஸா", audio: "/audio/4.mp3" },
  { id: 5, number: 5, name: "அல்மாயிதா", audio: "/audio/5.mp3" },
  { id: 6, number: 6, name: "அல்அன்அம்", audio: "/audio/6.mp3" },
  { id: 7, number: 7, name: "அல்அராஃப்", audio: "/audio/7.mp3" },
  { id: 8, number: 8, name: "அல்அன்பால்", audio: "/audio/8.mp3" },
  { id: 9, number: 9, name: "அத்தவ்பா", audio: "/audio/9.mp3" },
  { id: 10, number: 10, name: "யூனுஸ்", audio: "/audio/10.mp3" },
  { id: 11, number: 11, name: "ஹூத்", audio: "/audio/11.mp3" },
  { id: 12, number: 12, name: "யூசுப்", audio: "/audio/12.mp3" },
  { id: 13, number: 13, name: "அர்ரஃத்", audio: "/audio/13.mp3" },
  { id: 14, number: 14, name: "இப்ராஹிம்", audio: "/audio/14.mp3" },
  { id: 15, number: 15, name: "அல்ஹிஜ்ர்", audio: "/audio/15.mp3" },
  { id: 16, number: 16, name: "அந்நஹ்ல்", audio: "/audio/16.mp3" },
  { id: 17, number: 17, name: "அல்இஸ்ரா", audio: "/audio/17.mp3" },
  { id: 18, number: 18, name: "அல்காஹப்", audio: "/audio/18.mp3" },
  { id: 19, number: 19, name: "மரியம்", audio: "/audio/19.mp3" },
  { id: 20, number: 20, name: "தாஹா", audio: "/audio/20.mp3" },
  { id: 21, number: 21, name: "அல்அன்பியா", audio: "/audio/21.mp3" },
  { id: 22, number: 22, name: "அல்ஹஜ்ஜு", audio: "/audio/22.mp3" },
  { id: 23, number: 23, name: "அல்முஃமினூன்", audio: "/audio/23.mp3" },
  { id: 24, number: 24, name: "அந்நூர்", audio: "/audio/24.mp3" },
  { id: 25, number: 25, name: "அல்புர்கான்", audio: "/audio/25.mp3" },
  { id: 26, number: 26, name: "அஷ்ஷுஅரா", audio: "/audio/26.mp3" },
  { id: 27, number: 27, name: "அந்நம்ல்", audio: "/audio/27.mp3" },
  { id: 28, number: 28, name: "அல்கசஸ்", audio: "/audio/28.mp3" },
  { id: 29, number: 29, name: "அல்அன்கபூத்", audio: "/audio/29.mp3" },
  { id: 30, number: 30, name: "அர்ரூம்", audio: "/audio/30.mp3" },
  { id: 31, number: 31, name: "லுக்மான்", audio: "/audio/31.mp3" },
  { id: 32, number: 32, name: "அஸ்ஸஜ்தா", audio: "/audio/32.mp3" },
  { id: 33, number: 33, name: "அல்அஹ்ஜாப்", audio: "/audio/33.mp3" },
  { id: 34, number: 34, name: "சபா", audio: "/audio/34.mp3" },
  { id: 35, number: 35, name: "அல்ஃபாதிர்", audio: "/audio/35.mp3" },
  { id: 36, number: 36, name: "யாஸீன்", audio: "/audio/36.mp3" },
  { id: 37, number: 37, name: "அஸ்ஸாஃப்ஃபாத்", audio: "/audio/37.mp3" },
  { id: 38, number: 38, name: "சாட்", audio: "/audio/38.mp3" },
  { id: 39, number: 39, name: "அஸ்ஸுமர்", audio: "/audio/39.mp3" },
  { id: 40, number: 40, name: "காஃபிரூன்", audio: "/audio/40.mp3" },
  { id: 41, number: 41, name: "ஹாஃமீம்", audio: "/audio/41.mp3" },
  { id: 42, number: 42, name: "அஷ்ஷூரா", audio: "/audio/42.mp3" },
  { id: 43, number: 43, name: "அல்ஜுக்ருஃப்", audio: "/audio/43.mp3" },
  { id: 44, number: 44, name: "அத்துகான்", audio: "/audio/44.mp3" },
  { id: 45, number: 45, name: "அல்ஜாஷியா", audio: "/audio/45.mp3" },
  { id: 46, number: 46, name: "அல்அகாப்", audio: "/audio/46.mp3" },
  { id: 47, number: 47, name: "முஹம்மது", audio: "/audio/47.mp3" },
  { id: 48, number: 48, name: "அல்ஃபத்ஹ்", audio: "/audio/48.mp3" },
  { id: 49, number: 49, name: "அல்ஹுஜுராத்", audio: "/audio/49.mp3" },
  { id: 50, number: 50, name: "காஃப்", audio: "/audio/50.mp3" },
  { id: 51, number: 51, name: "அத்தூராத்", audio: "/audio/51.mp3" },
  { id: 52, number: 52, name: "அத்துர்", audio: "/audio/52.mp3" },
  { id: 53, number: 53, name: "அன்னஜ்ம்", audio: "/audio/53.mp3" },
  { id: 54, number: 54, name: "அல்கமர்", audio: "/audio/54.mp3" },
  { id: 55, number: 55, name: "அர்ரஹ்மான்", audio: "/audio/55.mp3" },
  { id: 56, number: 56, name: "அல்வாகிஹா", audio: "/audio/56.mp3" },
  { id: 57, number: 57, name: "அல்ஹதீத்", audio: "/audio/57.mp3" },
  { id: 58, number: 58, name: "அல்முஜாதிலா", audio: "/audio/58.mp3" },
  { id: 59, number: 59, name: "அல்ஹஷ்ர்", audio: "/audio/59.mp3" },
  { id: 60, number: 60, name: "அல்மும்தஹினா", audio: "/audio/60.mp3" },
  { id: 61, number: 61, name: "அஸ்ஸஃப்ஃப்", audio: "/audio/61.mp3" },
  { id: 62, number: 62, name: "அல்ஜுமுஅ", audio: "/audio/62.mp3" },
  { id: 63, number: 63, name: "அல்முனாஃபிகூன்", audio: "/audio/63.mp3" },
  { id: 64, number: 64, name: "அத்தகாபுன்", audio: "/audio/64.mp3" },
  { id: 65, number: 65, name: "அத்தலாக்", audio: "/audio/65.mp3" },
  { id: 66, number: 66, name: "அத்தஹ்ரீம்", audio: "/audio/66.mp3" },
  { id: 67, number: 67, name: "அல்முல்க்", audio: "/audio/67.mp3" },
  { id: 68, number: 68, name: "அல்கலம்", audio: "/audio/68.mp3" },
  { id: 69, number: 69, name: "அல்ஹாக்கா", audio: "/audio/69.mp3" },
  { id: 70, number: 70, name: "அல்மஆரிஜ்", audio: "/audio/70.mp3" },
  { id: 71, number: 71, name: "நூஹ்", audio: "/audio/71.mp3" },
  { id: 72, number: 72, name: "அல்ஜின்ன்", audio: "/audio/72.mp3" },
  { id: 73, number: 73, name: "அல்முஸ்ஸம்மில்", audio: "/audio/73.mp3" },
  { id: 74, number: 74, name: "அல்முத்தஸ்ஸிர்", audio: "/audio/74.mp3" },
  { id: 75, number: 75, name: "அல்கியாமா", audio: "/audio/75.mp3" },
  { id: 76, number: 76, name: "அல்இன்ஸான்", audio: "/audio/76.mp3" },
  { id: 77, number: 77, name: "அல்மர்சலாத்", audio: "/audio/77.mp3" },
  { id: 78, number: 78, name: "அன்னபா", audio: "/audio/78.mp3" },
  { id: 79, number: 79, name: "அன்னாசிஆத்", audio: "/audio/79.mp3" },
  { id: 80, number: 80, name: "அபஸ", audio: "/audio/80.mp3" },
  { id: 81, number: 81, name: "அத்தக்வீர்", audio: "/audio/81.mp3" },
  { id: 82, number: 82, name: "அல்இன்பிதார்", audio: "/audio/82.mp3" },
  { id: 83, number: 83, name: "அல்முதப்பிஃபீன்", audio: "/audio/83.mp3" },
  { id: 84, number: 84, name: "அல்இன்ஷிகாக்", audio: "/audio/84.mp3" },
  { id: 85, number: 85, name: "அல்புரூஜ்", audio: "/audio/85.mp3" },
  { id: 86, number: 86, name: "அத்தாரிக்", audio: "/audio/86.mp3" },
  { id: 87, number: 87, name: "அல்ஆலா", audio: "/audio/87.mp3" },
  { id: 88, number: 88, name: "அல்ஹாஷியா", audio: "/audio/88.mp3" },
  { id: 89, number: 89, name: "அல்ஃபஜ்ர்", audio: "/audio/89.mp3" },
  { id: 90, number: 90, name: "அல்பலத்", audio: "/audio/90.mp3" },
  { id: 91, number: 91, name: "அஷ்ஷம்ஸ்", audio: "/audio/91.mp3" },
  { id: 92, number: 92, name: "அல்லைல்", audio: "/audio/92.mp3" },
  { id: 93, number: 93, name: "அத்ஹுஹா", audio: "/audio/93.mp3" },
  { id: 94, number: 94, name: "அல்இன்ஷிராஹ்", audio: "/audio/94.mp3" },
  { id: 95, number: 95, name: "அத்தீன்", audio: "/audio/95.mp3" },
  { id: 96, number: 96, name: "அல்அலக்", audio: "/audio/96.mp3" },
  { id: 97, number: 97, name: "அல்கத்ர்", audio: "/audio/97.mp3" },
  { id: 98, number: 98, name: "அல்பய்யினா", audio: "/audio/98.mp3" },
  { id: 99, number: 99, name: "அல்ஸில்ஸிலா", audio: "/audio/99.mp3" },
  { id: 100, number: 100, name: "அல்ஆதியாத்", audio: "/audio/100.mp3" },
  { id: 101, number: 101, name: "அல்காரிஆ", audio: "/audio/101.mp3" },
  { id: 102, number: 102, name: "அத்தகாஸுர்", audio: "/audio/102.mp3" },
  { id: 103, number: 103, name: "அல்அஸ்ர்", audio: "/audio/103.mp3" },
  { id: 104, number: 104, name: "அல்ஹுமசா", audio: "/audio/104.mp3" },
  { id: 105, number: 105, name: "அல்ஃபீல்", audio: "/audio/105.mp3" },
  { id: 106, number: 106, name: "குரைஷ்", audio: "/audio/106.mp3" },
  { id: 107, number: 107, name: "அல்மாஊன்", audio: "/audio/107.mp3" },
  { id: 108, number: 108, name: "அல்கவ்சர்", audio: "/audio/108.mp3" },
  { id: 109, number: 109, name: "அல்காஃபிரூன்", audio: "/audio/109.mp3" },
  { id: 110, number: 110, name: "அன்நஸ்ர்", audio: "/audio/110.mp3" },
  { id: 111, number: 111, name: "அல்மசத்", audio: "/audio/111.mp3" },
  { id: 112, number: 112, name: "அல்இக்லாஸ்", audio: "/audio/112.mp3" },
  { id: 113, number: 113, name: "அல்ஃபலக்", audio: "/audio/113.mp3" },
  { id: 114, number: 114, name: "அன்னாஸ்", audio: "/audio/114.mp3" }
];

  


const [surahList, setSurahList] = useState(surahs);
const [searchQuery, setSearchQuery] = useState("");
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [audioLoadingState, setAudioLoadingState] = useState({});
const [currentSurahIndex, setCurrentSurahIndex] = useState(0);
const [hasUserInteracted, setHasUserInteracted] = useState(false);  // Track user interaction
const audioRefs = useRef([]);

const handleSearchChange = (e) => setSearchQuery(e.target.value);

const handleAudioLoad = (number) => {
  setAudioLoadingState((prevState) => ({
    ...prevState,
    [number]: 'loaded',
  }));
};

const handleAudioError = (number) => {
  setAudioLoadingState((prevState) => ({
    ...prevState,
    [number]: 'error',
  }));
};

const handleAudioEnd = () => {
  const nextSurahIndex = (currentSurahIndex + 1) % surahList.length;
  setCurrentSurahIndex(nextSurahIndex);  // Move to the next surah

  if (audioRefs.current[nextSurahIndex]) {
    audioRefs.current[nextSurahIndex].currentTime = 0; // Reset the time to 0
    audioRefs.current[nextSurahIndex].play(); // Play the next surah
  }
};

useEffect(() => {
  const handleUserInteraction = () => {
    setHasUserInteracted(true);
  };

  // Listen for user clicks or key presses to enable autoplay
  window.addEventListener('click', handleUserInteraction);
  window.addEventListener('keydown', handleUserInteraction);

  return () => {
    window.removeEventListener('click', handleUserInteraction);
    window.removeEventListener('keydown', handleUserInteraction);
  };
}, []);

useEffect(() => {
  if (hasUserInteracted && audioRefs.current[currentSurahIndex]) {
    audioRefs.current[currentSurahIndex].currentTime = 0;  // Reset to 0:00
    audioRefs.current[currentSurahIndex].play();  // Play the next audio
  }
}, [currentSurahIndex, hasUserInteracted]);

const filteredSurahs = surahList.filter((surah) =>
  surah.name.toLowerCase().includes(searchQuery.toLowerCase())
);

return (
  <div>
    <header>
      <div className="header-container">
        <div className="left">
          <h1>குர்ஆன்</h1>
        </div>
        <div className="center">
          <input
            type="text"
            className="search-input"
            placeholder="Search Surahs..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <div className="right">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="menu-button">Menu</button>
        </div>
      </div>
      {isMenuOpen && (
        <div className={`surahlist ${isMenuOpen ? 'show' : ''}`}>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      )}
    </header>

    <main>
      <ul>
        {filteredSurahs.map((surah, index) => (
          <li key={surah.number} className="surah-item">
            <h3>{surah.name} ({surah.number})</h3>
            <audio
              ref={(el) => audioRefs.current[index] = el}
              controls
              onCanPlay={() => handleAudioLoad(surah.number)}
              onError={() => handleAudioError(surah.number)}
              onEnded={handleAudioEnd}
            >
              <source src={surah.audio || '/default-audio.mp3'} type="audio/mp3" />
              {audioLoadingState[surah.number] === 'loaded' && <p>Audio Loaded</p>}
              {audioLoadingState[surah.number] === 'error' && <p>Error loading audio.</p>}
              {!audioLoadingState[surah.number] && <p>Loading audio...</p>}
              Your browser does not support the audio element.
            </audio>
          </li>
        ))}
      </ul>
    </main>

    <footer>
      <p>&copy; 2024 Surah List App. All rights reserved.</p>
    </footer>
  </div>
);
};

export default SurahList;