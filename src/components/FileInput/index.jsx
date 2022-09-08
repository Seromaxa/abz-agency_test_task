import { useState } from "react";
import MyInput from "../../UI/MyInput";
import styles from "./fileInput.module.scss"


const FileInput = ({onChange,onFocus, warning,filed}) =>{
    const [focused,setFocused] = useState(false)
    
  
   const focusHandler = (ev)=>{
    onFocus(ev)
    setFocused(true)
   }
   const blureHandler = () =>{
    setFocused(false)
   }

    return (
        <MyInput
         after={{
            cssClass:[styles.file_input_lable, warning.show?styles.error:null,],
            add:false,
            content:filed
        }
    }
            
         input={{
            options:{type:'file',
            accept: '.jpg,.jpeg',
            name:'photo',
            onChange:onChange,
             onFocus:focusHandler,
             onBlur:blureHandler
        },
            cssClass:[styles.file_input,focused || filed ? styles.action:null], add:false}}
          warning={{...warning,cssClass:styles.error
        }}/>
    )
}


export default FileInput

