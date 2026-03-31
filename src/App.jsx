import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Component/Banner/Banner'
import Card from './Component/Card/Card'
import Footer from './Component/Footer/Footer'
import GetSteps from './Component/GetSteps/GetSteps'
import NavBar from './Component/NavBar/NavBar'
import PricingCard from './Component/PricingCard/PricingCard'
import Rating from './Component/Rating/Rating'
import Workflow from './Component/Workflow/Workflow'


const fetchCard = async () => {
  const res = await fetch("/DataCard.json")
  return res.json()
}

function App() {
  const [cart, setCart] = useState([])

  const addToCard = (product) => {
    setCart(prev => [...prev, product])
  }

  const cardPromise = fetchCard()

  return (
    <>
      <NavBar cartCount={cart.length} />
      <Banner />
      <Rating />

      <Suspense fallback={
        <div className="flex justify-center items-center h-64">
          <span className="loading loading-spinner loading-xl"></span>
        </div>
      }>
        <Card 
          cardPromise={cardPromise} 
          addToCard={addToCard} 
          cartselected={cart} 
          setCartselected={setCart} 
        />
      </Suspense>

      <GetSteps />
      <PricingCard />
      <Workflow />
      <Footer />
    </>
  )
}

export default App
