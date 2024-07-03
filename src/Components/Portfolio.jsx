/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/github.png";

const imageAltText = "Snippet from my Github Account";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Tic-Tac-Toe",
    description:
      "Developed a Tic-Tac-Toe game and think some logic behind the scene it helps to increase thinking power. ",
    url: "https://github.com/shikha-jhaa/TIC-TAC-TOC-game",
  },
  {
    title: "Landing page",
    description:
      "Developed a landing page for a experience project. It includes features like food orfdering management, and cart management.",
    url: "https://reactproject-landingpage.netlify.app/",
  },
  {
    title: "Calculator app",
    description:
      " Developed an calculator app features to include mathematics operations and fast calculating features.",
    url: "https://reactproject-calculator-app.netlify.app/",
  },
//   {
//     title: "",
//     description:
//       "Developed a Supermarket Management System for a university project. It includes features like product management, user management, and cart management.",
//     url: "https://github.com/Yashasvi-30/Supermarket-JAVA-Proj",
//   },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
