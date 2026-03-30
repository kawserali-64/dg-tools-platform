import './App.css'
import Banner from './Component/Banner/Banner'
import Footer from './Component/Footer/Footer'
import GetSteps from './Component/GetSteps/GetSteps'
import NavBar from './Component/NavBar/NavBar'
import PricingCard from './Component/PricingCard/PricingCard'
import Rating from './Component/Rating/Rating'
import Workflow from './Component/Workflow/Workflow'

function App() {

  return (
    <>
      
      <NavBar></NavBar>
      <Banner></Banner>
      <Rating></Rating>
      <GetSteps></GetSteps>
      <PricingCard></PricingCard>
      <Workflow></Workflow>
      <Footer></Footer>

    </>
  )
}

export default App
