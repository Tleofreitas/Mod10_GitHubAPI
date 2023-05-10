import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./routes/Home"
import HomeBody from "./routes/HomeBody"
import Before from "./routes/Before"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route index element={<HomeBody />} />
          <Route path="before" element={<Before />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
