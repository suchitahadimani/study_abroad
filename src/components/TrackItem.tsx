import React from "react";

interface TrackItemProps {
  imageUrl: string;
  altText: string;
  title: string;
}

const TrackItem: React.FC<TrackItemProps> = ({ imageUrl, altText, title }) => {
  return (
    <article className="flex relative flex-col items-center text-center">
      <figure className="flex relative justify-center items-center w-full">
        <img
          src={imageUrl}
          alt={altText}
          className="object-contain max-w-full h-auto"
        />
      </figure>
      <h2 className="mt-5 text-5xl text-amber-400 max-md:text-4xl max-sm:text-3xl">
        {title}
      </h2>
    </article>
  );
};

export default TrackItem;
