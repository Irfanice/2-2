import React, { useState, useEffect } from 'react';
import './styles.css';

const Footer = () => {
  // Array of Quran verses (you can add 100-150 verses here)
  const quranVerses = [
    "Surah Al-Fatiha (1:1) - 'In the name of Allah, the Most Gracious, the Most Merciful.'",
    "Surah Al-Baqarah (2:2) - 'This is the Book about which there is no doubt, a guidance for those conscious of Allah.'",
    "Surah Al-Ikhlas (112:1) - 'Say, 'He is Allah, [Who is] One,''",
    "Surah Al-Isra (17:105) - 'And with the truth We have sent it down, and with the truth it has descended.'",
    "Surah Al-Ankabut (29:69) - 'And those who strive for Us - We will surely guide them to Our ways.'",
    "சூரா அல்-பகரா (2:255) - 'அல்லாஹ், எம் ஆளுமை கொண்டவராக இருப்பவர், அவன் உயிருடன் வாழ்ந்து செயலாற்றுபவர்.'",
    "சூரா அல்-இஸ்ரா (17:17) - 'நாம் உங்களுடைய பூர்விகர்களுக்கு முன்னேற்றம் அளித்தோம்.'",
    "சூரா அல்-முஅமினூன் (23:1) - 'நீங்கள் நம்புவோரே! நீங்கள் நன்மையைச் செய்யும்படி உள்ளவர்களாக இருக்க வேண்டும்.'",
    "Surah At-Tawbah (9:5) - 'Then, when the sacred months have passed, kill the polytheists wherever you find them.'",
    "Surah Al-Mumtahanah (60:8) - 'Allah does not forbid you from those who do not fight you because of religion.'",
    "சூரா அல்-அஹ்சாப் (33:56) - 'உதாரணமாக, இறைவன் நபியை பாராட்டும் பரிசு பெறுகிறார்.'",
    "Surah Al-Baqarah (2:163) - 'And your god is one God. There is no deity except Him, the Most Merciful, the Most Compassionate.'",
    "சூரா அல்-அழா (91:7) - 'நாங்கள் மனித உடலை நன்றாக அமைத்தோம், அதை மிக உயர்ந்த நிலைக்கு எடுத்தோம்.'",
    "Surah Al-Alaq (96:2) - 'Who created man from a clinging clot.'",
    "Surah Ar-Rahman (55:13) - 'So which of the favors of your Lord would you deny?'",
    "Surah Az-Zumar (39:9) - 'Is one who worships devoutly in the night prostrating and standing, fearing the Hereafter?'",
    "சூரா அல்-முஸ்தபானா (68:4) - 'நீங்கள் அழகில் மிக உயர்ந்தவராக இருக்கின்றீர்கள், நீங்கள் அவற்றின் மேல் சிந்திக்க வேண்டும்.'",
    "Surah Al-Mujadila (58:11) - 'Allah raises those who believe among you and those who were given knowledge.'",
    "Surah Al-Baqarah (2:286) - 'Allah does not burden a soul beyond that it can bear.'",
    "சூரா அல்-தூரா (52:1) - 'சூரா அல்-தூரா, உங்கள் ரஹ்மான் அருளின் அங்கங்களைப் பகிர்ந்திடுகிறது.'",
    "Surah Al-Araf (7:31) - 'O children of Adam, take your adornment at every masjid and eat and drink, but be not excessive.'",
    "சூரா அல்-இக்லாஸ் (112:2) - 'அல்லாஹ், ஒரே தனியானவர், ஓர் அங்கமாகும் என உறுதிப்படுத்துங்கள்.'",
    "Surah Al-Mulk (67:15) - 'He it is who made the earth subservient to you.'",
    "Surah Al-Baqarah (2:185) - 'The month of Ramadan [is that] in which was revealed the Qur'an, a guidance for the people.'",
    "Surah Az-Zumar (39:10) - 'Say, 'O My servants who have harmed yourselves by your own hands, do not despair of Allah’s mercy.''",
    "Surah Al-Hadid (57:25) - 'We sent aforetime our messengers with clear signs and sent down with them the Book and the Balance.'",
    "சூரா அல்-தாயா (20:79) - 'உங்களை மின்சாரம் அல்லது சில கடைசிப் பயணங்களைத் தாண்டியதால் உயிரிழப்பேல் என உங்கள் செயல்கள் உங்கள் மேல் விளைவுகளைக் கொடுக்கும்.'",
    "Surah An-Nahl (16:128) - 'Indeed, Allah is with those who fear Him and those who are doers of good.'",
    "Surah At-Tawbah (9:71) - 'The believing men and believing women are allies of one another.'",
    "Surah Al-Anfal (8:60) - 'And prepare against them whatever you are able of power and of steeds of war.'",
    "சூரா அல்-உத்பாவி (65:1) - 'உங்களுக்குப் பின்வருவோருக்காக அந்நியவர்களை நம்பிக்கை கொடுக்க வேண்டும்.'",
    "Surah Al-Imran (3:102) - 'O you who have believed, fear Allah as He should be feared and do not die except as Muslims.'",
    "Surah Al-Ahzab (33:40) - 'Muhammad is not the father of any of your men, but he is the Messenger of Allah.'",
    "Surah Al-Mumtahanah (60:8) - 'Allah does not forbid you from those who do not fight you because of religion.'",
    "Surah Al-Mulk (67:16) - 'Do you feel secure that He who is above will not cause the earth to swallow you?''",
    "Surah Al-Isra (17:9) - 'Indeed, this Qur’an guides to that which is most suitable.'",
    "Surah An-Nisa (4:1) - 'O mankind, fear your Lord, who created you from one soul and created from it its mate.'",
    "Surah At-Tahrim (66:6) - 'O you who have believed, protect yourselves and your families from a Fire whose fuel is people and stones.'",
    "Surah Al-Araf (7:57) - 'And He it is who sends the winds as heralds of good news before His mercy.'",
    "Surah At-Tawbah (9:36) - 'Indeed, the number of months with Allah is twelve months in the Book of Allah.'",
    "Surah Al-Mumtahanah (60:4) - 'Indeed, there is for you a good example in Ibrahim and those with him.'",
    "Surah An-Naba (78:11) - 'And We made the sky a canopy protected from all evil.'",
    "Surah Al-Kawthar (108:1) - 'Indeed, We have granted you, [O Muhammad], Al-Kawthar.'",
    "Surah Al-Ankabut (29:46) - 'And do not argue with the People of the Scripture except in a way that is best.'",
    "Surah Al-Mujadila (58:12) - 'O you who have believed, when you consult the Messenger.'" 
    // Add more verses up to 100-150
  ];

  const [randomVerse, setRandomVerse] = useState('');

  // Function to get a random verse
  const getRandomVerse = () => {
    const randomIndex = Math.floor(Math.random() * quranVerses.length);
    setRandomVerse(quranVerses[randomIndex]);
  };

  // Set a random verse when the component is mounted
  useEffect(() => {
    getRandomVerse();
  }, [getRandomVerse]); // If you really want to add this dependency

  return (
    <footer>
      <p>{randomVerse}</p>
    </footer>
  );
};

export default Footer;