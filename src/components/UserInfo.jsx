import MyInput from "../UI/MyInput";
import styles from '../UI/MyInput/input.module.scss'


const UserInfo = ({user,onChange,onFocus,onBlur }) =>{
    return (
        <>
        {user?Object.keys(user).map(item=>{
        return(
            <MyInput key={item} 
            mask={item === 'phone'?{add:true,text:'+##(###) ###-##-##'}:null}
            after={{content:item === 'name'? 'Your name':item,
            cssClass:[user[item].error?styles.error:null]}}
            warning = {{show:item === 'phone'? true:user[item].error?true:false,
            content: item === 'phone' && !user[item].error ? '+380(XX) XXX-XX-XX': user[item].error ? user[item].error : null,
             cssClass:[user[item].error?styles.error:null]  }}
            input={{options:{
                value:user[item].value,
                name:item,
                onChange: onChange,
                onBlur:onBlur,
                onFocus:onFocus,
                maxLength:item === 'phone' ? 18 : null,
                type:item === 'phone'?'tel':'text',
                // pattern:item === 'phone'?'^[\+]{0,1}380([0-9]{9})$':null
            },
            cssClass:[user[item].error ?styles.error:null],
        }
    }/>
        )
      }):null}
        </>
    )
}

export default UserInfo