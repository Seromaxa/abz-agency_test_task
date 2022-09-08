import Form from '../Form'
import Baner from '../Baner'
import UserList from '../UserList'
import styles from './main.module.scss'

const Main = () =>{
    return (
        <main className={styles.main}>
           
               <Baner />
               <UserList />              
               <Form />
         
        </main>
    )
}

export default Main