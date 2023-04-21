import Canvas from "./canvas/index"
import Customizer from "./pages/Customizer"
import Home from "./pages/Home"

function App() {
  return (
    <main className="app transition-all ease-in">
      <Canvas />
      <Customizer />
      <Home />
    </main>
  )
}

export default App
