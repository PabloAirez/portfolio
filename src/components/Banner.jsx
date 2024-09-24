import styles from "./banner.module.css";
import perfil from "/perfil.png"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import { Fragment, useState } from "react";







const Banner = () => {

  const [emailCopied, setEmailCopied] = useState(false);

    const copyEmail=()=>{
      navigator.clipboard.writeText("pablodevphp@gmail.com");
    }


  return (
    <div className={styles.bannerBase}>
          <div className={styles.bannerColor}>
                <img className={styles.perfil} src={perfil} />
                <div className={styles.flexCol}>
                  <h1 className={styles.title}>Olá! Eu me chamo <span className={`${styles.box} ${styles.boxPurple}`}>Pablo Santos</span></h1>
                  <h2 className={styles.subtitle}>Desenvolvedor Fullstack <span className={`${styles.box} ${styles.boxPurple}`}>PHP</span> e <span className={`${styles.box} ${styles.boxBlue}`}>React</span></h2>
                  <div className={styles.flexRow}>
                    <a href="https://github.com/PabloAirez" target="_blank"><FaGithub className={styles.icons}></FaGithub></a>
                    <a href="https://www.linkedin.com/in/pablo-santos-712311223/" target="_blank"><FaLinkedin className={styles.icons}></FaLinkedin></a>
                  </div>
                    <button className={styles.button} onClick={()=>{setEmailCopied(true),copyEmail() }}>{emailCopied ? "Email copiado com sucesso!" : <Fragment><AiTwotoneMail className={styles.email} />Copiar email de contato</Fragment>}</button>
                 

                </div>
             </div>

        </div>
  

  )
}

export default Banner
