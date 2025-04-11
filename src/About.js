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
          "The Quran is the final word of God, revealed to the last Prophet, Muhammad (peace be upon him). It is a book of guidance for all human beings, filled with wisdom, mercy, and truth. The Quran teaches us how to live with kindness, honesty, and faith. It includes stories of past nations, rules for daily life, and deep spiritual lessons for every human being. Muslims believe it is the unchanged message from Allah, and they read it to stay close to Him and find peace in their hearts."
      ] 
      : [          
          "குர்ஆன் என்பது கடவுளின் இறுதி வார்த்தையாகும், இது இறுதி நபி முஹம்மது (ஸல்) அவர்களுக்கு வெளிப்படுத்தப்பட்டது. இது அனைத்து மனிதர்களுக்கும் வழிகாட்டும் புத்தகம், ஞானம், கருணை மற்றும் உண்மையால் நிரப்பப்பட்டுள்ளது. குர்ஆன் கருணை, நேர்மை மற்றும் நம்பிக்கையுடன் எவ்வாறு வாழ்வது என்பதை நமக்குக் கற்பிக்கிறது. இதில் கடந்த கால நாடுகளின் கதைகள், அன்றாட வாழ்க்கைக்கான விதிகள் மற்றும் ஒவ்வொரு மனிதனுக்கும் ஆழமான ஆன்மீகப் பாடங்கள் உள்ளன. முஸ்லிம்கள் இது அல்லாஹ்வின் மாறாத செய்தி என்று நம்புகிறார்கள், மேலும் அவர்கள் அதை அவரிடம் நெருக்கமாக இருக்கவும் தங்கள் இதயங்களில் அமைதியைக் காணவும் படிக்கிறார்கள்."
      ]      
      },
      
      aboutQuranVerse:{
        description: isEnglish 
        ? '"And We sent down the Quran in truth, and in truth it has come down. And We have not sent you, O Muhammad, except to give good news and to warn." — Surah Al-Isra (17:105)' 
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
    <button className="quran-button">
      📘 Tamil Quran
    </button>
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