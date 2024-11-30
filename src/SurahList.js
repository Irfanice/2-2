import React, { useState, useEffect, useRef } from "react";
import "./styles.css"; // Make sure this is correctly imported
import Header from "./Header"; // Import the Header component
import Footer from "./Footer"; // Import the Footer component
import { Link } from "react-router-dom";

const SurahList = () => {
  const surahs = [
    {
      id: 1,
      number: 1,
      nameTamil: "அல்ஃபாதிஹா",
      nameEnglish: "Al-Fatiha (The Opening)",
      audio: "./audio/001.al-fatihahtheOpening.mp3",
    },
    {
      id: 2,
      number: 2,
      nameTamil: "அல்பகரா",
      nameEnglish: "Al-Baqara (The Cow)",
      audio: "./audio/002.al-baqarahtheCow.mp3",
    },
    {
      id: 3,
      number: 3,
      nameTamil: "ஆலிஇம்ரான்",
      nameEnglish: "Al-Imran (The Family of Imran)",
      audio: "./audio/003.al-imrantheFamilyOfImran.mp3",
    },
    {
      id: 4,
      number: 4,
      nameTamil: "அன்னிஸா",
      nameEnglish: "An-Nisa (The Women)",
      audio: "./audio/004.an-nisatheWomen.mp3",
    },
    {
      id: 5,
      number: 5,
      nameTamil: "அல்மாயிதா",
      nameEnglish: "Al-Maida (The Food)",
      audio: "./audio/005.al-maidahtheFood.mp3",
    },
    {
      id: 6,
      number: 6,
      nameTamil: "அல்அன்அம்",
      nameEnglish: "Al-Anam (The Cattle)",
      audio: "./audio/006.al-anamtheCattle.mp3",
    },
    {
      id: 7,
      number: 7,
      nameTamil: "அல்அராஃப்",
      nameEnglish: "Al-Araf (The Elevated Places)",
      audio: "./audio/007.al-araftheElevatedPlaces.mp3",
    },
    {
      id: 8,
      number: 8,
      nameTamil: "அல்அன்பால்",
      nameEnglish: "Al-Anfal (Voluntary Gifts)",
      audio: "./audio/008.al-anfalvoluntaryGifts.mp3",
    },
    {
      id: 9,
      number: 9,
      nameTamil: "அத்தவ்பா",
      nameEnglish: "At-Tawba (The Immunity)",
      audio: "./audio/009.al-baraat-At-taubahtheImmunity.mp3",
    },
    {
      id: 10,
      number: 10,
      nameTamil: "யூனுஸ்",
      nameEnglish: "Yunus (Jonah)",
      audio: "./audio/010.yunusjonah.mp3",
    },
    {
      id: 11,
      number: 11,
      nameTamil: "ஹூத்",
      nameEnglish: "Hudh (Hud)",
      audio: "./audio/011.hudhud.mp3",
    },
    {
      id: 12,
      number: 12,
      nameTamil: "யூசுப்",
      nameEnglish: "Yusuf (Joseph)",
      audio: "./audio/012.yusufjoseph.mp3",
    },
    {
      id: 13,
      number: 13,
      nameTamil: "அர்ரஃத்",
      nameEnglish: "Ar-Rad (The Thunder)",
      audio: "./audio/013.ar-radtheThunder.mp3",
    },
    {
      id: 14,
      number: 14,
      nameTamil: "இப்ராஹிம்",
      nameEnglish: "Ibrahim (Abraham)",
      audio: "./audio/014.ibrahimabraham.mp3",
    },
    {
      id: 15,
      number: 15,
      nameTamil: "அல்ஹிஜ்ர்",
      nameEnglish: "Al-Hijr (The Rock)",
      audio: "./audio/015.al-hijrtheRock.mp3",
    },
    {
      id: 16,
      number: 16,
      nameTamil: "அந்நஹ்ல்",
      nameEnglish: "An-Nahl (The Bee)",
      audio: "./audio/016.an-nahltheBee.mp3",
    },
    {
      id: 17,
      number: 17,
      nameTamil: "அல்இஸ்ரா",
      nameEnglish: "Al-Isra (The Israelites)",
      audio: "./audio/017.baniIsrailtheIsraelites.mp3",
    },
    {
      id: 18,
      number: 18,
      nameTamil: "அல்காஹப்",
      nameEnglish: "Al-Kahf (The Cave)",
      audio: "./audio/018.al-kahftheCave.mp3",
    },
    {
      id: 19,
      number: 19,
      nameTamil: "மரியம்",
      nameEnglish: "Maryam (Mary)",
      audio: "./audio/019.maryammary.mp3",
    },
    {
      id: 20,
      number: 20,
      nameTamil: "தாஹா",
      nameEnglish: "Ta-Ha",
      audio: "./audio/020.taHataHa.mp3",
    },
    {
      id: 21,
      number: 21,
      nameTamil: "அல்அன்பியா",
      nameEnglish: "Al-Anbiya (The Prophets)",
      audio: "./audio/021.al-anbiyatheProphets.mp3",
    },
    {
      id: 22,
      number: 22,
      nameTamil: "அல்ஹஜ்ஜு",
      nameEnglish: "Al-Hajj (The Pilgrimage)",
      audio: "./audio/022.al-hajjthePilgrimage.mp3",
    },
    {
      id: 23,
      number: 23,
      nameTamil: "அல்முஃமினூன்",
      nameEnglish: "Al-Mu'minun (The Believers)",
      audio: "./audio/023.al-muminuntheBelievers.mp3",
    },
    {
      id: 24,
      number: 24,
      nameTamil: "அந்நூர்",
      nameEnglish: "An-Nur (The Light)",
      audio: "./audio/024.an-nurtheLight.mp3",
    },
    {
      id: 25,
      number: 25,
      nameTamil: "அல்புர்கான்",
      nameEnglish: "Al-Furqan (The Discrimination)",
      audio: "./audio/025.al-furqantheDiscrimination.mp3",
    },
    {
      id: 26,
      number: 26,
      nameTamil: "அஷ்ஷுஅரா",
      nameEnglish: "Ash-Shu'ara (The Poets)",
      audio: "./audio/026.ash-shuarathePoets.mp3",
    },
    {
      id: 27,
      number: 27,
      nameTamil: "அந்நம்ல்",
      nameEnglish: "An-Naml (The Ant)",
      audio: "./audio/027.an-namltheNaml.mp3",
    },
    {
      id: 28,
      number: 28,
      nameTamil: "அல்கசஸ்",
      nameEnglish: "Al-Qasas (The Narrative)",
      audio: "./audio/028.al-qasastheNarrative.mp3",
    },
    {
      id: 29,
      number: 29,
      nameTamil: "அல்அன்கபூத்",
      nameEnglish: "Al-Ankabut (The Spider)",
      audio: "./audio/029.al-ankabuttheSpider.mp3",
    },
    {
      id: 30,
      number: 30,
      nameTamil: "அர்ரூம்",
      nameEnglish: "Ar-Rum (The Romans)",
      audio: "./audio/030.ar-rumtheRomans.mp3",
    },

    {
      id: 31,
      number: 31,
      nameTamil: "லுக்மான்",
      nameEnglish: "Luqman (Luqman)",
      audio: "./audio/031.luqmanluqman.mp3",
    },
    {
      id: 32,
      number: 32,
      nameTamil: "அஸ்ஸஜ்தா",
      nameEnglish: "As-Sajda (The Adoration)",
      audio: "./audio/032.as-sajdahtheAdoration.mp3",
    },
    {
      id: 33,
      number: 33,
      nameTamil: "அல்அஹ்ஜாப்",
      nameEnglish: "Al-Ahzab (The Allies)",
      audio: "./audio/033.al-ahzabtheAllies.mp3",
    },
    {
      id: 34,
      number: 34,
      nameTamil: "சபா",
      nameEnglish: "Saba (The Saba)",
      audio: "./audio/034.al-sabatheSaba.mp3",
    },
    {
      id: 35,
      number: 35,
      nameTamil: "அல்ஃபாதிர்",
      nameEnglish: "Al-Fatir (The Originator)",
      audio: "./audio/035.al-fatirtheOriginator.mp3",
    },
    {
      id: 36,
      number: 36,
      nameTamil: "யாஸீன்",
      nameEnglish: "Ya-Sin (Ya-Sin)",
      audio: "./audio/036.yaSinyaSin.mp3",
    },
    {
      id: 37,
      number: 37,
      nameTamil: "அஸ்ஸாஃப்ஃபாத்",
      nameEnglish: "As-Saffat (Those Ranging in Ranks)",
      audio: "./audio/037.as-saffatthoseRangingInRanks.mp3",
    },
    {
      id: 38,
      number: 38,
      nameTamil: "சாட்",
      nameEnglish: "Sad (Sad)",
      audio: "./audio/038.sadsad.mp3",
    },
    {
      id: 39,
      number: 39,
      nameTamil: "அஸ்ஸுமர்",
      nameEnglish: "Az-Zumar (The Companies)",
      audio: "./audio/039.az-zumartheCompanies.mp3",
    },
    {
      id: 40,
      number: 40,
      nameTamil: "காஃபிரூன்",
      nameEnglish: "Al-Muminun (The Believer)",
      audio: "./audio/040.al-mumintheBeliever.mp3",
    },
    {
      id: 41,
      number: 41,
      nameTamil: "ஹாஃமீம்",
      nameEnglish: "Ha-Mim (Ha-Mim)",
      audio: "./audio/041.haMimhaMim.mp3",
    },
    {
      id: 42,
      number: 42,
      nameTamil: "அஷ்ஷூரா",
      nameEnglish: "Ash-Shura (The Counsel)",
      audio: "./audio/042.ash-shuracounsel.mp3",
    },
    {
      id: 43,
      number: 43,
      nameTamil: "அல்ஜுக்ருஃப்",
      nameEnglish: "Az-Zukhruf (The Gold)",
      audio: "./audio/043.az-zukhrufgold.mp3",
    },
    {
      id: 44,
      number: 44,
      nameTamil: "அத்துகான்",
      nameEnglish: "Ad-Dukhan (The Smoke)",
      audio: "./audio/044.ad-dukhantheDrought.mp3",
    },
    {
      id: 45,
      number: 45,
      nameTamil: "அல்ஜாஷியா",
      nameEnglish: "Al-Jathiya (The Kneeling)",
      audio: "./audio/045.al-jathiyahtheKneeling.mp3",
    },
    {
      id: 46,
      number: 46,
      nameTamil: "அல்அகாப்",
      nameEnglish: "Al-Ahqaf (The Sandhills)",
      audio: "./audio/046.al-ahqaftheSandhills.mp3",
    },
    {
      id: 47,
      number: 47,
      nameTamil: "முஹம்மது",
      nameEnglish: "Muhammad (Muhammad)",
      audio: "./audio/047.muhammadmuhammad.mp3",
    },
    {
      id: 48,
      number: 48,
      nameTamil: "அல்ஃபத்ஹ்",
      nameEnglish: "Al-Fath (The Victory)",
      audio: "./audio/048.al-faththeVictory.mp3",
    },
    {
      id: 49,
      number: 49,
      nameTamil: "அல்ஹுஜுராத்",
      nameEnglish: "Al-Hujurat (The Rooms)",
      audio: "./audio/049.al-hujurattheApartments.mp3",
    },
    {
      id: 50,
      number: 50,
      nameTamil: "காஃப்",
      nameEnglish: "Qaf (Qaf)",
      audio: "./audio/050.qafqaf.mp3",
    },

    {
      id: 51,
      number: 51,
      nameTamil: "அத்தூராத்",
      nameEnglish: "Ad-Dhariyat (The Scatterers)",
      audio: "./audio/051.ad-dhariyattheScatterers.mp3",
    },
    {
      id: 52,
      number: 52,
      nameTamil: "அத்துர்",
      nameEnglish: "At-Tur (The Mountain)",
      audio: "./audio/052.at-turtheMountain.mp3",
    },
    {
      id: 53,
      number: 53,
      nameTamil: "அன்னஜ்ம்",
      nameEnglish: "An-Najm (The Star)",
      audio: "./audio/053.an-najmtheStar.mp3",
    },
    {
      id: 54,
      number: 54,
      nameTamil: "அல்கமர்",
      nameEnglish: "Al-Qamar (The Moon)",
      audio: "./audio/054.al-qamartheMoon.mp3",
    },
    {
      id: 55,
      number: 55,
      nameTamil: "அர்ரஹ்மான்",
      nameEnglish: "Ar-Rahman (The Beneficent)",
      audio: "./audio/055.ar-rahmantheBeneficent.mp3",
    },
    {
      id: 56,
      number: 56,
      nameTamil: "அல்வாகிஹா",
      nameEnglish: "Al-Waqi'ah (The Event)",
      audio: "./audio/056.al-waqiahtheEvent.mp3",
    },
    {
      id: 57,
      number: 57,
      nameTamil: "அல்ஹதீத்",
      nameEnglish: "Al-Hadid (The Iron)",
      audio: "./audio/057.al-hadidiron.mp3",
    },
    {
      id: 58,
      number: 58,
      nameTamil: "அல்முஜாதிலா",
      nameEnglish: "Al-Mujadilah (The Pleading Woman)",
      audio: "./audio/058.al-mujadilahthePleadingWoman.mp3",
    },
    {
      id: 59,
      number: 59,
      nameTamil: "அல்ஹஷ்ர்",
      nameEnglish: "Al-Hashr (The Banishment)",
      audio: "./audio/059.al-hashrtheBanishment.mp3",
    },
    {
      id: 60,
      number: 60,
      nameTamil: "அல்மும்தஹினா",
      nameEnglish: "Al-Mumtahanah (The Woman Who Is Examined)",
      audio: "./audio/060.al-mumtahanahtheWomanWhoIsExamined.mp3",
    },
    {
      id: 61,
      number: 61,
      nameTamil: "அஸ்ஸஃப்ஃப்",
      nameEnglish: "As-Saff (The Ranks)",
      audio: "./audio/061.as-safftheRanks.mp3",
    },
    {
      id: 62,
      number: 62,
      nameTamil: "அல்ஜுமுஅ",
      nameEnglish: "Al-Jumu'ah (The Congregation)",
      audio: "./audio/062.al-jumuahtheCongregation.mp3",
    },
    {
      id: 63,
      number: 63,
      nameTamil: "அல்முனாஃபிகூன்",
      nameEnglish: "Al-Munafiqun (The Hypocrites)",
      audio: "./audio/063.al-munafiquntheHypocrites.mp3",
    },
    {
      id: 64,
      number: 64,
      nameTamil: "அத்தகாபுன்",
      nameEnglish: "At-Taghabun (The Manifestation of Losses)",
      audio: "./audio/064.at-taghabuntheManifestationOfLosses.mp3",
    },
    {
      id: 65,
      number: 65,
      nameTamil: "அத்தலாக்",
      nameEnglish: "At-Talaq (Divorce)",
      audio: "./audio/065.at-talaqdivorce.mp3",
    },
    {
      id: 66,
      number: 66,
      nameTamil: "அத்தஹ்ரீம்",
      nameEnglish: "At-Tahrim (The Prohibition)",
      audio: "./audio/066.at-tahrimtheProhibition.mp3",
    },
    {
      id: 67,
      number: 67,
      nameTamil: "அல்முல்க்",
      nameEnglish: "Al-Mulk (The Kingdom)",
      audio: "./audio/067.al-mulktheKingdom.mp3",
    },
    {
      id: 68,
      number: 68,
      nameTamil: "அல்கலம்",
      nameEnglish: "Al-Qalam (The Pen)",
      audio: "./audio/068.al-qalamthePen.mp3",
    },
    {
      id: 69,
      number: 69,
      nameTamil: "அல்ஹாக்கா",
      nameEnglish: "Al-Haqqah (The Sure Truth)",
      audio: "./audio/069.al-haqqahtheSureTruth.mp3",
    },
    {
      id: 70,
      number: 70,
      nameTamil: "அல்மஆரிஜ்",
      nameEnglish: "Al-Maarij (The Ways of Ascent)",
      audio: "./audio/070.al-maarijtheWaysOfAscent.mp3",
    },
    {
      id: 71,
      number: 71,
      nameTamil: "நூஹ்",
      nameEnglish: "Noah",
      audio: "./audio/071.nuhnoah.mp3",
    },
    {
      id: 72,
      number: 72,
      nameTamil: "அல்ஜின்ன்",
      nameEnglish: "Al-Jinn (The Jinn)",
      audio: "./audio/072.al-jinntheJinn.mp3",
    },
    {
      id: 73,
      number: 73,
      nameTamil: "அல்முஸ்ஸம்மில்",
      nameEnglish: "Al-Muzzammil (The One Covering Himself)",
      audio: "./audio/073.al-muzzammiltheOneCoveringHimself.mp3",
    },
    {
      id: 74,
      number: 74,
      nameTamil: "அல்முத்தஸ்ஸிர்",
      nameEnglish: "Al-Muddathir (The One Wrapping Himself Up)",
      audio: "./audio/074.al-muddaththirtheOneWrappingHimselfUp.mp3",
    },
    {
      id: 75,
      number: 75,
      nameTamil: "அல்கியாமா",
      nameEnglish: "Al-Qiyamah (The Resurrection)",
      audio: "./audio/075.al-qiyamahtheResurrection.mp3",
    },
    {
      id: 76,
      number: 76,
      nameTamil: "அல்இன்ஸான்",
      nameEnglish: "Al-Insan (The Man)",
      audio: "./audio/076.al-insantheMan.mp3",
    },
    {
      id: 77,
      number: 77,
      nameTamil: "அல்மர்சலாத்",
      nameEnglish: "Al-Mursalat (Those Sent Forth)",
      audio: "./audio/077.al-mursalatthoseSentForth.mp3",
    },
    {
      id: 78,
      number: 78,
      nameTamil: "அன்னபா",
      nameEnglish: "An-Naba (The Announcement)",
      audio: "./audio/078.an-nabatheAnnouncement.mp3",
    },
    {
      id: 79,
      number: 79,
      nameTamil: "அன்னாசிஆத்",
      nameEnglish: "An-Nazi'at (Those Who Yearn)",
      audio: "./audio/079.an-naziatthoseWhoYearn.mp3",
    },
    {
      id: 80,
      number: 80,
      nameTamil: "அபஸ",
      nameEnglish: "Abasa (He Frowned)",
      audio: "./audio/080.abasaheFrowned.mp3",
    },
    {
      id: 81,
      number: 81,
      nameTamil: "அத்தக்வீர்",
      nameEnglish: "At-Takwir (The Folding Up)",
      audio: "./audio/081.at-takwirtheFoldingUp.mp3",
    },
    {
      id: 82,
      number: 82,
      nameTamil: "அல்இன்பிதார்",
      nameEnglish: "Al-Infitar (The Cleaving)",
      audio: "./audio/082.al-infitartheCleaving.mp3",
    },
    {
      id: 83,
      number: 83,
      nameTamil: "அல்முதப்பிஃபீன்",
      nameEnglish: "At-Tatfif (Default in Duty)",
      audio: "./audio/083.at-tatfifdefaultInDuty.mp3",
    },
    {
      id: 84,
      number: 84,
      nameTamil: "அல்இன்ஷிகாக்",
      nameEnglish: "Al-Inshiqaq (The Bursting Asunder)",
      audio: "./audio/084.al-inshiqaqtheBurstingAsunder.mp3",
    },
    {
      id: 85,
      number: 85,
      nameTamil: "அல்புரூஜ்",
      nameEnglish: "Al-Buruj (The Stars)",
      audio: "./audio/085.al-burujtheStars.mp3",
    },
    {
      id: 86,
      number: 86,
      nameTamil: "அத்தாரிக்",
      nameEnglish: "At-Tariq (The Comer By Night)",
      audio: "./audio/086.at-tariqtheComerByNight.mp3",
    },
    {
      id: 87,
      number: 87,
      nameTamil: "அல்ஆலா",
      nameEnglish: "Al-A'la (The Most High)",
      audio: "./audio/087.al-alatheMostHigh.mp3",
    },
    {
      id: 88,
      number: 88,
      nameTamil: "அல்ஹாஷியா",
      nameEnglish: "Al-Ghashiyah (The Overwhelming Event)",
      audio: "./audio/088.al-ghashiyahtheOverwhelmingEvent.mp3",
    },
    {
      id: 89,
      number: 89,
      nameTamil: "அல்ஃபஜ்ர்",
      nameEnglish: "Al-Fajr (The Daybreak)",
      audio: "./audio/089.al-fajrtheDaybreak.mp3",
    },
    {
      id: 90,
      number: 90,
      nameTamil: "அல்பலத்",
      nameEnglish: "Al-Balad (The City)",
      audio: "./audio/090.al-baladtheCity.mp3",
    },

    {
      id: 91,
      number: 91,
      nameTamil: "அஷ்ஷம்ஸ்",
      nameEnglish: "Ash-Shams (The Sun)",
      audio: "./audio/091.ash-shamstheSun.mp3",
    },
    {
      id: 92,
      number: 92,
      nameTamil: "அல்லைல்",
      nameEnglish: "Al-Lail (The Night)",
      audio: "./audio/092.al-lailtheNight.mp3",
    },
    {
      id: 93,
      number: 93,
      nameTamil: "அத்ஹுஹா",
      nameEnglish: "Ad-Duha (The Brightness of the Day)",
      audio: "./audio/093.ad-duhatheBrightnessOfTheDay.mp3",
    },
    {
      id: 94,
      number: 94,
      nameTamil: "அல்இன்ஷிராஹ்",
      nameEnglish: "Al-Inshirah (The Expansion)",
      audio: "./audio/094.al-inshirahtheExpansion.mp3",
    },
    {
      id: 95,
      number: 95,
      nameTamil: "அத்தீன்",
      nameEnglish: "At-Tin (The Fig)",
      audio: "./audio/095.at-tintheFig.mp3",
    },
    {
      id: 96,
      number: 96,
      nameTamil: "அல்அலக்",
      nameEnglish: "Al-Alaq (The Clot)",
      audio: "./audio/096.al-alaqtheClot.mp3",
    },
    {
      id: 97,
      number: 97,
      nameTamil: "அல்கத்ர்",
      nameEnglish: "Al-Qadr (The Majesty)",
      audio: "./audio/097.al-qadrtheMajesty.mp3",
    },
    {
      id: 98,
      number: 98,
      nameTamil: "அல்பய்யினா",
      nameEnglish: "Al-Bayyina (The Clear Evidence)",
      audio: "./audio/098.al-bayyinahtheClearEvidence.mp3",
    },
    {
      id: 99,
      number: 99,
      nameTamil: "அல்ஸில்ஸிலா",
      nameEnglish: "Al-Zilzal (The Shaking)",
      audio: "./audio/099.al-zilzaltheShaking.mp3",
    },
    {
      id: 100,
      number: 100,
      nameTamil: "அல்ஆதியாத்",
      nameEnglish: "Al-Adiyat (The Assaulters)",
      audio: "./audio/100.al-adiyattheAssaulters.mp3",
    },
    {
      id: 101,
      number: 101,
      nameTamil: "அல்காரிஆ",
      nameEnglish: "Al-Qari'ah (The Calamity)",
      audio: "./audio/101.al-qariahtheCalamity.mp3",
    },
    {
      id: 102,
      number: 102,
      nameTamil: "அத்தகாஸுர்",
      nameEnglish: "At-Takathur (The Abundance of Wealth)",
      audio: "./audio/102.at-takathurtheAbundanceOfWealth.mp3",
    },
    {
      id: 103,
      number: 103,
      nameTamil: "அல்அஸ்ர்",
      nameEnglish: "Al-Asr (The Time)",
      audio: "./audio/103.al-asrtheTime.mp3",
    },
    {
      id: 104,
      number: 104,
      nameTamil: "அல்ஹுமசா",
      nameEnglish: "Al-Humazah (The Slanderer)",
      audio: "./audio/104.al-humazahtheSlanderer.mp3",
    },
    {
      id: 105,
      number: 105,
      nameTamil: "அல்ஃபீல்",
      nameEnglish: "Al-Fil (The Elephant)",
      audio: "./audio/105.al-filtheElephant.mp3",
    },
    {
      id: 106,
      number: 106,
      nameTamil: "குரைஷ்",
      nameEnglish: "Al-Quraish (The Quraish)",
      audio: "./audio/106.al-quraishtheQuraish.mp3",
    },
    {
      id: 107,
      number: 107,
      nameTamil: "அல்மாஊன்",
      nameEnglish: "Al-Ma'un (Acts of Kindness)",
      audio: "./audio/107.al-maunactsOfKindness.mp3",
    },
    {
      id: 108,
      number: 108,
      nameTamil: "அல்கவ்சர்",
      nameEnglish: "Al-Kawthar (The Abundance of Good)",
      audio: "./audio/108.al-kauthartheAbundanceOfGood.mp3",
    },
    {
      id: 109,
      number: 109,
      nameTamil: "அல்காஃபிரூன்",
      nameEnglish: "Al-Kafirun (The Disbelievers)",
      audio: "./audio/109.al-kafiruntheDisbelievers.mp3",
    },
    {
      id: 110,
      number: 110,
      nameTamil: "அன்நஸ்ர்",
      nameEnglish: "An-Nasr (The Help)",
      audio: "./audio/110.an-nasrtheHelp.mp3",
    },
    {
      id: 111,
      number: 111,
      nameTamil: "அல்மசத்",
      nameEnglish: "Al-Lahab (The Flame)",
      audio: "./audio/111.al-lahabtheFlame.mp3",
    },
    {
      id: 112,
      number: 112,
      nameTamil: "அல்இக்லாஸ்",
      nameEnglish: "Al-Ikhlas (The Unity)",
      audio: "./audio/112.al-ikhlastheUnity.mp3",
    },
    {
      id: 113,
      number: 113,
      nameTamil: "அல்ஃபலக்",
      nameEnglish: "Al-Falaq (The Dawn)",
      audio: "./audio/113.al-falaqtheDawn.mp3",
    },
    {
      id: 114,
      number: 114,
      nameTamil: "அன்னாஸ்",
      nameEnglish: "An-Nas (The Men)",
      audio: "./audio/114.an-nastheMen.mp3",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [audioLoadingState, setAudioLoadingState] = useState({});
  const [isTamil, setIsTamil] = useState(true); // Language toggle state
  const audioRefs = useRef([]);
  const [currentPlayingIndex, setCurrentPlayingIndex] = useState(null);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const toggleLanguage = () => {
    setIsTamil(!isTamil);
  };

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

  const handleAudioPlay = (index) => {
    if (currentPlayingIndex !== null && currentPlayingIndex !== index) {
      const currentAudio = audioRefs.current[currentPlayingIndex];
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
    }
    setCurrentPlayingIndex(index);
  };

  const handleAudioEnd = () => {
    if (currentPlayingIndex !== null) {
      const nextIndex = (currentPlayingIndex + 1) % surahs.length;
      setCurrentPlayingIndex(nextIndex);
      const nextAudio = audioRefs.current[nextIndex];
      if (nextAudio) {
        nextAudio.play();
      }
    }
  };

  // Filtered Surahs
  const filteredSurahs = (surahs || []).filter((surah) => {
    const query = searchQuery.toLowerCase();
    const name = isTamil ? surah.nameTamil : surah.nameEnglish;

    // Safeguard for undefined name
    if (!name) return false;

    return (
      name.toLowerCase().includes(query) ||
      surah.number.toString().includes(query)
    );
  });

  return (
    <div>
      <header>
        <div className="header-container">
          <div className="left">
            <h5>குர்ஆன்</h5>
            <h5>தமிழில்</h5>
          </div>
          <div className="center">
            <input
              type="text"
              className="search-input"
              placeholder={`Search Surahs in ${
                isTamil ? "Tamil" : "English"
              }...`}
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
          <div className="right">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="menu-button"
            >
              Menu
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className={`surahlist ${isMenuOpen ? "show" : ""}`}>
            <ul>
              <li>
                <a href="/2-2">Home</a>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        )}
      </header>

      <main>
        {/* Language Toggle Switch */}
        <div className="toggle-container">
          <button onClick={toggleLanguage} className="toggle-button">
            {isTamil ? "Switch to English" : "தமிழுக்கு மாற்று"}
          </button>
        </div>

        <ul>
          {filteredSurahs.map((surah, index) => (
            <li key={surah.number} className="surah-item">
              <h3>
                {isTamil ? surah.nameTamil : surah.nameEnglish} ({surah.number})
              </h3>
              <audio
                ref={(el) => (audioRefs.current[index] = el)}
                controls
                onCanPlay={() => handleAudioLoad(surah.number)}
                onError={() => handleAudioError(surah.number)}
                onPlay={() => handleAudioPlay(index)}
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
