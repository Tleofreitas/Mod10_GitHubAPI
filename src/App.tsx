import { BrowserRouter, Route, Routes } from "react-router-dom"
import Before from "./routes/Before"
import After from "./routes/Before/After"
import Home from "./routes/Home"
import HomeBody from "./routes/HomeBody"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route index element={<HomeBody />} />
          <Route path="before" element={<Before />} >
            <Route path=":userLogin" element={<After />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
