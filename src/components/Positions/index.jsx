import React from "react";
import {useGetPositionsQuery} from "../../api/getPositions"
import MyInput from "../../UI/MyInput";
import Spiner from "../../UI/Spiner";
import styles from './radio.module.scss'

const Positions = ({onChange,errorState}) => {
    const {data,isSuccess,isLoading,error} = useGetPositionsQuery()
 
    
    return (
      <>
       <p className={styles.header}>Select your position</p>
      <div onChange={onChange} className={styles.root_wrapper}>
      {isLoading ? <Spiner/>: null}
      {isSuccess ? data.positions.map(item=>{
        return <MyInput key={`${item.id}${item.name}`}
         input={{
          options:{
            value:item.id,
            type:'radio',
            name:'position',
          },
          add:false,
          cssClass:[styles.radio_input],
        } 
    }   
    wrapper={{
        add:false,
        cssClass:[styles.radio_wrapper]
    }}
    after={{
        add:false,
        cssClass:[styles.radio_label,errorState?styles.error:null],
        content:item.name
    }}
    />
      }):null}

      {errorState?<span className={styles.error}>{errorState}</span>:null}
      {error?<span className={styles.error}>{error.data.message}</span>:null}
      </div>
      </>
    )
}

export default Positions