"use client";
import React from "react";
import TrackItem from "./TrackItem";
import BackgroundDecorations from "./BackgroundDecoration";

const TrackCard: React.FC = () => {
  const tracks = [
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e462ff11db5763949071dc1311a9f4a419d984d2",
      altText: "Historical innovations",
      title: "historical innovations",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7858596ec506cc86767f92b48fd5354b8f63d83f",
      altText: "Cryptography",
      title: "cryptography",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/dff4e18e98d6c80c4405a19be929e262814eacd2",
      altText: "Accessibility and ethics",
      title: "accessibility and ethics",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/1a55ea92dba64f0cb4dece94ec69e66d5848c466",
      altText: "British themed",
      title: "british themed",
    },
  ];

  return (
    <section className="overflow-hidden relative p-5 mx-auto max-w-none min-h-screen bg-cyan-100 max-md:max-w-[991px] max-sm:max-w-screen-sm">
      <h1 className="mt-5 mr-0 mb-10 ml-5 text-6xl text-amber-400 max-md:text-5xl max-sm:mt-2.5 max-sm:mr-0 max-sm:mb-5 max-sm:ml-2.5 max-sm:text-4xl">
        Tracks
      </h1>

      <div className="grid gap-10 p-5 mx-auto my-0 grid-cols-[repeat(2,1fr)] max-w-[1200px] max-md:gap-8 max-md:grid-cols-[1fr] max-sm:gap-5 max-sm:p-2.5">
        {tracks.slice(0, 3).map((track, index) => (
          <TrackItem
            key={index}
            imageUrl={track.imageUrl}
            altText={track.altText}
            title={track.title}
          />
        ))}

        <div className="flex relative flex-col items-center text-center">
          <div className="flex relative justify-center items-center w-full">
            <img
              src={tracks[3].imageUrl}
              alt={tracks[3].altText}
              className="object-contain max-w-full h-auto"
            />
          </div>
        </div>
      </div>

      <h2 className="mt-5 text-5xl text-amber-400 max-md:text-4xl max-sm:text-3xl">
        british themed
      </h2>

      <BackgroundDecorations />

      {/* Font imports */}
      <link
        href="https://fonts.googleapis.com/css2?family=Marcellus+SC&family=Moon+Dance&display=swap"
        rel="stylesheet"
      />
    </section>
  );
};

export default TrackCard;
