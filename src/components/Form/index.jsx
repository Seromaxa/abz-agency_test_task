import UserInfo from "../UserInfo";
import Positions from "../Positions";
import FileInput from "../FileInput";
import MyButton from "../../UI/Mybutton";
import SuccessBaner from "../SuccessBamer";
import { FORM_ID,SING_UP } from "../../utilts/texts";
import { useSubmit } from "../../hooks/useSingUp";
import styles from './form.module.scss'



const Form = () => {
const {user,photo,position,disable,changeHandler,focusHandler,checkedHandler,photoHandler,submitHandler,isSuccess} = useSubmit()
return (
  <section className={styles.main_section_form} >
  <h1>{!isSuccess? 'Working whith POST request':'User successfully registered'}</h1>
    {!isSuccess?<form id={FORM_ID} onSubmit={submitHandler}  className={styles.form_width} >
     <UserInfo user={user} onChange={changeHandler} onFocus={focusHandler}  />
     <Positions onChange={checkedHandler} errorState={position.error}/>
     <FileInput filed={photo.path} onChange={photoHandler} onFocus={focusHandler} warning={{
      show: photo.error ? true :false,
      content:photo.error
     }} />
     <MyButton type='submit' text={SING_UP} disabled={disable === 5?false:true }/>
    </form>:
    <div className={styles.img_wrapper}><SuccessBaner /></div>
  }
    </section>
)



}

  export default Form