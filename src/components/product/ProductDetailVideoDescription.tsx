"use client";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

export const ProductDetailVideoDescription = ({
  youtubeLink,
  title,
}: {
  youtubeLink: string;
  title: string;
}) => {
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  return (
    <>
      {client && youtubeLink && (
        <div className="bg-gold/10 py-10">
          <div className="mx-auto px-0 md:px-40 w-full ">
            <header className="text-center my-10 text-gold font-bold text-3xl  ">
              <h1>{title}</h1>
            </header>
            <div className="h-[700px]">
              <ReactPlayer
                controls
                width="100%"
                height="100%"
                url={youtubeLink}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
