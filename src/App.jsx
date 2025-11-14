import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Edit from "./pages/Edit"
import Create from "./pages/Create"
import Header from "./components/Header"
 
function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
      </Routes>
    </div>
  )
}

export default App