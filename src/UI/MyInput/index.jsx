import { useId } from "react"
import { setStyle } from "../../utilts"
import styles from './input.module.scss'


const MyInput = ({wrapper,before,after,warning,input,mask}) => {
    const id = useId()
    const maskedChange = (ev) =>{
      const {value} = ev.target
      const clearValue = value.replace(/[^\d]/g,'')
      ev.target.value = clearValue
      input.options.onChange(ev)
    }
    const format = (value,maskText) =>{
         let i = 0
         let lastreplacedIndex = -1
         const fillMasck = maskText.replace(/#/g,(_,j)=>{
            
            if(i >= value.length){
                return '#'
            }
       
            lastreplacedIndex = j
            return value[i++]
         })  
         return fillMasck.substring(0,lastreplacedIndex +1)
    }
    return (
        <div className={wrapper?.cssClass ? setStyle(styles.wrapper,wrapper.cssClass,wrapper.add):styles.wrapper}>
            {before ?<label htmlFor={id} onClick={before.onClick} className={before?.cssClass ? setStyle(styles.label,before.cssClass,before?.add):styles.label}><span>{before?.content}</span></label>:null}

            <input id={id} className={input?.cssClass ? setStyle([styles.input,input.options.value?styles.fill:null].join(' '),input?.cssClass,input?.add):[styles.input,input.options.value?styles.fill:null].join(' ')} {...input?.options} onChange = {mask?.add ? maskedChange : input.options.onChange} value = {mask?.text ? format(input.options.value,mask.text): input.options.value } />

           {after? <label htmlFor={id} onClick={after.onClick} className={after?.cssClass ?
             setStyle(styles.label,after?.cssClass,after?.add)
             :styles.label} ><span>{after?.content}</span></label>:null}


           {warning?.show ? <span className={warning?.cssClass ? setStyle(styles.warning,warning?.cssClass,warning?.add):styles.warning}>{warning.content}</span>: null}
        </div>
    )
}
export default MyInput
/* 
input props:
  mask = {
    add:boolean,
    text: mask exemple
  }

    before?  || after: {
     add:boolean = true - add cssClasses to default styles or rewrite default styles
     content:string
     cssClass: string || string[]
    }

}

warning = {
    show:boolean
    add:boolean = true
    cssClass: string || string[]
    content:string
}
input = {
    add:boolean = true
    cssClass: string || string[]
    options: inputProps
}
*/
