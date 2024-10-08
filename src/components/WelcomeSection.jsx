import pImg from '../assets/images/IMG_20190508_121546_807.jpg';

const WelcomeSection = () => {
  return (
    <section id="welcome-section" className="welcome-section">
        <div className="spacer"></div>
        <h1>Hello, my name is Mohit</h1>
        <p>I am a Front End Developer living in C.G., INDIA.</p>
        <div className="img">
        <img src={pImg} alt="Mohit picture" />
        </div>
  </section>
  )
}

export default WelcomeSection;