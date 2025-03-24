import CountdownTimer from "../components/countdownTimer";
import leftImage from "../assets/left-skyline.png";
import rightImage from "../assets/right-skyline.png";

const targetDate = new Date('2025-01-08T09:00:00Z').getTime(); 

const Header = () => (
  <div className="hero-container" id="header">  
    {/* Background Images */}
    <img src={leftImage} alt="Left Decor" className="background-image left-image" />
    <img src={rightImage} alt="Right Decor" className="background-image right-image" />

    {/* Navbar */}
    <nav className="navbar">
      <ul className="navbar-links">
        <li><a href="#header">Home</a></li>
        <li><a href="#schedule">Schedule</a></li>
        <li><a href="#tracks">Tracks</a></li>
        <li><a href="#faqs">FAQs</a></li>
      </ul>
    </nav>

    {/* Header Content */}
    <h1>CS ORIGINS HACKATHON 2025</h1>
    <h3><i>Decoding the Past, Innovating the Future</i></h3>
    <h4>January 8, 2025</h4>
    <CountdownTimer targetDate={targetDate} />
    <a href="https://discord.gg/eVzAkbrN" target="_blank" rel="noopener noreferrer">
      <button className="discord-button">Join Discord</button>
    </a>
  </div>
);

export default Header;
