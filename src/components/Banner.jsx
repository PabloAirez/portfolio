import styles from "./banner.module.css";
import perfil from "/perfil.png"





const Banner = () => {



  return (
    <div className={styles.bannerBase}>
          <div className={styles.bannerColor}>
                <img className={styles.perfil} src={perfil} />
                <div className={styles.flexCol}>
                  <h1 className={styles.title}>Olá! Eu me chamo <span className={`${styles.box} ${styles.boxPurple}`}>Pablo Santos</span></h1>
                  <h2 className={styles.subtitle}>Desenvolvedor Fullstack <span className={`${styles.box} ${styles.boxPurple}`}>PHP</span> e <span className={`${styles.box} ${styles.boxBlue}`}>React</span></h2>
                  <div className={styles.flexRow}>
                    <button className={styles.button}>Meus Projetos</button>
                    <button className={styles.button}>Mais sobre mim</button>
                  </div>

                </div>
             </div>

        </div>
  

  )
}

export default Banner
