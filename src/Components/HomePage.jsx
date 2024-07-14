import "../styles/HomePage.css"
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";


function Hero() {
  return (
    <>
      <section id="home" className="hero">
        <div className="container">
          <div className="content">
            <div className="hero-main">
              <div className="hero-text">
                <h1>Software Engineer</h1>
                {/* <img src={Waving} alt="waving_hand" /> */}
                <p>
                  Hi, I'm Zahid Khan. A passionate
                  Engineer based in Pune, India. 📍
                </p>
                <span>
                  <a
                    aria-label="linkedin"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/md-zahid-khan/"
                  >
                    <IconBrandLinkedin width={32} height={32} />
                  </a>
                  <a
                    aria-label="github"
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/zahidkhan6417"
                  >
                    <IconBrandGithub width={32} height={32} />
                  </a>
                </span>
                
              </div>
              <div className="hero-img"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;