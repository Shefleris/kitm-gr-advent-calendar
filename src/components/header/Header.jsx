const Header = () => {
      
    const toggleTheme = () => {
      const body = document.body;
      const header = document.querySelector(".header");
      const footer = document.querySelector(".footer");
      const calendarBoxes = document.querySelectorAll(".calendar-box"); // Select all calendar boxes
      const isDarkMode = body.classList.contains("dark-mode");
      const toggleButton = document.getElementById("darkModeToggle");

      // Toggle light and dark mode
      body.classList.toggle("dark-mode", !isDarkMode);
      body.classList.toggle("light-mode", isDarkMode);

      // header and footer
      header.classList.toggle("dark-mode", !isDarkMode);
      footer.classList.toggle("dark-mode", !isDarkMode);

      // calendar boxes
      calendarBoxes.forEach((box) => {
        box.classList.toggle("dark-mode", !isDarkMode);
      });

      // button text
      toggleButton.textContent = isDarkMode
        ? "Enable Dark Mode"
        : "Enable Light Mode";

      // button style
      toggleButton.classList.toggle("btn-outline-dark", isDarkMode);
      toggleButton.classList.toggle("btn-outline-light", !isDarkMode);
    }
  return (
    <header className="header text-center py-4">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="m-0">Welcome to the 2024 Advantage Christmas Advent Calendar!</h1>
        <button
          id="darkModeToggle"
          className="btn btn-outline-dark"
          type="button"
          onClick={toggleTheme}
        >
          Enable Dark Mode
        </button>
      </div>
      <p className="lead">Open a door each day and you could win a fantastic prize from one of our business partners. Good luck!</p>
    </header>
  )
}

export default Header;