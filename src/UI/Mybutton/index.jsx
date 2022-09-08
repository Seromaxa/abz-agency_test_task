import style from './button.module.scss'
import {setStyle} from '../../utilts/index'

const MyButton = ({cssClass,add,type,disabled,text,onClick})=>{

    return (
        <div className={style.wrapper_button}>
        <button className={cssClass?setStyle(style.button,cssClass,add):style.button} type={type} disabled={disabled} onClick={onClick}  >
            {text}
        </button>
        </div>
       )
}

export default MyButton