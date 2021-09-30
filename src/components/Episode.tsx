import React from "react";

function Episode({
  thumbnail,
  videoSrc,
  downloadSrc,
  name,
  epNumber,
}: {
  thumbnail: string;
  videoSrc: string;
  downloadSrc: string;
  name: string;
  epNumber?: number;
}) {
  return (
    <div className="episode">
      <div className="sizeContainer">
        <h1 className="header">
          {/*eslint-disable-next-line*/}
          {epNumber != undefined ? `EP ${epNumber}` : ""}: {name}
        </h1>
        <img src={thumbnail} alt="" className="thumbnail" />
        <div className="buttons">
          <button id="watchBtn">
            <a href={videoSrc} target="_blank" rel="noreferrer">
              Watch
            </a>
          </button>
          <button id="downloadBtn">
            <a href={downloadSrc} target="_blank" rel="noreferrer">
              Download
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Episode;
