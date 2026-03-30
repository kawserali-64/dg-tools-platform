import './App.css'
import Banner from './Component/Banner/Banner'
import Footer from './Component/Footer/Footer'
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
      <PricingCard></PricingCard>
      <Workflow></Workflow>
      <Footer></Footer>

    </>
  )
}

export default App
