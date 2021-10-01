import { useRef, useState, useEffect } from "react";
import fetch from "cross-fetch";
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
  const [RecentTwitterID, setRecentTwitterID] = useState("1437099438854529028");

  useEffect(() => {
    console.log(
      Object.values(SidePlus).flatMap((content) => [
        ...content.map((ep) => ({ name: ep.name, id: ep.id })),
      ])
    );
    (async () => {
      try {
        const { data } = await fetch(
          "https://serverglitch.glitch.me/sideplus",
          {
            method: "POST",
          }
        ).then((res: any) => res.json());
        setRecentTwitterID(
          data.filter((tweet: any) => !tweet.text.startsWith("@"))[0].id
        );
      } catch (e) {}
    })();
  }, []);

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
        <section className="twitter">
          <h1 className="ContainerHeader">Recent Twitter Activity</h1>
          <p>
            <a
              href="https://twitter.com/joinsideplus"
              target="_blank"
              rel="noreferrer"
            >
              View SidePlus Tweets
            </a>
          </p>
          <iframe
            className="twitterIframe"
            id="twitter-widget-0"
            scrolling="no"
            frameBorder={0}
            allowFullScreen={true}
            title="Twitter Tweet"
            src={`https://platform.twitter.com/embed/Tweet.html?dnt=false&embedId=twitter-widget-0&features=eyJ0ZndfZXhwZXJpbWVudHNfY29va2llX2V4cGlyYXRpb24iOnsiYnVja2V0IjoxMjA5NjAwLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2hvcml6b25fdHdlZXRfZW1iZWRfOTU1NSI6eyJidWNrZXQiOiJodGUiLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3NwYWNlX2NhcmQiOnsiYnVja2V0Ijoib2ZmIiwidmVyc2lvbiI6bnVsbH19&frame=false&hideCard=false&hideThread=false&id=${RecentTwitterID}&lang=en&origin=https%3A%2F%2Ftwitter.com%2Fjoinsideplus%2Fstatus%2F${RecentTwitterID}widget%3DTweet&sessionId=d0c852102292e47286f255101ecbe8edb673d09e&theme=dark&widgetsVersion=1890d59c%3A1627936082797&width=300px`}
          />
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
                  Episodes every Friday
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
