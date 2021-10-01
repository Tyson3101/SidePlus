import React from "react";

function Footer({ scrollToTop }: { scrollToTop: Function }) {
  return (
    <>
      <footer>
        <div className="text">
          <h1>Free SidePlus</h1>
          <p>
            Free SidePlus Content from{" "}
            <a
              href="https://discord.gg/UUR2XFmDnG"
              target="_blank"
              rel="noreferrer"
            >
              KOKO Discord
            </a>
            <br />
            <span className="link">Schedule</span> |{" "}
            <a
              href="https://twitter.com/joinsideplus"
              target="_blank"
              rel="noreferrer"
            >
              SidePlus Twitter
            </a>
            <br />
            <span className="link" onClick={() => scrollToTop()}>
              Scroll to top
            </span>
          </p>
        </div>
        <div className="images">
          <div className="imageLeft">
            <a
              href="https://www.youtube.com/channel/UCDogdKl7t7NHzQ95aEwkdMw"
              target="_blank"
              rel="noreferrer"
            >
              <img src="https://i.imgur.com/l3gDao0.jpg?1" alt="" />
            </a>
          </div>
          <div className="imageRight">
            <a
              href="https://www.sideplus.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://global-uploads.webflow.com/60f1486c9971edb7304fc4f5/60f14afd3ee90b0c0d2f2697_Component%20102%20%E2%80%93%2043.svg"
                alt=""
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
