export const setStyle = (def,style=[],add=true) => {
    if(!Array.isArray(style)){
        return add ? `${def} ${style}`: style
    }
    return add ? [def, ...style].join(' ') : style.join(' ')
}

/* setStyle props :
def : string - default value
style :string || string[] -  will be return as a string
add: boolean - returned string, will be fill 'def + style' or "style"

*/

export const fixPhone = (string)=>{
  const test = /\+\d{12}/
  if(!test.test(string)){
   string = '+' + string
  }
return  string.replace(/((.){3})((.){3})/,"$1($3)")
}

 const verifyImagenWH = (imagen) => {
return new Promise((resolve)=>{
  const imgElem = new Image()
  imgElem.src = URL.createObjectURL(imagen)
  imgElem.onload =()=>{
    URL.revokeObjectURL(imagen)
     if(imgElem.width < 70 || imgElem.height < 70){
     return resolve(false)
     }
     return resolve(true)
  }
})
}

export const verify = (key,string) => {
  let throu = true
  let errValue = ''
const emailPattern = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/

if(key === 'email'){
  const match = emailPattern.test(string)
  if(!match){
    errValue = 'Invalid email'
    throu = false
  }
}
if(key === 'name'){
  if(string.length < 2){
    errValue = 'Name to small'
    throu = false
  }
  if(string.length > 60){
    errValue = 'Name to big'
    throu = false
  }
}
if(key === 'phone'){
  const phonePattern = /(38)(.){10}/

  if(string.length < 12 || !phonePattern.test(string)){
    errValue = 'Invalid phone number'
    throu = false
  }

}
if(key === 'position'){
  if(!string){
    errValue = 'Chuse your position'
    throu =false
  }
}
return {
  verify:throu,
  value:errValue
}
}

export const photoVerify = async (obj) =>{
  let throu = true
  let errValue = ''
  const imagen = obj.value
  if(!imagen){
    return {value:'Upload photo',verify:false}
  }
    if(imagen.type !== "image/jpeg"){
     return {veryfy: false,
     value: 'The photo format must be jpeg/jpg type.'}
    }
    const widthAndheihth = await verifyImagenWH(imagen)
   if(!widthAndheihth){
    throu = false
    errValue = 'Minimum size of photo must be 70 X 70.'
 
   }
    if(imagen.size > 5e+6){
       throu = false
       errValue = 'Photo must be less then 5MB.'
     
    }
    return {
      verify:throu,
      value:errValue
    }
}