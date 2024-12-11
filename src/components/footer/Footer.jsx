import { useGlobalContext } from "../../context/Context";

const Footer = () => {
    const {themeState} = useGlobalContext()
  return (
    <footer className={`footer py-3 d-flex flex-column flex-lg-row justify-content-evenly align-items-center ${themeState === "dark-mode" ? "dark-mode" : "" }`}>
        <img src="/src/img/advantage_travel.png" alt="Logo" className="footer-logo" />
        <a href="#" className="link">
          <i className="fa-solid fa-computer"></i>www.advantagemembers.com
        </a>
        <div className="social-icons d-flex gap-3">
          <a href="#" className="me-2">
            <i className="fa-brands fa-facebook me-1"></i> Facebook
          </a>
          <a href="#" className="me-2">
            <i className="fa-brands fa-instagram me-1"></i> Instagram
          </a>
          <a href="#" className="me-2">
            <i className="fa-brands fa-twitter me-1"></i> Twitter
          </a>
          <a href="#" className="me-2">
            <i className="fa-brands fa-linkedin me-1"></i> Linkedin
          </a>
        </div>
    </footer>
  );
};

export default Footer;
