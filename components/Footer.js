import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <p>
          In the meantime, find out more about me<a href="/Nikita_Nekrasov_Resume.pdf" alt="Nikita Nekrasov's Resume" className={styles.resume}>here.</a>
        </p>
      </footer>
    </>
  )
}
