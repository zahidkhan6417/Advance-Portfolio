import RecipeBook from "../Image/RecipeBook.png"
import CodepenClone from "../Image/codepen-clone.png"
import Bloggy from "../Image/Bloggy.png"
import nikestore from "../Image/nike-store.png"
import ProBox from "./ProBox"
import "../styles/Project.css"


function Projects() {
  return (
    <>
      <section id="projects" className="project">
        <div className="containerr">
          <div className="project-content">
            <p>Projects</p>
            <h3>Each project is a good piece of development 🧩</h3>
            <div className="projects-grid">
              <ProBox
                title="Recipe-Book"
                img={RecipeBook}
                description="Recipe-Book is an innovative web application developed using React, designed to bring the joy of cooking and exploring new flavor to users. With this project, I created a user-friendly platform that allows individuals to search and discover an extensive collection of mouth watering recipes from various cuisines around the world."
                techno1="React"
                techno2="SCSS"
                code="https://github.com/zahidkhan6417/Recipe-Book-using-React.Js"
                demo="https://recipe-book-by-zahid.vercel.app/"
                scrollY="-83%"
              />
              <ProBox
                title="Nike-Store"
                img={nikestore}
                description="I developed a dynamic Nike-themed website using Next.js. Through this project, I showcased
                proficiency in full-stack development, employing React and Next.js for the frontend interface and
                Strapi(Headless Cms) for backend technologies to manage data and user experiences."
                techno1="Next.js"
                techno2="Tailwind"
                code="https://github.com/zahidkhan6417/Nike-Store-Frontend"
                demo="https://nike-store-rosy-kappa.vercel.app/"
                scrollY="-83%"
              />
              <ProBox
                title="Code-Pen Clone"
                img={CodepenClone}
                description="CodePen is an online code editor where you can build, test, and discover frontend codes. It has a large community of developers sharing their work and learning from and supporting one another. CodePen is a robust IDE that allows you to create, test, and find frontend code for any project."
                techno1="React"
                techno2="CSS"
                code="https://github.com/zahidkhan6417/Codepen-Clone-Using-React"
                demo="https://github.com/zahidkhan6417/Codepen-Clone-Using-React"
                scrollY="-74%"
              />
              <ProBox
                title="Bloggy"
                img={Bloggy}
                description="Bloggy is a dynamic and user-centric blogging platform designed to foster meaningful discussions and share captivating stories. With an intuitive interface and a diverse range of topics, Bloggy empowers writers and readers alike."
                techno1="React"
                techno2="SCSS"
                code="https://github.com/zahidkhan6417/Bloggy.git"
                demo="https://github.com/zahidkhan6417/Bloggy.git"
                scrollY="-83%"
              />
            </div>
          </div>
          <h2 className="new-projects">New projects coming soon.. 🤠</h2>
        </div>
      </section>
    </>
  );
}

export default Projects;