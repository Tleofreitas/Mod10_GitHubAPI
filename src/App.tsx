import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./routes/Home"
import Before from "./routes/Before"
import After from "./routes/After"
import HomeBody from "./routes/HomeBody"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route index element={<HomeBody />} />
          <Route path="before" element={<Before />} />
          <Route path="after" element={<After />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
