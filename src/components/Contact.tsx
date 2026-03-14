
import Section from "./Section";


const socialLinks = [
  {
    href: "https://github.com/harshkumar-2005",
    label: "GitHub",
    logo: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="mr-2" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.58 2 12.18c0 4.48 2.87 8.29 6.84 9.64.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.36-3.37-1.36-.45-1.17-1.1-1.48-1.1-1.48-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.65.35-1.11.63-1.37-2.22-.26-4.56-1.13-4.56-5.01 0-1.11.38-2.02 1-2.73-.1-.26-.44-1.31.1-2.73 0 0 .83-.27 2.73 1.03A9.4 9.4 0 0 1 12 7.07c.84.004 1.69.11 2.48.32 1.9-1.3 2.73-1.03 2.73-1.03.54 1.42.2 2.47.1 2.73.62.71 1 1.62 1 2.73 0 3.89-2.34 4.75-4.57 5.01.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.02 10.02 0 0 0 22 12.18C22 6.58 17.52 2 12 2z" fill="#fff"/>
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/in/harshkumar-thakur/",
    label: "LinkedIn",
    logo: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="mr-2" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM7.12 20H3.56V9h3.56v11zM5.34 7.5c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zm14.66 12.5h-3.56v-5.5c0-1.31-.03-3-1.83-3-1.83 0-2.11 1.43-2.11 2.91v5.59h-3.56V9h3.42v1.51h.05c.48-.91 1.65-1.87 3.39-1.87 3.63 0 4.3 2.39 4.3 5.49v6.87z" fill="#fff"/>
      </svg>
    ),
  },
  {
    href: "mailto:kuhawork@gmail.com",
    label: "Email",
    logo: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="mr-2" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm-16 12V8.99l8 6.99 8-6.99V18H4z" fill="#fff"/>
      </svg>
    ),
  },
];

const Contact = () => (
  <Section id="contact" title="Contact Me">
    <div className="mt-8 flex flex-wrap gap-8 justify-center">
      {socialLinks.map(({ href, label, logo }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 rounded-full shadow-lg text-white font-semibold text-lg hover:scale-105 transition-transform"
        >
          {logo}
          {label}
        </a>
      ))}
    </div>
  </Section>
);

export default Contact;
