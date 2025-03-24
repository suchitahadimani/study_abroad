import { useState } from 'react';
import tracksData from '../utils/tracks.json'; // Import the JSON file

const Tracks = () => {
  const [selectedTrack, setSelectedTrack] = useState<string | null>(null);

  // Define image paths as variables
  const leftImage1 = "../assets/lovelace.png";
  const leftImage2 = "../assets/turing.png";
  const rightImage = '../assets/babbage.png';

  const handleTrackClick = (trackTitle: string) => {
    setSelectedTrack((prev) => (prev === trackTitle ? null : trackTitle));
  };

  return (
    <section id="tracks" className="section">
      <h2>Tracks</h2>
      <p>Explore our diverse tracks designed for all interests and skill levels:</p>

      <div className="track-images-container">
        {/* Left-side images */}
        <img className="track-image left-image" src={leftImage1} alt="Left Image 1" />
        <img className="track-image left-image" src={leftImage2} alt="Left Image 2" />

        <div className="tracks-container">
          {/* Convert the tracks data object into an array of [key, value] pairs using Object.entries() */}
          {Object.entries(tracksData).map(([trackTitle, track], index) => (
            <div
              key={index}
              className="track-card"
              onClick={() => handleTrackClick(trackTitle)} // Set the selected track
            >
              <h3>{trackTitle}</h3>
              <p>{track.Objective}</p>

              {/* Conditionally render project ideas if the track is selected */}
              {selectedTrack === trackTitle && (
                <div className="projects-list">
                  <h4> Project Ideas </h4>
                  <ul>
                    {track['Project Ideas'].map((project, projectIndex) => (
                      <li key={projectIndex}>
                        <strong>{project.title}</strong>: {project.description}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right-side image */}
        <img className="track-image right-image" src={rightImage} alt="Right Image" />
      </div>
    </section>
  );
};

export default Tracks;
