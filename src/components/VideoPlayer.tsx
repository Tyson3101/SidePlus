import React from "react";
import SidePlus from "../SidePlus.json";
import "../css/videoPlayer.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

function VideoPlayer() {
  const video = Video();
  function Video(): typeof SidePlus.sidecast[0] {
    const id = window.location.pathname.replace("/", "");
    return (
      Object.values(SidePlus).find((content) =>
        content.find((ep) => ep.id === id)
      ) as any
    ).find((ep: any) => ep.id === id);
  }

  return (
    <div className="VideoPlayerContainer">
      <Navbar />
      <div className="episodes">
        <div className="episode">
          <div className="sizeContainer">
            <h1 className="header">
              {/*eslint-disable-next-line*/}
              {video.epNumber != undefined ? `EP ${video.epNumber}` : ""}:{" "}
              {video.name}
            </h1>
            <div className="streamHubRedirect">
              <button onClick={() => window.location.replace(video.videoSrc)}>
                Watch on Streamhub
              </button>
            </div>
            <iframe
              id="iframeVideoPlayer"
              title={video.name}
              sandbox="allow-forms allow-scripts"
              src={video.videoSrc}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
            ></iframe>
            <div className="buttons">
              <button
                onClick={() => window.open(video.downloadSrc)}
                id="downloadBtn"
                className="fill"
              >
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default VideoPlayer;
