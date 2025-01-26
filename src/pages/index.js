import React from "react";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDownload, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import "../styles/main.scss";

const IndexPage = () => {
  return (
    <Layout>
      <div className="container">
        <div className="columns">
          <div className="column is-4 has-text-centered">
            <div>
              <StaticImage
                src="../images/profile.jpg"
                alt="My profile picture"
                placeholder="blurred"
                className="circular-container"
              />
            </div>
            <h1 className="mt-4 custom-title is-1 has-text-centered">
              Data Scientist
            </h1>
            <a href="https://www.linkedin.com/in/mikulas-bankovic/">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://github.com/xbankov" className="ml-4">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="mailto:mikulas.bankovic27@gmail.com" className="ml-4">
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
          </div>
          <div className="column is-5 is-offset-2 has-text-centered is-size-5">
            <div className="block">
              <h3 className="subtitle is-3"> Greetings!</h3>
            </div>
            <div className="block">
              I'm Miki, a <strong>data scientist</strong> interested in computer
              vision and natural language processing.
            </div>
            <div className="block">
              I have recently completed my master's thesis in generative AI for
              for medical imaging through a collaborative effort between{" "}
              <a href="https://www.dkfz.de/en/index.html">DKFZ</a> in
              Heidelberg, Germany, and{" "}
              <a href="https://cbia.fi.muni.cz/">CBIA</a> in Brno, Czech
              Republic.
            </div>
            <div className="block">
              Explore my portfolio to delve deeper into my diverse data science
              projects and experiences ranging from NLP through computer vision
              and recommender systems.
            </div>
            <div className="block">
              <a href="/CV.pdf" download>
                <FontAwesomeIcon icon={faDownload} size="lg" /> Here{" "}
              </a>{" "}
              is my CV.
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>xbankov.eu - Greeting!</title>;
