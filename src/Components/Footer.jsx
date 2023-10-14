import { IconBrandGithub, IconBrandLinkedin, IconDownload } from "@tabler/icons-react";
import "../styles/Footer.css"

function Footer() {
  const googleDriveFileId = '1f6_sCbuUkzz3M61YZk9Z6NyiS8CSX5k0'

  return (
    <>
      <footer>
        <div className="container">
          <div className="footerc">
            <h3>
              Copyright © {new Date().getFullYear()}. All rights are reserved
            </h3>
            <div className="footerc__socials">
              <a
                aria-label="linkedin"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/md-zahid-khan/"
              >
                <IconBrandLinkedin width={30} height={30} />
              </a>
              <a
                aria-label="github"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/zahidkhan6417"
              >
                <IconBrandGithub width={30} height={30} />
              </a>
              <a href={`https://drive.google.com/uc?export=download&id=${googleDriveFileId}`} className="btn2" title="Download Resume"><IconDownload /></a>

            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
