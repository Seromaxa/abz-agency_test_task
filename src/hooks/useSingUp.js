import { useState } from "react";
import { useSinUpMutation } from "../api/singUp";
import { photoVerify,verify } from "../utilts";


export const useSubmit = ()=>{

const [user,setUser] = useState({name:{value:'',error:''},email:{value:'',error:''},phone:{value:'',error:''}})
const [position,setPosition] = useState({value:'',error:''})
const [photo,setPhoto] = useState({value:null,error:'',path:''})
const [disable,setDisablet] =useState(0)
const [singUp,{isSuccess}] = useSinUpMutation()
const [focused,setFocused]=useState([])


const changeHandler = (ev) => {
    const {name , value} = ev.target
    setUser(prev=>({
        ...prev,
        [name]:{...prev[name],value:value,error:''},
        
    }))
}
const focusHandler = (ev) => {
    const {name} = ev.target   
    if(focused.find(item=>item === name)) {
        return
    }  
    if(name === 'phone')
    setUser(prev=>({
        ...prev,
        [name]:{...prev[name],value:prev[name].value?prev[name].value:'380'}
    }))
  setDisablet(prev=>prev + 1)
  setFocused(prev=>([
    ...prev,
    name
  ]))
}


const checkedHandler = (ev) =>{
    setPosition(prev=>({
        ...prev,
       value:ev.target.value,
       error:''
    }))
    if(focused.find(item => item === ev.target.name)){
        return
    }
    setDisablet(prev=>prev + 1)
    setFocused(prev=>([
        ...prev,
        ev.target.name
    ]))
}
const photoHandler = (ev) =>{
   const imagen = ev.target.files[0]
           setPhoto(prev=>({
            ...prev,
            value:imagen,
            error:'',
            path:ev.target.value
           
        }))

                    
}
const submitHandler = async (ev)=>{
    ev.preventDefault() 
    let errorCounter = 5
  for(let key in user){
    let verifyUser = verify(key,user[key].value)
    if(!verifyUser.verify){
        setUser(prev=>({
            ...prev,
            [key]:{...prev[key],error:verifyUser.value}
        }))
        setFocused(prev=>prev.filter(item=>item !== key))
        setDisablet(prev=>prev -1)
        errorCounter -=1
    }
  }
const verifyPosition = verify('position',position.value)
if(!verifyPosition.verify){
    setPosition(prev=>({
        ...prev,
        error:verifyPosition.value
    }))
    setDisablet(prev=>prev - 1)
    setFocused(prev=>prev.filter(item=>item !=='position'))
    errorCounter -=1
}
const currentPhoto = await photoVerify(photo)
if(!currentPhoto.verify){
    setPhoto(prev=>({
        ...prev,
        error:currentPhoto.value
    }))
    setDisablet(prev => prev - 1)
    setFocused(prev=>prev.filter(item=>item !== 'photo'))
    errorCounter -=1
}
if(errorCounter < 5){
   return
}
const body = new FormData()
   for(let key in user){
    body.append(key,key === 'phone'? '+' + user[key].value : user[key].value)
   }
   body.append('position_id',position.value)
   body.append('photo',photo.value)
   singUp(body)
   setDisablet(0)
}

return {user,photo,position,disable,changeHandler,focusHandler,checkedHandler,photoHandler,submitHandler,isSuccess}
}