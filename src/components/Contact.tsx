import { Mail } from 'lucide-react'

function Contact() {
  return (
    <section className="contact" aria-labelledby="contact-heading">
      <h2 id="contact-heading">Feel free to reach out!</h2>

      <div className="contact-links">
        <a
          href="https://github.com/BitPingu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 .1.76 2.15 3.72 2.15.86 0 1.55-.29 2.08-.76.09-.71.35-1.2.63-1.48-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.42.11-2.95 0 0 .95-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.1-1.45 3.04-1.15 3.04-1.15.61 1.53.23 2.67.12 2.95.72.78 1.15 1.78 1.15 3 0 4.3-2.61 5.25-5.1 5.53.4.34.75 1 .75 2.02v2.67c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
          </svg>
          GitHub ↗
        </a>

        <a
          href="https://www.linkedin.com/in/gavin-eugenio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.5H4.96V9h2.97v9.5ZM6.45 7.7a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12.05 10.8h-2.97v-4.62c0-1.1-.02-2.52-1.54-2.52-1.54 0-1.78 1.2-1.78 2.44v4.7H9.24V9h2.85v1.3h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.55v5.19Z" />
          </svg>
          LinkedIn ↗
        </a>

        <a href="mailto:gavin.eugenio@gmail.com">
          <Mail size={15} strokeWidth={1.7} aria-hidden="true" />
          Email ↗
        </a>
      </div>
    </section>
  )
}

export default Contact
