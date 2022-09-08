import MyLink from '../../UI/MyLink';
import logo from '../../assets/imagens/Logo.svg'
import { FORM_ID,USER_LIST_ID,SING_UP,USERS } from "../../utilts/texts";
import styles from './header.module.scss'

const Header = ()=>{
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
       <div className={styles.logo_wrapper}><img src={logo} alt='abz agency'/></div>
       <nav className={styles.navigation}>
        <MyLink href={`#${USER_LIST_ID}`} text={USERS} />
        <MyLink  href={`#${FORM_ID}`} text={SING_UP} />
       </nav>
       </div>
        </header>
    )
}

export default Header