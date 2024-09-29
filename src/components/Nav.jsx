import { useState,useRef, useEffect } from "react"
import Styles from "./Nav.module.css"
import { TiThMenu } from "react-icons/ti";
import { FaSleigh } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";



const Nav = () => {

    const navRef = useRef();
    const [isMobile,setIsmobile] = useState(window.innerWidth < 900 ? (true):(false));
    const [menuIsOpen, setMenuIsOpen] = useState(false);


    document.addEventListener("scroll", ()=>{
        if(window.scrollY > 0){
            navRef.current.style.backgroundColor = "rgba(0,0,0,0.8)";
        }else{
            navRef.current.style.backgroundColor = menuIsOpen ? "rgba(0,0,0,0)";

        }
    })

    window.addEventListener("resize",()=>{
        if(window.innerWidth < 900){
            setIsmobile(true);
        }else{
            setIsmobile(false);
        }
    });

    useEffect(()=>{
        if(menuIsOpen){
            navRef.current.style.backgroundColor = "rgba(0,0,0,0.8)";
        }else{
            navRef.current.style.backgroundColor = "rgba(0,0,0,0)";

        }
    },[menuIsOpen]);

  return (
    <div className={Styles.nav} ref={navRef}>
        <ul className={isMobile ? Styles.listInMobile : Styles.list}>
            {
                isMobile ? (
                    <>
                    <li onClick={()=>setMenuIsOpen((prev)=>!prev)}>{menuIsOpen ? <IoCloseSharp className={Styles.menuMobile}/> : <TiThMenu className={Styles.menuMobile}/>}</li>  
                    <div className={`${Styles.flexCol} ${menuIsOpen ? (Styles.opened) : (Styles.closed)}`}>
                        <li className={Styles.li}>Meus Projetos</li>
                        <li className={Styles.li}>Sobre Mim</li>
                        <li className={Styles.li}>Minhas Experiências</li>
                        <li className={Styles.li}>Minhas Skills</li>
                        <li>Contatos</li>
                    </div>
                    </>
                ) : (
                    <>
                        <li className={Styles.li}>Meus Projetos</li>
                        <li className={Styles.li}>Sobre Mim</li>
                        <li className={Styles.li}>Minhas Experiências</li>
                        <li className={Styles.li}>Minhas Skills</li>
                        <li>Contatos</li>
                    </>
                )
            }




        </ul>
    </div>
  )
}

export default Nav
