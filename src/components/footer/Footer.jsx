import { useGlobalContext } from "../../context/Context";

const Footer = () => {
    const {themeState} = useGlobalContext()
    return (
        <footer className={`footer text-center py-3 d-flex justify-content-evenly align-items-center ${themeState === "dark-mode" ? "dark-mode" : "" }`}>
            <p className="mb-0">© 2024 Advantage Travel</p>
            <a href="#" className="link"><i className="fa-solid fa-computer"></i>www.advantagemembers.com</a>
            <div className="social-icons d-flex gap-3">
                <a href="#" className="me-2"><i className="fa-brands fa-facebook me-1"></i> Facebook</a>
                <a href="#" className="me-2"><i className="fa-brands fa-instagram me-1"></i> Instagram</a>
                <a href="#" className="me-2"><i className="fa-brands fa-twitter me-1"></i> Twitter</a>
                <a href="#" className="me-2"><i className="fa-brands fa-linkedin me-1"></i> Linkedin</a>
            </div>
        </footer>
    )
}

export default Footer;