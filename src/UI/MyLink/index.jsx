import styles from './link.module.scss';


const MyLink = ({href,text}) =>{
    return(
        <a href={href} className={styles.link} > {text} </a>
    )
}

export default MyLink