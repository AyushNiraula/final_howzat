import { Route, Routes } from "react-router"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Match from "./components/Match"
import Sidebar from "./components/Sidebar"
import Stat from "./components/Stat"
import './assets/css/main.css'
import './assets/css/custom.css'

function App() {

  return (
    <>
      <div className="is-preload">
        <section id="sidebar">
          <Sidebar />
        </section>

        <div id="wrapper">

          <Routes>
            <Route path="/" element={<Hero />}></Route>
            <Route path="/match" element={<Match />}></Route>
            <Route path="/stat" element={<Stat />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>

        </div>

        <footer id="footer" className="wrapper style1-alt">
          <Footer />
        </footer>
      </div>
    </>
  )
}

export default App
