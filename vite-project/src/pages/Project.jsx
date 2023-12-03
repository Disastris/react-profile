import { SocialIcon } from "react-social-icons";
import "./Project.css";

function Project() {
  const Project = [
    {
      title: "Cinephile",
      description:
        "An application made to help people find movie related articles and learn more about certain movies",
      live: "https://chaseostien.github.io/Cinephile/",
      code: "https://github.com/ChaseOstien/Cinephile",
    },
    {
      title: "UT Bro's Apparel",
      description:
        "An inventory management application made to add, delete, and update inventory for convenience",
      live: "https://ut-bros-apparel-0bcd7da3cb4b.herokuapp.com/login",
      code: "https://github.com/cprademacher/apparel-database",
    },
    {
      title: "Auctionator",
      description:
        "A fun application made in the style of Deal Dash with less noise in the background for easier purchase",
      live: "https://auctionator-12c2490092de.herokuapp.com/#",
      code: "https://github.com/Villzies/Auctionator",
    },
  ];
  return (
    <section className="bg-primary text-black px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-yellow-200 pb-2">
            Projects
          </h2>

          <p className="pb-5">
            These are some of my best projects. The respective languages used
            for each project will be found in their respective Github
            repositories. Go ahead and give them a click!
          </p>
        </div>
      </div>
      <div className="projects container flex flex-start mx-auto">
        <div className="project" id="project-1">
          Project A
          <div className="content">
            <SocialIcon url="https://github.com/Disastris" network="github" />
          </div>
          <div className="content-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            nobis fugit magni vero corrupti magnam mollitia cupiditate cumque
            optio corporis ullam. Veniam, atque commodi. Officiis ratione enim
            nihil libero tempora.
          </div>
        </div>
        <div className="project" id="project-2">
          Project B
        </div>
        <div className="project" id="project-3">
          Project C
        </div>
      </div>
    </section>
  );
}
export default Project;
