import { Outlet } from "react-router-dom";
import Footer from "./LayOut/Footer/Footer"
import Navbar from "./LayOut/Navbar/Navbar"

function App() {

  return (
    <>
      <Navbar></Navbar>
      <div className="max-w-screen-xl mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
