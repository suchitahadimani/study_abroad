import './Styles.css';
import boothImage from '../assets/booth.png'; // Adjust path if needed

const About = () => (
  <section id="about" className="about">
    <div className="about-text">
      <h1>ABOUT</h1>
      <p>
        This theme bridges the historical contributions of Turing, Babbage, and Lovelace with modern CS challenges, integrating ethical considerations, software development, and intercultural engagement. You will be able to explore computational history while solving contemporary problems through creative software or hardware solutions.
      </p>
    </div>
    <div className="about-image">
      <img src={boothImage} alt="Booth" className="booth-image" />
    </div>
  </section>
);

export default About;
