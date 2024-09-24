import { useRef } from "react"
import Styles from "./Nav.module.css"

const Nav = () => {

    const navRef = useRef();

    document.addEventListener("scroll", ()=>{
        if(window.scrollY > 0){
            navRef.current.style.backgroundColor = "rgba(0,0,0,0.8)";
        }else{
            navRef.current.style.backgroundColor = "rgba(0,0,0,0)";

        }
    })
  return (
    <div className={Styles.nav} ref={navRef}>
        <ul className={Styles.list}>
            <li className={Styles.ul}>Meus Projetos</li>
            <li>Sobre Mim</li>
            <li>Minhas Experiências</li>
            <li>Minhas Skills</li>
            <li>Contatos</li>



        </ul>
    </div>
  )
}

export default Nav
