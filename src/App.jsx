import assets from './assets/cars.json'
import Cars from './components/Cars'
import cars from './assets/cars.json'
import './App.css'

function App() {
  


  return (
   <div className='card-wrapper'>
    <Card cars={cars}/>
   </div>
  )
}

export default App
