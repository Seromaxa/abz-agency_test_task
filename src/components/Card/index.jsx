import { useState,useEffect } from 'react'
import { fixPhone } from '../../utilts'
import styles from './card.module.scss'
import avatar from '../../assets/imagens/photo-cover.svg'


const Card = ({obj}) => {
    const [elipsis, setElipsis] = useState({name:false,email:false})

    useEffect(()=>{
    const {name,email} = obj
    if(name.length >= 26){
        setElipsis(prev=>({
            ...prev,
            name:true
        }))
    if(email.length >=26){
        setElipsis(prev=>({
            ...prev,
            email:true
        }))
    }    
    }
    },[obj])

    return (
        <div className={styles.card_wrapper} >
            <div className={styles.wrapper_imagen} >
                <img src={obj.photo ? obj.photo : avatar} alt={`avanar `} className={styles.avatar} />
            </div>
            <div className={styles.tooltip_wrapper}>
            <p  className={elipsis.name? styles.text_elipsis:null}>{obj.name} </p>
            {elipsis.name?<span className={styles.tooltip}>{obj.name}</span>:null}
            </div>
            <div className={styles.info_wrapper}>
                <p> {obj.position} </p>
                <div className={styles.tooltip_wrapper}>
                <p   className={elipsis.email? styles.text_elipsis:null}>{obj.email}</p>
                {elipsis.email?<span className={styles.tooltip}>{obj.email}</span>:null}
                </div>
                <p>{fixPhone(obj.phone)}</p>

            </div>
        </div>
    )
}

export default Card