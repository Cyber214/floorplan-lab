import './App.css'
import Kitchen from './Kitchen'
import LivingRoom from './LivingRoom'
import Bath from './Bath'

function App() {

  return (
    <>
      <Kitchen />
      <LivingRoom />
      <Bath size="Full" />
      <Bath size="Half" />
    </>
  )
}

export default App
