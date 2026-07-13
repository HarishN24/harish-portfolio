import React from "react";
import "./Education.css";

const Education = () => {
    const educationData=[
        {
        degree:"B.Tech - Computer Science Engineering",

        college:"Sree Vahini Institute of Technology (JNTUK)",

        year:"2021 - 2025",

        score:"CGPA: 7.6/10"

        },


        {
        degree:"Intermediate - MPC",

        college:"AKRJ Junior College",

        year:"2019 - 2021",

        score:"CGPA: 7.8/10"

        },


        {
        degree:"SSC",

        college:"VSRZPH School",

        year:"2018 - 2019",

        score:"CGPA: 9.2/10"

        }


    ];


  return (

    <section className="education" id="education">

      <h2>
        My <span>Education</span>
      </h2>


      <div className="education-container">


        {
          educationData.map((edu,index)=>(

            <div className="education-card" key={index}>


              <div className="year">
                {edu.year}
              </div>


              <h3>
                {edu.degree}
              </h3>


              <h4>
                {edu.branch}
              </h4>


              <h5>
                {edu.college}
              </h5>


              <p>
                {edu.score}
              </p>


            </div>

          ))
        }


      </div>


    </section>

  );

};


export default Education;