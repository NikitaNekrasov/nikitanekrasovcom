import styles from './ContactForm.module.css'
export default function ContactForm() {
    return (
        <div className={styles.grid}>
            <div className={styles.card}>
                <form name="contact" method="POST" action="/?success=true" data-netlify="true">
                    <input type="hidden" name="form-name" value="contact" />
                    <p>
                        <label htmlFor="name">Your Name:</label>
                        <input type="text" id="name" name="name" />
                    </p>
                    <p>
                        <label htmlFor="email">Your Email:</label>
                        <input type="text" id="email" name="email" />
                    </p>
                    <p>
                        <label htmlFor="message">What would you like to talk about?</label>
                        <textarea id="message" name="message"></textarea>
                    </p>
                    <p>
                        <button type="submit"><span>Send </span></button>
                    </p>
                </form>
            </div>
        </div>
    )
}