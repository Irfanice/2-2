import React, { useState } from 'react';
import './About.css'; // Import styles
import Header from './Header'; // Import Header component
import Footer from './Footer'; // Import Footer component
import './fonts.css'; // Import the font CSS file

const About = () => {
  // State for language toggle
  const [isEnglish, setIsEnglish] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle language function
  const handleToggleLanguage = () => {
    setIsEnglish((prevLanguage) => !prevLanguage);
  };

  // Language-specific text content
  const content = {
    thanksMessage: isEnglish
    ? 'Thank you for taking the time to read about this. I hope this will be an insightful and peaceful read that leaves you with something meaningful, or at least gives you some idea about it!' 
    : 'இதுகுறித்து வாசிக்க நேரத்தை எடுத்துக்கொண்டதற்கு நன்றி. இது உங்களுக்கு பயனுள்ள மற்றும் அமைதியான வாசிப்பு அனுபவமாக இருக்கும், அல்லது குறைந்தபட்சம் இதுகுறித்து ஒரு சிந்தனையைத் தரும் என்று நம்புகிறேன்!',
      
      aboutQuran: {
        title: isEnglish ? 'About the Quran' : 'குர்ஆன் பற்றி',
        description: isEnglish
        ? [
          "The most common way to describe the Quran is as a book, but it is different from most books. It is made up of words that offer truth and guidance for all people, and Muslims believe these words were revealed directly by God, in Arabic, to the last of His prophets, Muhammad ﷺ (peace be upon him).",
          
          "The Quran is known by many names and descriptions, each of which is worth understanding. Here are a few:",
          
          "Quran and Kitab (Recital & Writ): The first means something to be recited out loud, and the second refers to something written down. These describe the two main ways the Quran is experienced, which you can explore on this website.",
          
          "Kalam Allah (Divine Speech): This means these words are a direct message from the Creator of all life. They hold the highest authority for those who believe, and their meaning is supported by the teachings of the Prophet ﷺ. While the Quran was revealed in Arabic, there are many translations to help people understand its message.",
          
          "Dhikr and Huda (Remembrance & Guidance): The Quran helps people connect with God and keeps Him in our hearts and minds. It is also a guide for our personal lives and for how we should live together in society.",
          
          "The Quran is the final revealed message that completes earlier scriptures, just as Prophet Muhammad ﷺ taught the same essential message as previous prophets like Adam, Noah, Moses, Abraham, and Jesus (peace be upon them all). The Quran clarifies what humanity needs to know from now until the Day of Judgment, and it will remain preserved from loss or distortion, unlike previous scriptures.",
          
          "\"This is a blessed Book which We have revealed to you, O Prophet, so that they may reflect on its verses, and those with understanding may be mindful.\" (38:29)",
          
          "We welcome you to Quran.com and invite you to read and listen to the Quran with an open heart. Take the time to reflect on its verses, seek the knowledge it offers, and learn more using the resources on our site. We hope you find Quran.com helpful and pray that the message of the Quran enriches your life's journey."
      ] 
      : [
          "குர்ஆன் பொதுவாக ஒரு புத்தகமாக விளக்கப்படும், ஆனால் அது பல புத்தகங்களைவிட வேறுபட்டதாகும். இது எல்லா மனிதர்களுக்கும் உண்மை மற்றும் வழிகாட்டுதல்களை வழங்கும் வார்த்தைகளால் அமைக்கப்பட்டுள்ளது, மற்றும் முஸ்லிம்கள் இந்த வார்த்தைகள் இறைவனால் நேரடியாக அரபு மொழியில் இறுதி தூதரான முகம்மது ﷺ (அவர்களுக்கு ஸல்) அவர்களுக்கு வெளிப்படுத்தப்பட்டது என்று நம்புகிறார்கள்.",
          
          "குர்ஆன் பல பெயர்களும் விவரணைகளும் கொண்டு இருக்கிறது, அவற்றில் ஒவ்வொன்றும் புரிந்துகொள்வதற்கு பொருத்தமானவை. இங்கே சில:",
          
          "குர்ஆன் மற்றும் கிதாப் (ஒப்புரவி & எழுதுகை): முதலாம் ஒன்று கூரியமாக ஊரக்குரல் செய்யப்பட வேண்டும் என்று அர்த்தம், இரண்டாம் ஒன்று எழுதப்பட்டதை குறிக்கிறது. இவை குர்ஆனின் அனுபவிக்கும் முக்கியமான இரண்டு வழிகளை விவரிக்கின்றன, நீங்கள் இந்த இணையதளத்தில் இவற்றை ஆராய முடியும்.",
          
          "காலாம் அல்லாஹ் (தெய்வீக பேச்சு): இதன் அர்த்தம் இந்த வார்த்தைகள் அனைத்து உயிரினங்களின் உருவாக்குநரின் நேரடி செய்தி என்பது. இது நம்பிக்கையுள்ளவர்களுக்கு மிக உயர்ந்த அதிகாரத்தை உடையது, மற்றும் அதன் பொருளை நபி ﷺ அவர்களின் போதனைகள் விளக்குகிறது. இந்த வெளிப்பாடு அரபு மொழியில் வழங்கப்பட்டது, ஆனால் அதற்கு பல மொழிகளில் மொழிபெயர்ப்புகள் உள்ளன, அவை அதன் செய்தியை புரிந்துகொள்ள உதவுகின்றன.",
          
          "திகர் மற்றும் ஹுதா (அறிவு & வழிகாட்டுதல்): குர்ஆன் இறைவனுடன் இணைக்க உதவுகிறது மற்றும் அவனை நமது இதயங்களிலும் நம் மனதிலும் வைத்திருக்கிறது. இது நமது தனிப்பட்ட வாழ்கையில் மற்றும் சமுதாயத்தில் எப்படி வாழ வேண்டும் என்பதற்கான வழிகாட்டியாகவும் உள்ளது.",
          
          "குர்ஆன் இறுதி வெளிப்படுத்தப்பட்ட செய்தி ஆகும், இது முன்னணி வேதங்களையும் முழுமையாக்குகிறது, மேலும் நபி முகம்மது ﷺ அவர்கள் முன்னர் வந்த ஆதி, நோவா, மூசா, இப்ராஹீம், யீசு (அவர்களுக்கு அமைதி இருக்கட்டும்) போன்ற நபிகள் அனைவரையும் சேர்த்து ஒரே அடிப்படைக் குரலையோடு போதித்தனர். குர்ஆன் மனிதர்களுக்கு தற்போது இருந்து கடைசித் Judgment வரை தெரிந்திருக்க வேண்டியவற்றை தெளிவுபடுத்துகிறது, மேலும் இது முந்தைய வேதங்கள் போன்றவற்றிலிருந்து எதைனும் இழப்புகள் மற்றும் கெட்டொழிப்புகளிலிருந்து பாதுகாக்கப்படவுள்ளது.",
          
          "\"இது ஒரு ஆசீர்வதிக்கப்பட்ட புத்தகம், இதை நாங்கள் உங்களுக்காக (ஓ நபி) வெளிப்படுத்தியுள்ளோம், எனவே அவர்கள் அதன் ஆயத்தங்களை சிந்திக்கின்றனர், மற்றும் நாகரிகம் உள்ளவர்கள் நினைவில் வைக்க வேண்டும்.\" (38:29)",
          
          "நாங்கள் உங்களை குர்ஆன்.காம் தளத்திற்கு வரவேற்கின்றோம் மற்றும் குர்ஆனை திறந்த மனதுடன் படிக்கவும் கேட்கவும் அழைக்கின்றோம். அதன் ஆயத்தங்களை சிந்திக்க நேரத்தை எடுத்துக்கொள்க, அதில் உள்ள அறிவை உணரவும், மேலும் நமது தளத்தில் உள்ள வளங்களைப் பயன்படுத்தி கற்றுக்கொள்ளவும். நீங்கள் குர்ஆன்.காம் பயன்பாட்டை அறிந்து வாழும் வாழ்கையை மேலும் வளமாக்க வாழ்த்துகிறோம்."
      ]      
      },
      
      aboutQuranVerse:{
        description: isEnglish 
        ? '"And with the truth We have sent it down, and with the truth it has descended. And We have not sent you, [O Muhammad], except as a bringer of good tidings and a warner." — Surah Al-Isra (17:105)' 
        : '"உண்மையுடன் நாம் அதை அருளியுள்ளோம்; உண்மையுடன் அது வெளிப்படுத்தப்பட்டுள்ளது. நல்லதையும் தீமையையும் அறிவிப்பவராக நாங்கள் உன்னை (முகம்மது) அனுப்பியுள்ளோம்." — ஸூரா இஸ்ரா (17:105)'
      },
      
      
      whyMade: {
        title: isEnglish ? 'Why I Build This Website?' : 'நான் இந்த வலைத்தளத்தை ஏன் உருவாக்கினேன்?',
        description: isEnglish
          ? [
              "I made this website for three main reasons. First, many people, including my friends, believe that the Quran is a book only for Muslims. Second, it's easier to access the Quran in MP3 format rather than text, which allows many of my Tamil friends to understand it more easily.",
              "Third, I would like my friends and anyone who visits this website to receive guidance from Allah before the Day of Judgment. I will be the happiest person if Allah guides them through this small, tiny effort of mine."
            ]
          : [
              "நான் இந்த வலைத்தளத்தை மூன்று முக்கிய காரணங்களுக்காக உருவாக்கினேன். முதலில், எனது நண்பர்களும் மற்றும் பலர், குர்ஆனை இஸ்லாமியர்களுக்கான நூலாக மட்டும் நினைக்கின்றனர். இரண்டாவது காரணமாக, MP3 வடிவில் குர்ஆனை பெறுவது - உரை வடிவத்திற்கு ஒப்பிடும் போது எளிதாக இருக்கும், இதனால் என் தமிழ் நண்பர்களுக்கு அதை எளிதாகப் புரிந்து கொள்ள முடியும்.",
              "மூன்றாவது, நான் என்னுடைய நண்பர்களுக்கும் மற்றும் இந்த வலைத்தளத்தை பார்வையிட்ட அனைவருக்கும் நேரான பாதை பெறுவதை அல்லாஹ்விடமிருந்து நாட விரும்புகிறேன். எனது இந்த சிறிய முயற்சியினால் அல்லாஹ் அவர்களுக்கு நேரான வழி காட்டினால் நான் மிகவும் மகிழ்ச்சியடைவேன்."
            ],
      },

      aboutMe: { 
        title: isEnglish ? 'Quran in Text format' : 'உரை வடிவில் குர்ஆன்',
        description: isEnglish
          ? 'Click the above image to get the pdf download'
          : 'PDF பதிவிறக்கத்தை செய்ய மேலுள்ள படத்தை கிளிக் செய்யவும்',
      },

    quote: isEnglish
      ? '"This is the Book! There is no doubt about it, a guidance for those conscious of Allah." - Quran 02 : 02'
      : '"இது, (அல்லாஹ்வின்) திருவேதமாகும்; இதில் எத்தகைய சந்தேகமும் இல்லை; பயபக்தியுடையோருக்கு (இது) நேர்வழிகாட்டியாகும்." - குர்ஆன் 02 : 02 ',
  };

  return (
    <div className="about-container">
      {/* Header */}
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Main content */}
      <main className="about-main">
        {/* Toggle Language */}
        <div className="language-toggle">
          <label className="switch">
            <input
              type="checkbox"
              onChange={handleToggleLanguage}
              checked={!isEnglish}
            />
            <span className="slider"></span>
          </label>
          <span className="toggle-text">
            {isEnglish ? 'தமிழ்' : 'English'}
          </span>
        </div>

        <div className="about-content">
          {/* Thanks text */}
          <section className="thanks-section">
            <p className="thanks-message">{content.thanksMessage}</p>
          </section>

          {/* About the Quran */}
          <section className="about-quran">
            <h2>{content.aboutQuran.title}</h2>
            <p>{content.aboutQuran.description}</p>
          </section>

          <section className="aboutQuranVerse">
            <p>{content.aboutQuranVerse.description}</p>
          </section>

          {/* Why I made this */}
          <section className="why-made">
            <h2>{content.whyMade.title}</h2>
            <div className="background-image">
              <p>{content.whyMade.description}</p>
            </div>
          </section>

{/* About Me Section */}
<section className="about-me">
  <h2>{content.aboutMe.title}</h2>
  
{/* Use the correct image path and make it a clickable link to download the PDF from Google Drive */}
<div className="about-me-image">
  <a
    href="https://drive.google.com/uc?export=download&id=19EtqJLXkOa4vmhyMhm7BpglYY1vwes09"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src={`${process.env.PUBLIC_URL}/about-me.jpg`} // Correct image path
      alt="About Me"
      className="clickable-image"
    />
  </a>
</div>

  
  <p>{content.aboutMe.description}</p>
</section>


          {/* Quote */}
          <section className="quote-section-aboutPage">
            <p>{content.quote}</p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;