import './App.css'
import Cards from '../cards/Cards'
import Header from '../header/Header.jsx'
import Footer from '../footer/Footer.jsx'

function App() {
  return (
    <>
      <Header/>
      <main className="container py-4">
        <Cards/>
      </main>
      <Footer/>
    </>
  )
}

export default App
