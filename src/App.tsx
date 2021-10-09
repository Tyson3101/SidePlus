import { useRef } from "react";
import SidePlus from "./SidePlus.json";
import Episode from "./components/Episode";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import VideoPlayer from "./components/VideoPlayer";
function App() {
  const navbar = useRef() as { current: HTMLDivElement };
  const schedule = useRef() as { current: HTMLDivElement };
  const SideCast = useRef() as { current: HTMLDivElement };
  const AskSidemen = useRef() as { current: HTMLDivElement };
  const AccessAllAreas = useRef() as { current: HTMLDivElement };
  const LatestVideo = GetLatestVideo();

  if (
    Object.values(SidePlus)
      .flatMap((content) => [...content.map((ep) => ep.id.toLowerCase())])
      .includes(window.location.pathname.toLowerCase().replace("/", ""))
  ) {
    return <VideoPlayer />;
  } else
    return (
      <>
        <section className="header" ref={navbar}>
          <Navbar
            scrollToSchdule={() =>
              schedule.current.scrollIntoView({
                behavior: "smooth",
                block: "center",
              })
            }
          />
        </section>
        <section className="options">
          <div className="ContainerHeader">
            <h1>Content Available</h1>
          </div>
          <div className="one">
            <div
              className="option"
              onClick={() =>
                SideCast.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
            >
              <img
                src="https://global-uploads.webflow.com/60f1486c9971edb7304fc4f5/6103e2d9b2debbefe4b217df_MainLogopsd.svg"
                alt="Side Cast"
              />
            </div>
          </div>
          <div className="more">
            <div
              className="option"
              onClick={() =>
                AskSidemen.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
            >
              <img
                src="https://global-uploads.webflow.com/60f1486c9971edb7304fc4f5/60f14afde14c1d83aaa5773a_Group%203844.svg"
                alt="Ask Sidemen"
              />
            </div>
            <div
              className="option"
              onClick={() =>
                AccessAllAreas.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
            >
              <img
                src="https://global-uploads.webflow.com/60f1486c9971edb7304fc4f5/611d3d6c063f519433ff5197_Asset%207.svg"
                alt="Access all Areas"
              />
            </div>
          </div>
        </section>
        <section className="RecentVideo">
          <h1 className="ContainerHeader contentHeader">Recent Video</h1>
          <div className="episodes">
            <h1 className="seasonHeader">{LatestVideo.show}</h1>
            {
              <Episode
                key={LatestVideo.id}
                id={LatestVideo.id}
                name={LatestVideo.name}
                thumbnail={LatestVideo.thumbnail}
                epNumber={LatestVideo.epNumber}
                videoSrc={LatestVideo.videoSrc}
                downloadSrc={LatestVideo.downloadSrc}
              />
            }
          </div>
        </section>
        <section className="sideCast" ref={SideCast}>
          <h1 className="ContainerHeader contentHeader">Side Cast</h1>
          <div className="episodes">
            <h1 className="seasonHeader">Season 1</h1>
            {SidePlus.sidecast.map((ep) => (
              <Episode
                key={ep.id}
                id={ep.id}
                name={ep.name}
                thumbnail={ep.thumbnail}
                epNumber={ep.epNumber}
                videoSrc={ep.videoSrc}
                downloadSrc={ep.downloadSrc}
              />
            ))}
          </div>
        </section>
        <section className="askSidemen" ref={AskSidemen}>
          <h1 className="ContainerHeader contentHeader">Ask Sidemen</h1>
          <div className="episodes">
            <h1 className="seasonHeader">Season 1</h1>
            {SidePlus.asksidemen.map((ep) => (
              <Episode
                key={ep.id}
                id={ep.id}
                name={ep.name}
                thumbnail={ep.thumbnail}
                epNumber={ep.epNumber}
                videoSrc={ep.videoSrc}
                downloadSrc={ep.downloadSrc}
              />
            ))}
          </div>
        </section>
        <section className="accessAllAreas" ref={AccessAllAreas}>
          <h1 className="ContainerHeader contentHeader">Access All Areas</h1>
          <div className="episodes">
            <h1 className="seasonHeader">Season 1</h1>
            {SidePlus.accessallareas.map((ep) => (
              <Episode
                key={ep.id}
                id={ep.id}
                name={ep.name}
                thumbnail={ep.thumbnail}
                epNumber={ep.epNumber}
                videoSrc={ep.videoSrc}
                downloadSrc={ep.downloadSrc}
              />
            ))}
          </div>
        </section>
        <section className="Schedule" ref={schedule}>
          <div className="ContainerHeader">
            <h1>Schedule</h1>
            <div>
              <li>
                <h3 className="ContainerHeader">
                  New{" "}
                  <span
                    onClick={() =>
                      SideCast.current.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      })
                    }
                    className="link"
                  >
                    SideCast Episodes
                  </span>{" "}
                  every Friday
                </h3>
              </li>
              <li>
                <h3 className="ContainerHeader">
                  New{" "}
                  <span
                    onClick={() =>
                      AskSidemen.current.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      })
                    }
                    className="link"
                  >
                    Ask Sidemen
                  </span>{" "}
                  Episodes every Tuesday
                </h3>
              </li>
              <li>
                <h3 className="ContainerHeader">
                  New{" "}
                  <span
                    onClick={() =>
                      AccessAllAreas.current.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      })
                    }
                    className="link"
                  >
                    Access All Areas
                  </span>{" "}
                  Episodes every Sunday
                </h3>
              </li>
            </div>
          </div>
        </section>
        <p className="credit">Made By Tyson3101</p>
        <Footer
          scrollToTop={() =>
            navbar.current.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
          scrollToSchdule={() =>
            schedule.current.scrollIntoView({
              behavior: "smooth",
              block: "center",
            })
          }
        />
      </>
    );
}

export default App;

function GetLatestVideo() {
  const LatestVideo = (
    Object.values(SidePlus).find((content) =>
      content.find((ep) => ep.latest)
    ) as any
  ).find((ep: any) => ep.latest);
  const LatestVideoShow = Object.keys(SidePlus).find((key) =>
    (SidePlus as any)[key].find((ep: any) => ep.latest)
  ) as any;

  let show = "";
  switch (LatestVideoShow) {
    case "sidecast":
      show = "Side Cast";
      break;
    case "asksidemen":
      show = "Ask Sidemen";
      break;
    case "accessallareas":
      show = "Access All Areas";
      break;
  }

  return { ...LatestVideo, show };
}
