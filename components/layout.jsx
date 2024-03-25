import { Github, Linkedin } from "react-bootstrap-icons";
function Layout({ children }) {
  return (
    <>
      <div className="layoutBody">
        <header>
          <h1>Hangman</h1>
          <p>Find the word, but DON'T hang the man</p>
        </header>
        <main>{children}</main>
        <footer>
          <div>
            <a href="https://github.com/TheoBertilsson" target="_blank">
              <Github className="icons" id="githubIcon" />
            </a>
            <a
              href="https://www.linkedin.com/in/theodor-bertilsson-887b9a178/"
              target="_blank"
            >
              <Linkedin className="icons" id="linkedInIcon" />
            </a>
          </div>
        </footer>
      </div >
    </>
  );
}

export default Layout;
