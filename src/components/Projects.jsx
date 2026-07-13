import React from "react";
import "./Projects.css";

const Projects = () => {

    const projects = [

    {
        title: "Movie Ticket Booking System",
        description:
        "Full Stack Movie Ticket Booking Application with secure authentication, movie browsing, seat selection, and online booking functionality.",
        technologies:
        "Java, Spring Boot, Spring Security, JWT, React.js, MySQL, REST API",
        github:
        "https://github.com/HarishN24/movie-booking-backend",
        demo:
        "https://movie-booking-frontend-one.vercel.app/"
    },


    {
        title: "Smart Parking Management System",
        description:
        "Developed RESTful APIs to manage parking slots, vehicles and reservations. Implemented layered architecture with Controller, Service and Repository layers.",
        technologies:
        "Java, Spring Boot, Spring Data JPA, MySQL, Swagger, Postman",
        github:
        "https://github.com/HarishN24/smart-parking-system-api"
    },


    {
        title: "Medicare Smart Health Management System",
        description:
        "Healthcare management system developed to manage patient records, doctor details, appointments, and medical information.",
        technologies:
        "Java, Servlets, JSP, HTML, CSS, JavaScript, MySQL, Apache Tomcat",
        github:
        "https://github.com/HarishN24/Medicare-smart-health-system"
    },


    {
    title: "Console-Based Banking Application",
    description:
    "A console-based banking system developed using Core Java that allows users to create accounts, securely login using PIN authentication, perform deposits, withdrawals, fund transfers, check account balance, and view transaction history.",
    technologies:
    "Java, OOP, Collections Framework, ArrayList, Exception Handling, Scanner",
    github:
    "https://github.com/HarishN24/java-cli-banking-system"
    }

    ];


  return (
    <section className="projects" id="projects">

      <h2>
        My <span>Projects</span>
      </h2>


      <div className="project-container">

        {
          projects.map((project,index)=>(

            <div className="project-card" key={index}>

              <h3>{project.title}</h3>

              <p>
                {project.description}
              </p>

              <h4>
                Technologies:
              </h4>

              <p>
                {project.technologies}
              </p>
                <div className="project-buttons">

                {
                project.github &&

                <a
                href={project.github}
                target="_blank"
                rel="noreferrer">

                Github

                </a>
                }


                {
                project.demo &&

                <a
                href={project.demo}
                target="_blank"
                rel="noreferrer">

                Live Demo

                </a>

                }

                </div>

            </div>

          ))
        }


      </div>


    </section>
  );
};


export default Projects;