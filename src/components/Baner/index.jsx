import styles from './baner.module.scss'
import MyLink from '../../UI/MyLink'
import {BANER_TEXT,BANER_HEADER,FORM_ID,SING_UP} from '../../utilts/texts'

const Baner = () => {
    return (
        <div className={styles.wrapper_baner} >
            <div className={styles.wrapper_baner_cover}>
            <div className={styles.info_wrapper}>
                <h1>{BANER_HEADER}</h1>
                <p>{BANER_TEXT}</p>
            </div>
            <MyLink href={`#${FORM_ID}`} text={SING_UP}/>
            </div>
        </div>
    )
}
export default Baner