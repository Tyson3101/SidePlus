import React from "react";

function Episode({
  thumbnail,
  videoSrc,
  downloadSrc,
  name,
  epNumber,
  id,
}: {
  thumbnail: string;
  videoSrc: string;
  downloadSrc: string;
  name: string;
  epNumber?: number;
  id: string;
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
          <button
            onClick={() =>
              window.location.replace(window.location.origin + "/" + id)
            }
            id="watchBtn"
          >
            Watch
          </button>
          <button onClick={() => window.open(downloadSrc)} id="downloadBtn">
            Download
          </button>
        </div>
      </div>
    </div>
  );
}

export default Episode;
