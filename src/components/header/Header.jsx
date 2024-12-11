import { useGlobalContext } from "../../context/Context";

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
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="m-0">Welcome to the 2024 Advantage Christmas Advent Calendar!</h1>
        <button
          id="darkModeToggle"
          className= {`btn ${themeState === "light-mode" ? "btn-outline-dark" : "btn-outline-light" }`}
          type="button"
          onClick={handleTheme}
        >
          {`${themeState === "light-mode" ? "Enable Dark Mode" : "Enable Light Mode"}`}
        </button>
      </div>
      <p className="lead">Open a door each day and you could win a fantastic prize from one of our business partners. Good luck!</p>
    </header>
  )
}

export default Header;