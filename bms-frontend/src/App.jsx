import { Route,Routes } from "react-router-dom"
import Footer from "./components/shared/Footer.jsx"
import Header from "./components/shared/Header.jsx"
import Home from "./pages/home.jsx"
import Movies from "./pages/movies.jsx"

function App() {

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header/>
        <main className="grow">         
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/profile/:id" element={<h1>Profile Page</h1>} />
            <Route path="/movies" element={<Movies/>} />
          </Routes>
        </main>
       <Footer/>
      </div>
    </>
  )
}

export default App;

