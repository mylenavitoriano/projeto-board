import { signIn, signOut, useSession } from 'next-auth/react'

import styles from './styles.module.scss'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

export function SignInButton(){
    const {data:session} = useSession()

    console.log(session)

    return session ? (
        <button 
        type="button" 
        className={styles.signInButton}
        onClick={() => signOut()}>
            <img src="https://avatars.githubusercontent.com/u/71454293?v=4" alt="Foto do usuário"/>
            Olá Mylena
            <FiX color="#737380" className={styles.closeIcon}/>
        </button>
    ) : (
        <button 
        type="button" 
        className={styles.signInButton}
        onClick={() => signIn()}>
            <FaGithub color="#FFB800"/>
            Entrar com Github
        </button>
    )
}