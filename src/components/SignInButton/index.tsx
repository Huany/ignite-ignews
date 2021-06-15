import {FaGithub} from 'react-icons/fa'
import {FiX} from 'react-icons/fi'
import { signIn , useSession} from 'next-auth/client'

import styles from './styles.module.scss'


export function SignInButton(){

    const [ session ] = useSession();

    console.log(session);

    return session ? (
        <button 
            type="button"
            className={styles.signInButton}
            onClick={() => signIn('github')}
        >
            <FaGithub color="#04d361"/>  
            Huany Dourado
            <FiX color="#737380" className={styles.closeIcon}/>
        </button>
    ) : (
        <button 
            type="button"
            className={styles.signInButton}
        >
            <FaGithub color="#eba417"/>  
            Sing in with GitHub
        </button>

    )
}