import React, { useState, useEffect, useRef } from 'react';
import './styles.css';  // Make sure this is correctly imported
import Header from './Header'; // Import the Header component
import Footer from './Footer'; // Import the Footer component



const SurahList = () => {
const surahs = 
  [
    { id: 1, number: 1, name: "அல்ஃபாதிஹா", audio: "/audio/001.al-fatihahtheOpening.mp3" },
    { id: 2, number: 2, name: "அல்பகரா", audio: "/audio/002.al-baqarahtheCow.mp3" },
    { id: 3, number: 3, name: "ஆலிஇம்ரான்", audio: "/audio/003.al-imrantheFamilyOfImran.mp3" },
    { id: 4, number: 4, name: "அன்னிஸா", audio: "/audio/004.an-nisatheWomen.mp3" },
    { id: 5, number: 5, name: "அல்மாயிதா", audio: "/audio/005.al-maidahtheFood.mp3" },
    { id: 6, number: 6, name: "அல்அன்அம்", audio: "/audio/006.al-anamtheCattle.mp3" },
    { id: 7, number: 7, name: "அல்அராஃப்", audio: "/audio/007.al-araftheElevatedPlaces.mp3" },
    { id: 8, number: 8, name: "அல்அன்பால்", audio: "/audio/008.al-anfalvoluntaryGifts.mp3" },
    { id: 9, number: 9, name: "அத்தவ்பா", audio: "/audio/009.al-baraat-At-taubahtheImmunity.mp3" },
    { id: 10, number: 10, name: "யூனுஸ்", audio: "/audio/010.yunusjonah.mp3" },
    { id: 11, number: 11, name: "ஹூத்", audio: "/audio/011.hudhud.mp3" },
    { id: 12, number: 12, name: "யூசுப்", audio: "/audio/012.yusufjoseph.mp3" },
    { id: 13, number: 13, name: "அர்ரஃத்", audio: "/audio/013.ar-radtheThunder.mp3" },
    { id: 14, number: 14, name: "இப்ராஹிம்", audio: "/audio/014.ibrahimabraham.mp3" },
    { id: 15, number: 15, name: "அல்ஹிஜ்ர்", audio: "/audio/015.al-hijrtheRock.mp3" },
    { id: 16, number: 16, name: "அந்நஹ்ல்", audio: "/audio/016.an-nahltheBee.mp3" },
    { id: 17, number: 17, name: "அல்இஸ்ரா", audio: "/audio/017.baniIsrailtheIsraelites.mp3" },
    { id: 18, number: 18, name: "அல்காஹப்", audio: "/audio/018.al-kahftheCave.mp3" },
    { id: 19, number: 19, name: "மரியம்", audio: "/audio/019.maryammary.mp3" },
    { id: 20, number: 20, name: "தாஹா", audio: "/audio/020.taHataHa.mp3" },
    { id: 21, number: 21, name: "அல்அன்பியா", audio: "/audio/021.al-anbiyatheProphets.mp3" },
    { id: 22, number: 22, name: "அல்ஹஜ்ஜு", audio: "/audio/022.al-hajjthePilgrimage.mp3" },
    { id: 23, number: 23, name: "அல்முஃமினூன்", audio: "/audio/023.al-muminuntheBelievers.mp3" },
    { id: 24, number: 24, name: "அந்நூர்", audio: "/audio/024.an-nurtheLight.mp3" },
    { id: 25, number: 25, name: "அல்புர்கான்", audio: "/audio/025.al-furqantheDiscrimination.mp3" },
    { id: 26, number: 26, name: "அஷ்ஷுஅரா", audio: "/audio/026.ash-shuarathePoets.mp3" },
    { id: 27, number: 27, name: "அந்நம்ல்", audio: "/audio/027.an-namltheNaml.mp3" },
    { id: 28, number: 28, name: "அல்கசஸ்", audio: "/audio/028.al-qasastheNarrative.mp3" },
    { id: 29, number: 29, name: "அல்அன்கபூத்", audio: "/audio/029.al-ankabuttheSpider.mp3" },
    { id: 30, number: 30, name: "அர்ரூம்", audio: "/audio/030.ar-rumtheRomans.mp3" },
    { id: 31, number: 31, name: "லுக்மான்", audio: "/audio/031.luqmanluqman.mp3" },
  { id: 32, number: 32, name: "அஸ்ஸஜ்தா", audio: "/audio/032.as-sajdahtheAdoration.mp3" },
  { id: 33, number: 33, name: "அல்அஹ்ஜாப்", audio: "/audio/033.al-ahzabtheAllies.mp3" },
  { id: 34, number: 34, name: "சபா", audio: "/audio/034.al-sabatheSaba.mp3" },
  { id: 35, number: 35, name: "அல்ஃபாதிர்", audio: "/audio/035.al-fatirtheOriginator.mp3" },
  { id: 36, number: 36, name: "யாஸீன்", audio: "/audio/036.yaSinyaSin.mp3" },
  { id: 37, number: 37, name: "அஸ்ஸாஃப்ஃபாத்", audio: "/audio/037.as-saffatthoseRangingInRanks.mp3" },
  { id: 38, number: 38, name: "சாட்", audio: "/audio/038.sadsad.mp3" },
  { id: 39, number: 39, name: "அஸ்ஸுமர்", audio: "/audio/039.az-zumartheCompanies.mp3" },
  { id: 40, number: 40, name: "காஃபிரூன்", audio: "/audio/040.al-mumintheBeliever.mp3" },
  { id: 41, number: 41, name: "ஹாஃமீம்", audio: "/audio/041.haMimhaMim.mp3" },
  { id: 42, number: 42, name: "அஷ்ஷூரா", audio: "/audio/042.ash-shuracounsel.mp3" },
  { id: 43, number: 43, name: "அல்ஜுக்ருஃப்", audio: "/audio/043.az-zukhrufgold.mp3" },
  { id: 44, number: 44, name: "அத்துகான்", audio: "/audio/044.ad-dukhantheDrought.mp3" },
  { id: 45, number: 45, name: "அல்ஜாஷியா", audio: "/audio/045.al-jathiyahtheKneeling.mp3" },
  { id: 46, number: 46, name: "அல்அகாப்", audio: "/audio/046.al-ahqaftheSandhills.mp3" },
  { id: 47, number: 47, name: "முஹம்மது", audio: "/audio/047.muhammadmuhammad.mp3" },
  { id: 48, number: 48, name: "அல்ஃபத்ஹ்", audio: "/audio/048.al-faththeVictory.mp3" },
  { id: 49, number: 49, name: "அல்ஹுஜுராத்", audio: "/audio/049.al-hujurattheApartments.mp3" },
  { id: 50, number: 50, name: "காஃப்", audio: "/audio/050.qafqaf.mp3" },
  { id: 51, number: 51, name: "அத்தூராத்", audio: "/audio/051.ad-dhariyattheScatterers.mp3" },
  { id: 52, number: 52, name: "அத்துர்", audio: "/audio/052.at-turtheMountain.mp3" },
  { id: 53, number: 53, name: "அன்னஜ்ம்", audio: "/audio/053.an-najmtheStar.mp3" },
  { id: 54, number: 54, name: "அல்கமர்", audio: "/audio/054.al-qamartheMoon.mp3" },
  { id: 55, number: 55, name: "அர்ரஹ்மான்", audio: "/audio/055.ar-rahmantheBeneficent.mp3" },
  { id: 56, number: 56, name: "அல்வாகிஹா", audio: "/audio/056.al-waqiahtheEvent.mp3" },
  { id: 57, number: 57, name: "அல்ஹதீத்", audio: "/audio/057.al-hadidiron.mp3" },
  { id: 58, number: 58, name: "அல்முஜாதிலா", audio: "/audio/058.al-mujadilahthePleadingWoman.mp3" },
  { id: 59, number: 59, name: "அல்ஹஷ்ர்", audio: "/audio/059.al-hashrtheBanishment.mp3" },
  { id: 60, number: 60, name: "அல்மும்தஹினா", audio: "/audio/060.al-mumtahanahtheWomanWhoIsExamined.mp3" },
  { id: 61, number: 61, name: "அஸ்ஸஃப்ஃப்", audio: "/audio/061.as-safftheRanks.mp3" },
  { id: 62, number: 62, name: "அல்ஜுமுஅ", audio: "/audio/062.al-jumuahtheCongregation.mp3" },
  { id: 63, number: 63, name: "அல்முனாஃபிகூன்", audio: "/audio/063.al-munafiquntheHypocrites.mp3" },
  { id: 64, number: 64, name: "அத்தகாபுன்", audio: "/audio/064.at-taghabuntheManifestationOfLosses.mp3" },
  { id: 65, number: 65, name: "அத்தலாக்", audio: "/audio/065.at-talaqdivorce.mp3" },
  { id: 66, number: 66, name: "அத்தஹ்ரீம்", audio: "/audio/066.at-tahrimtheProhibition.mp3" },
  { id: 67, number: 67, name: "அல்முல்க்", audio: "/audio/067.al-mulktheKingdom.mp3" },
  { id: 68, number: 68, name: "அல்கலம்", audio: "/audio/068.al-qalamthePen.mp3" },
  { id: 69, number: 69, name: "அல்ஹாக்கா", audio: "/audio/069.al-haqqahtheSureTruth.mp3" },
  { id: 70, number: 70, name: "அல்மஆரிஜ்", audio: "/audio/070.al-maarijtheWaysOfAscent.mp3" },
  { id: 71, number: 71, name: "நூஹ்", audio: "/audio/071.nuhnoah.mp3" },
  { id: 72, number: 72, name: "அல்ஜின்ன்", audio: "/audio/072.al-jinntheJinn.mp3" },
  { id: 73, number: 73, name: "அல்முஸ்ஸம்மில்", audio: "/audio/073.al-muzzammiltheOneCoveringHimself.mp3" },
  { id: 74, number: 74, name: "அல்முத்தஸ்ஸிர்", audio: "/audio/074.al-muddaththirtheOneWrappingHimselfUp.mp3" },
  { id: 75, number: 75, name: "அல்கியாமா", audio: "/audio/075.al-qiyamahtheResurrection.mp3" },
  { id: 76, number: 76, name: "அல்இன்ஸான்", audio: "/audio/076.al-insantheMan.mp3" },
  { id: 77, number: 77, name: "அல்மர்சலாத்", audio: "/audio/077.al-mursalatthoseSentForth.mp3" },
  { id: 78, number: 78, name: "அன்னபா", audio: "/audio/078.an-nabatheAnnouncement.mp3" },
  { id: 79, number: 79, name: "அன்னாசிஆத்", audio: "/audio/079.an-naziatthoseWhoYearn.mp3" },
  { id: 80, number: 80, name: "அபஸ", audio: "/audio/080.abasaheFrowned.mp3" },
  { id: 81, number: 81, name: "அத்தக்வீர்", audio: "/audio/081.at-takwirtheFoldingUp.mp3" },
  { id: 82, number: 82, name: "அல்இன்பிதார்", audio: "/audio/082.al-infitartheCleaving.mp3" },
  { id: 83, number: 83, name: "அல்முதப்பிஃபீன்", audio: "/audio/083.at-tatfifdefaultInDuty.mp3" },
  { id: 84, number: 84, name: "அல்இன்ஷிகாக்", audio: "/audio/084.al-inshiqaqtheBurstingAsunder.mp3" },
  { id: 85, number: 85, name: "அல்புரூஜ்", audio: "/audio/085.al-burujtheStars.mp3" },
  { id: 86, number: 86, name: "அத்தாரிக்", audio: "/audio/086.at-tariqtheComerByNight.mp3" },
  { id: 87, number: 87, name: "அல்ஆலா", audio: "/audio/087.al-alatheMostHigh.mp3" },
  { id: 88, number: 88, name: "அல்ஹாஷியா", audio: "/audio/088.al-ghashiyahtheOverwhelmingEvent.mp3" },
  { id: 89, number: 89, name: "அல்ஃபஜ்ர்", audio: "/audio/089.al-fajrtheDaybreak.mp3" },
  { id: 90, number: 90, name: "அல்பலத்", audio: "/audio/090.al-baladtheCity.mp3" },
  { id: 91, number: 91, name: "அஷ்ஷம்ஸ்", audio: "/audio/091.ash-shamstheSun.mp3" },
  { id: 92, number: 92, name: "அல்லைல்", audio: "/audio/092.al-lailtheNight.mp3" },
  { id: 93, number: 93, name: "அத்ஹுஹா", audio: "/audio/093.ad-duhatheBrightnessOfTheDay.mp3" },
  { id: 94, number: 94, name: "அல்இன்ஷிராஹ்", audio: "/audio/094.al-inshirahtheExpansion.mp3" },
  { id: 95, number: 95, name: "அத்தீன்", audio: "/audio/095.at-tintheFig.mp3" },
  { id: 96, number: 96, name: "அல்அலக்", audio: "/audio/096.al-alaqtheClot.mp3" },
  { id: 97, number: 97, name: "அல்கத்ர்", audio: "/audio/097.al-qadrtheMajesty.mp3" },
  { id: 98, number: 98, name: "அல்பய்யினா", audio: "/audio/098.al-bayyinahtheClearEvidence.mp3" },
  { id: 99, number: 99, name: "அல்ஸில்ஸிலா", audio: "/audio/099.al-zilzaltheShaking.mp3" },
  { id: 100, number: 100, name: "அல்ஆதியாத்", audio: "/audio/100.al-adiyattheAssaulters.mp3" },
  { id: 101, number: 101, name: "அல்காரிஆ", audio: "/audio/101.al-qariahtheCalamity.mp3" },
  { id: 102, number: 102, name: "அத்தகாஸுர்", audio: "/audio/102.at-takathurtheAbundanceOfWealth.mp3" },
  { id: 103, number: 103, name: "அல்அஸ்ர்", audio: "/audio/103.al-asrtheTime.mp3" },
  { id: 104, number: 104, name: "அல்ஹுமசா", audio: "/audio/104.al-humazahtheSlanderer.mp3" },
  { id: 105, number: 105, name: "அல்ஃபீல்", audio: "/audio/105.al-filtheElephant.mp3" },
  { id: 106, number: 106, name: "குரைஷ்", audio: "/audio/106.al-quraishtheQuraish.mp3" },
  { id: 107, number: 107, name: "அல்மாஊன்", audio: "/audio/107.al-maunactsOfKindness.mp3" },
  { id: 108, number: 108, name: "அல்கவ்சர்", audio: "/audio/108.al-kauthartheAbundanceOfGood.mp3" },
  { id: 109, number: 109, name: "அல்காஃபிரூன்", audio: "/audio/109.al-kafiruntheDisbelievers.mp3" },
  { id: 110, number: 110, name: "அன்நஸ்ர்", audio: "/audio/110.an-nasrtheHelp.mp3" },
  { id: 111, number: 111, name: "அல்மசத்", audio: "/audio/111.al-lahabtheFlame.mp3" },
  { id: 112, number: 112, name: "அல்இக்லாஸ்", audio: "/audio/112.al-ikhlastheUnity.mp3" },
  { id: 113, number: 113, name: "அல்ஃபலக்", audio: "/audio/113.al-falaqtheDawn.mp3" },
  { id: 114, number: 114, name: "அன்னாஸ்", audio: "/audio/114.an-nastheMen.mp3" },  
];

const [surahList, setSurahList] = useState(surahs);
const [searchQuery, setSearchQuery] = useState("");
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [audioLoadingState, setAudioLoadingState] = useState({});
const [currentSurahIndex, setCurrentSurahIndex] = useState(0);
const [hasUserInteracted, setHasUserInteracted] = useState(false);
const audioRefs = useRef([]);

const handleSearchChange = (e) => setSearchQuery(e.target.value);

const handleAudioLoad = (number) => {
  setAudioLoadingState((prevState) => ({
    ...prevState,
    [number]: "loaded",
  }));
};

const handleAudioError = (number) => {
  setAudioLoadingState((prevState) => ({
    ...prevState,
    [number]: "error",
  }));
};

const handleAudioEnd = () => {
  const nextSurahIndex = (currentSurahIndex + 1) % surahList.length;
  setCurrentSurahIndex(nextSurahIndex);

  if (audioRefs.current[nextSurahIndex]) {
    audioRefs.current[nextSurahIndex].currentTime = 0;
    audioRefs.current[nextSurahIndex].play();
  }
};

useEffect(() => {
  const handleUserInteraction = () => {
    setHasUserInteracted(true);
  };

  window.addEventListener("click", handleUserInteraction);
  window.addEventListener("keydown", handleUserInteraction);

  return () => {
    window.removeEventListener("click", handleUserInteraction);
    window.removeEventListener("keydown", handleUserInteraction);
  };
}, []);

useEffect(() => {
  if (hasUserInteracted && audioRefs.current[currentSurahIndex]) {
    audioRefs.current[currentSurahIndex].currentTime = 0;
    audioRefs.current[currentSurahIndex].play();
  }
}, [currentSurahIndex, hasUserInteracted]);

const filteredSurahs = surahList.filter((surah) =>
  surah.name.toLowerCase().includes(searchQuery.toLowerCase())
);

return (
  <div>
    {/* Use the Header component */}
    <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    <main>
      <ul>
        {filteredSurahs.map((surah, index) => (
          <li key={surah.number} className="surah-item">
            <h3>
              {surah.name} ({surah.number})
            </h3>
            <audio
              ref={(el) => (audioRefs.current[index] = el)}
              controls
              onCanPlay={() => handleAudioLoad(surah.number)}
              onError={() => handleAudioError(surah.number)}
              onEnded={handleAudioEnd}
            >
              <source
                src={surah.audio || "/default-audio.mp3"}
                type="audio/mp3"
              />
              {audioLoadingState[surah.number] === "loaded" && (
                <p>Audio Loaded</p>
              )}
              {audioLoadingState[surah.number] === "error" && (
                <p>Error loading audio.</p>
              )}
              {!audioLoadingState[surah.number] && <p>Loading audio...</p>}
              Your browser does not support the audio element.
            </audio>
          </li>
        ))}
      </ul>
    </main>
    <Footer />
  </div>
);
};

export default SurahList;