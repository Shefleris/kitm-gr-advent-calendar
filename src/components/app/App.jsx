import './App.css'
import Cards from '../cards/Cards'
import Header from '../header/Header.jsx'
import Footer from '../footer/Footer.jsx'
import { useGlobalContext } from '../../context/Context.jsx'

function App() {
  const {themeState} = useGlobalContext(); 
  return (
    <>
      <div className={`body bg-light ${themeState === "light-mode" ? "light-mode" : "dark-mode" }`}>
        <Header/>
        <main className="container py-4">
          <Cards/>
        </main>
        <Footer/>
      </div>
    </>
  )
}

export default App
