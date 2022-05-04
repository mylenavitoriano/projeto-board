import Head from 'next/head'
import styles from '../styles/styles.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Board - Organizando suas tarefas</title>
      </Head>
      <main className={styles.contentContainer}>
        <img src="/images/board-user.svg" alt="Ferramenta Board"/>

        <section className={styles.callToAction}>
          <h1>Uma ferramenta para seu dia a dia escreva, planeje e organize-se</h1>
          <p>
            <span>100% Gratuita</span> e online  
          </p>
        </section>

        <div className={styles.donaters}>
          <img src="https://avatars.githubusercontent.com/u/71454293?v=4" alt="Usuário 1" />
        </div>
      </main>
    </>
  )
}
