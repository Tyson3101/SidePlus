import React from "react";

function Navbar({ scrollToSchdule }: { scrollToSchdule?: Function }) {
  return (
    <>
      <nav>
        <header>
          <a href="https://www.sideplus.com/" target="_blank" rel="noreferrer">
            <img
              src="https://global-uploads.webflow.com/60f1486c9971edb7304fc4f5/60f14afd3ee90b0c0d2f2697_Component%20102%20%E2%80%93%2043.svg"
              alt=""
            />
          </a>
          {scrollToSchdule ? (
            <span className="link" onClick={() => scrollToSchdule?.()}>
              Schedule
            </span>
          ) : (
            <></>
          )}
          <h4>Free SidePlus</h4>
        </header>
      </nav>
    </>
  );
}

export default Navbar;
