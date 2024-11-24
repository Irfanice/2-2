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
              "The Quran is the last revealed word of God for all of humanity. It provides them with laws, commandments, guidelines for their social and moral behavior, and a comprehensive religious philosophy. The Quran is in the Arabic language. It is a compilation of the verbal revelations given to the Holy Prophet Muhammad (peace be upon him) over a period of twenty-three years.",
            ]
          : [
              "குர்ஆன் மனிதகுலத்திற்கு இறைவனால் வெளிப்படுத்தப்பட்ட இறுதி வார்த்தையாகும். இது அவர்களுக்காக சட்டங்களை, கட்டளைகளை, சமூக மற்றும் நெறிமுறைகளுக்கான வழிகாட்டுதல்களையும், முழுமையான மத தத்துவத்தையும் வழங்குகிறது. குர்ஆன் அரபு மொழியில் உள்ளது. இது இறுதி தூதர் முகம்மது (ஸல்) அவர்களுக்கு இருபத்து மூன்று ஆண்டுகளாக வழங்கப்பட்ட வாய்வழி வெளிப்பாடுகளின் தொகுப்பாகும்.",
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
        title: isEnglish ? 'About Me' : 'என்னைப் பற்றி',
        description: isEnglish
          ? 'I am Mohammed Irfan, and my profession is Software Testing. Then, how did I build this website? Yes, you guessed right! — with help from ChatGPT'
          : 'நான் முகம்மத் இர்ஃபான், நான் ஒரு மென்பொருள் சோதனையாளர். பிறகு,  இந்த வலைத்தளத்தை நான் எப்படித் உருவாக்கினேன்? நீங்கள் யோசித்தது சரி தான்! - (ChatGPT) உதவியுடன்',
      },

    quote: isEnglish
      ? '"This is the Book! There is no doubt about it1—a guide for those mindful ˹of Allah˺" - Quran 02 : 02'
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

{/* About Me */}
<section className="about-me">
  <h2>{content.aboutMe.title}</h2>
  <div className="about-me-image">
    {/* Use the correct image path */}
    <img
      src={`${process.env.PUBLIC_URL}/about-me.jpg`} // Correct image path here
      alt="About Me"
    />
  </div>
  <p>{content.aboutMe.description}</p>
</section>

          {/* Quote */}
          <section className="quote-section">
            <blockquote>{content.quote}</blockquote>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
