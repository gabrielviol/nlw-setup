import './styles/global.css'

import { Habit } from './components/Habit'

function App() {
  return (
    <div>
      <Habit completed={3}></Habit>
      <Habit completed={5}></Habit>
      <Habit completed={8}></Habit>
    </div>
  )
}

export default App
