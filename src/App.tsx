import { useRef } from "react";
import Episode from "./components/Episode";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
function App() {
  const navbar = useRef() as { current: HTMLDivElement };
  const SideCast = useRef() as { current: HTMLDivElement };
  const AskSidemen = useRef() as { current: HTMLDivElement };
  const AccessAllAreas = useRef() as { current: HTMLDivElement };
  return (
    <>
      <section className="header" ref={navbar}>
        <Navbar />
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
          allowTransparency={true}
          allowFullScreen={true}
          data-theme={"dark"}
          title="Twitter Tweet"
          src="https://platform.twitter.com/embed/Tweet.html?dnt=false&embedId=twitter-widget-0&features=eyJ0ZndfZXhwZXJpbWVudHNfY29va2llX2V4cGlyYXRpb24iOnsiYnVja2V0IjoxMjA5NjAwLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2hvcml6b25fdHdlZXRfZW1iZWRfOTU1NSI6eyJidWNrZXQiOiJodGUiLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3NwYWNlX2NhcmQiOnsiYnVja2V0Ijoib2ZmIiwidmVyc2lvbiI6bnVsbH19&frame=false&hideCard=false&hideThread=false&id=1443574906633875459&lang=en&origin=https%3A%2F%2Fpublish.twitter.com%2F%3Fquery%3Dhttps%253A%252F%252Ftwitter.com%252Fjoinsideplus%252Fstatus%252F1443574906633875459%26widget%3DTweet&sessionId=d0c852102292e47286f255101ecbe8edb673d09e&theme=dark&widgetsVersion=1890d59c%3A1627936082797&width=550px"
          data-tweet-id={1442909433659412486}
        />
      </section>

      <section className="sideCast" ref={SideCast}>
        <h1 className="ContainerHeader contentHeader">Side Cast</h1>
        <div className="episodes">
          <h1 className="seasonHeader">Season 1</h1>
          <Episode
            thumbnail={
              "https://vhx.imgix.net/sidemen/assets/de16e39a-f8d3-49dd-b93a-da99cc412f18?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640"
            }
            name={"YOU'RE HER FAVE SIDEMEN HARRY"}
            epNumber={1}
            videoSrc={"https://streamhub.to/e/2ugybriyb9g3"}
            downloadSrc={"https://streamhub.to/d/2ugybriyb9g3"}
          />
          <Episode
            thumbnail={
              "https://vhx.imgix.net/sidemen/assets/f9b0f4d6-bf8f-4669-a5a3-1e5b40a74187?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640"
            }
            name={"DON'T TOUCH ME, DON'T TOUCH"}
            epNumber={2}
            videoSrc={"https://streamhub.to/e/m3vt7lgfrbcr"}
            downloadSrc={"https://streamhub.to/d/m3vt7lgfrbcr"}
          />
          <Episode
            thumbnail={
              "https://vhx.imgix.net/sidemen/assets/5d3310cd-cec0-4bd6-9318-2e58724a4989?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640"
            }
            name={"WE ARE FAMOUS"}
            epNumber={3}
            videoSrc={"https://streamhub.to/e/gjtf7dwbopew"}
            downloadSrc={"https://streamhub.to/d/gjtf7dwbopew"}
          />
          <Episode
            thumbnail={
              "https://vhx.imgix.net/sidemen/assets/8b3c3154-d9f7-4a03-9f29-9caddf5ad9bf?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640"
            }
            name={"CAN I SHOW YOU MY ASS"}
            epNumber={4}
            videoSrc={"https://streamhub.to/e/659qia8olcm1"}
            downloadSrc={"https://streamhub.to/d/659qia8olcm1"}
          />
          <Episode
            thumbnail={
              "https://vhx.imgix.net/sidemen/assets/d27230a7-2e6c-4d0d-9cbb-789145d7ecff-552fb4e8.png?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640"
            }
            name={"35 OF YOUR SHOWED UP TO A STRIP CLUB?"}
            epNumber={5}
            videoSrc={"https://streamhub.to/e/659qia8olcm1"}
            downloadSrc={"https://streamhub.to/d/659qia8olcm1"}
          />
          <Episode
            thumbnail={
              "https://vhx.imgix.net/sidemen/assets/9489616d-5101-4fe1-8630-96667e29abe1-e9f38cd0.png?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640"
            }
            name={"CAN I REALLY SAY THIS?"}
            epNumber={6}
            videoSrc={"https://streamhub.to/e/8ez9t0rt5mmx"}
            downloadSrc={" https://streamhub.to/d/8ez9t0rt5mmx"}
          />
        </div>
      </section>
      <section className="askSidemen" ref={AskSidemen}>
        <h1 className="ContainerHeader contentHeader">Ask Sidemen</h1>
        <div className="episodes">
          <h1 className="seasonHeader">Season 1</h1>
          <Episode
            thumbnail={
              "https://vhx.imgix.net/sidemen/assets/bc18c50a-301f-4c5a-8862-568bf27398fa-b7045420.png?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640"
            }
            name={"WHO HAD THE BEST GRADES IN SCHOOL?"}
            epNumber={1}
            videoSrc={"https://streamhub.to/e/o3k339w7em6b"}
            downloadSrc={" https://streamhub.to/d/o3k339w7em6b"}
          />
          <Episode
            thumbnail={
              "https://vhx.imgix.net/sidemen/assets/99690022-094c-42d1-8c66-dfb5f1805613-7ad47d71.png?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640"
            }
            name={"WHICH IS THE BEST SIDEMEN DISS TRACK?"}
            epNumber={2}
            videoSrc={"https://streamhub.to/e/tlke0zfx388o"}
            downloadSrc={"https://streamhub.to/d/tlke0zfx388o"}
          />
          <Episode
            thumbnail={
              "https://vhx.imgix.net/sidemen/assets/f9337642-e2f9-4e88-94d2-ec8cd24a69f2-e82738c6.png?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640"
            }
            name={"WHAT HAPPENS IF SOMEONE LEAVES?"}
            epNumber={3}
            videoSrc={"https://streamhub.to/e/2ugybriyb9g3"}
            downloadSrc={"https://streamhub.to/d/2ugybriyb9g3"}
          />
          <Episode
            thumbnail={
              "https://vhx.imgix.net/sidemen/assets/eccb77eb-9253-4e26-8ca8-22d1ed03e581-2e9f652a.png?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640"
            }
            name={"FIRST TIME I GOT RECOGNIZED"}
            epNumber={4}
            videoSrc={"https://streamhub.to/e/2ugybriyb9g3"}
            downloadSrc={"https://streamhub.to/d/2ugybriyb9g3"}
          />
        </div>
      </section>
      <section className="accessAllAreas" ref={AccessAllAreas}>
        <h1 className="ContainerHeader contentHeader">Access All Areas</h1>
        <div className="episodes">
          <h1 className="seasonHeader">Season 1</h1>
          <Episode
            thumbnail={
              "https://vhx.imgix.net/sidemen/assets/3fae8d95-c094-4b68-8c0c-8a2761aaf3ad-914e0eb9.png?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640"
            }
            name={"KEEP THE SPEED LIMIT"}
            epNumber={1}
            videoSrc={"https://streamhub.to/e/swz6r1ejcmog"}
            downloadSrc={"https://streamhub.to/d/swz6r1ejcmog"}
          />
          <Episode
            thumbnail={
              "https://vhx.imgix.net/sidemen/assets/16bf7c49-1c23-4a67-91e7-2490dc44224c-970671e4.png?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640"
            }
            name={"SHOW ME YOUR ASS NOW"}
            epNumber={2}
            videoSrc={"https://streamhub.to/e/iembdzgcxsno"}
            downloadSrc={"https://streamhub.to/d/iembdzgcxsno"}
          />{" "}
          <Episode
            thumbnail={
              "https://vhx.imgix.net/sidemen/assets/92bca835-6066-4510-a106-53242224c289-03e39813.png?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640"
            }
            name={"DON'T BE LATE"}
            epNumber={3}
            videoSrc={"https://streamhub.to/e/9rjqy8j6gniw"}
            downloadSrc={"https://streamhub.to/d/9rjqy8j6gniw"}
          />
          <Episode
            thumbnail={
              "https://vhx.imgix.net/sidemen/assets/fb043ad3-2adf-4f6d-acb4-55cdb9cbf4a7-af54f39c.png?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640"
            }
            name={"DOES IT COUNT IF IT'S JUST THE TIP"}
            epNumber={4}
            videoSrc={"https://streamhub.to/e/vu0fswlupnxq"}
            downloadSrc={"https://streamhub.to/d/vu0fswlupnxq"}
          />
          <Episode
            thumbnail={
              "https://vhx.imgix.net/sidemen/assets/751147e6-6ed0-4a65-bf81-f7c86b274eb4-0cf72f1e.png?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640"
            }
            name={"WE CAN'T SHOW THAT ON HERE"}
            epNumber={5}
            videoSrc={"https://streamhub.to/d/i0r3i41vswci"}
            downloadSrc={"https://streamhub.to/d/i0r3i41vswci"}
          />
          <Episode
            thumbnail={
              "https://vhx.imgix.net/sidemen/assets/c5c25a71-de41-455a-9b06-d673cac7308d-87e5c297.png?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640"
            }
            name={"BACK OFF FAM"}
            epNumber={6}
            videoSrc={"https://streamhub.to/e/cwf0d6qbd84e"}
            downloadSrc={"https://streamhub.to/d/cwf0d6qbd84e"}
          />
          <Episode
            thumbnail={
              "https://vhx.imgix.net/sidemen/assets/aec787cf-5530-424e-ba09-49ced5b0bf59-38b00fc0.png?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640"
            }
            name={"I WANT DO DIE"}
            epNumber={7}
            videoSrc={"https://streamhub.to/e/cwf0d6qbd84e"}
            downloadSrc={"https://streamhub.to/d/cwf0d6qbd84e"}
          />
          <Episode
            thumbnail={
              "https://vhx.imgix.net/sidemen/assets/3a705db0-b729-43d1-9edc-079fde4688e4-65262889.png?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640"
            }
            name={"FUCK THE SIDEMEN"}
            epNumber={8}
            videoSrc={"https://streamhub.to/e/vufa9r7w59u9"}
            downloadSrc={"https://streamhub.to/d/vufa9r7w59u9"}
          />
          <Episode
            thumbnail={
              "https://vhx.imgix.net/sidemen/assets/1f6dd9f6-5162-41c7-8f41-8b151a581b37-62b3656f.png?auto=format%2Ccompress&fit=crop&h=360&q=70&w=640"
            }
            name={"WHAT A FUCKING BUZZKILL"}
            epNumber={9}
            videoSrc={"https://streamhub.to/e/jvhv4kiwfguo"}
            downloadSrc={"https://streamhub.to/d/jvhv4kiwfguo"}
          />
        </div>
      </section>
      <Footer
        scrollToTop={() =>
          navbar.current.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      />
    </>
  );
}

export default App;
