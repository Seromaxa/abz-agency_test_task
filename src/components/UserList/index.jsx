import { useState } from 'react'
import { useSelector,  useDispatch} from 'react-redux'
import { setPage,getPage } from '../../app/redusers/token'
import { useUserListQuery } from '../../api/getUsers'
import MyButton from '../../UI/Mybutton'
import Spiner from '../../UI/Spiner'
import Card from '../Card'
import {USER_LIST_ID} from '../../utilts/texts'
import styles from './list.module.scss'



const UserList = () =>{
const page = useSelector(getPage)

const dispatch = useDispatch()
const {data,isLoading,isError,error} = useUserListQuery(page)
const clickHandler = () =>{
    dispatch(setPage(data.page + 1))
}
return (
    <section className={styles.main_section} id={USER_LIST_ID}>
        <h1>Working with GET request</h1>   
    <ul className={styles.user_list} >
    {isLoading ? <Spiner /> : null}
    {isError ? <div className='response_error'>{error.data.message}</div>:null}
    {data?.users ? data.users.map(item=>{
        return (
           <li key={item.id}> <Card obj={item} /></li>
        )
    }):null}
    </ul>
    
    <MyButton onClick={clickHandler} cssClass={[styles.button_width, !data?.show_button?styles.hide_button:null].join(' ')} text='Show more'/>

    </section>
)
}

export default UserList