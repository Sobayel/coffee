
import { useLoaderData } from 'react-router-dom';
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <div className='my-8'>
      <h1 className='text-5xl text-purple-600 font-bold flex justify-center'>Coffee Store Client: {coffees.length}</h1>
      <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-4 mt-10'>
      {
        coffees.map(coffee => <CoffeeCard 
          key={coffee._id} 
          coffee={coffee} 
          coffees={coffees} 
          setCoffees={setCoffees}
          ></CoffeeCard>)
      }
      </div>
    </div>
  )
}

export default App
