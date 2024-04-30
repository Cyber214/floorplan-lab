import './App.css'
import Kitchen from './Kitchen'
import LivingRoom from './LivingRoom'
import Bath from './Bath'
import BedRoom from './BedRoom'

function App() {

  return (
    <>
      <Kitchen />
      <LivingRoom />
      <Bath size="Full" />
      <Bath size="Half" />
      <BedRoom bedNum={1} />
      <BedRoom bedNum={2} />
      <BedRoom bedNum={3} />
    </>
  )
}

export default App
