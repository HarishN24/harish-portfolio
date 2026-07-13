import React from "react";
import "./Certifications.css";

const Certifications = () => {
    const certificates=[


        {
        title:"Java Full Stack Certification",

        issuer:"Vcube Software",

        year:"2025-2026"

        },


        {
        title:"Design and Implementation of Human Computer Interfaces",

        issuer:"NPTEL",

        year:"2025"

        }


     ];

  return (

    <section className="certifications" id="certifications">

      <h2>
        My <span>Certifications</span>
      </h2>


      <div className="certificate-container">

        {
          certificates.map((certificate,index)=>(

            <div className="certificate-card" key={index}>

              <h3>
                {certificate.title}
              </h3>

              <p>
                Issued By: {certificate.issuer}
              </p>

              <span>
                {certificate.year}
              </span>

            </div>

          ))
        }

      </div>

    </section>

  );

};


export default Certifications;