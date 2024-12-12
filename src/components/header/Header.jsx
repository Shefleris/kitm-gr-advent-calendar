import { useGlobalContext } from "../../context/Context";
import Counter from "../counter/Counter";

const Header = () => {
  const {themeState, handleTheme} = useGlobalContext();      
    // const toggleTheme = () => {
    //   const body = document.body;
    //   const isDarkMode = body.classList.contains("dark-mode");

    //   // Toggle light and dark mode
    //   body.classList.toggle("dark-mode", !isDarkMode);
    //   body.classList.toggle("light-mode", isDarkMode);


    // }
  return (
    <header className={`header text-center py-4 ${themeState === "dark-mode" ? "dark-mode" : "" }`}>
      <div className="container d-flex flex-column flex-md-row justify-content-around align-items-center">
        <div class="text-content">
          <h1 className="m-0 mb-3">Welcome to the 2024 Advantage Christmas Advent Calendar!</h1>
          <p className="lead mb-4">Open a door each day and you could win a fantastic prize from one of our business partners. Good luck!</p>
          <Counter/>
        </div>
        <button
          id="darkModeToggle"
          className= {`btn ${themeState === "light-mode" ? "btn-outline-dark" : "btn-outline-light" } mx-2`}
          type="button"
          onClick={handleTheme}
        >
          {`${themeState === "light-mode" ? "Enable Dark Mode" : "Enable Light Mode"}`}
        </button>
      </div>
    </header>
  )
}

export default Header;