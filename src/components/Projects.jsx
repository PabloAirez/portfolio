import React from 'react';
import Styles from "./Projects.module.css";
import siteInstitucional from "/projeto-site.jpg"

const Projects = () => {

    const projects = [
        {id:0,name:"Site Institucional HRSJ",
         image:siteInstitucional,
        link:"http://hsjeronimohomolog.web249.uni5.net/"
        }
    ];
  return (
    <div className={Styles.container}>
      <p className={Styles.title}>Conheça meus projetos</p>
        <div className={Styles.flexRow}>
        {projects.map((project, index)=>(
               <a href={project.link} target='_blank'>
                    <div className={Styles.card} style={{backgroundImage:`url(${project.image})`}}>
                        <p className={Styles.name}>{project.name}</p>
                    </div>
                </a>
        ))}
        </div>
    </div>
  )
}

export default Projects
