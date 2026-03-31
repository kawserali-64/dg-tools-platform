import { Suspense } from 'react'
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
  const cardPromise = fetchCard()
  return (
    <>

      <NavBar></NavBar>
      <Banner></Banner>
      <Rating></Rating>

      <Suspense fallback={<div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-xl"></span>
      </div>}
      >
        <Card cardPromise={cardPromise}></Card>
      </Suspense>

      <GetSteps></GetSteps>
      <PricingCard></PricingCard>
      <Workflow></Workflow>
      <Footer></Footer>

    </>
  )
}

export default App
