import React from 'react';
import styles from "./Projects.module.css";
import siteInstitucional from "/projeto-site.jpg"

const Projects = () => {

    const projects = [
        {id:0,name:"Site Institucional HRSJ",
         image:siteInstitucional,
        link:"http://hsjeronimohomolog.web249.uni5.net/"
        }
    ];
  return (
    <div className={styles.container}>
        <div className={styles.flexRow}>
        {projects.map((project, index)=>(
               <a href={project.link} target='_blank'>
                    <div className={styles.card} style={{backgroundImage:`url(${project.image})`}}>
                        <p className={styles.name}>{project.name}</p>
                    </div>
                </a>
        ))}
        </div>
    </div>
  )
}

export default Projects
