import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ExploreYourJourney from './components/HomePage/ExploreYourJourney'
import CardsSection from './components/HomePage/CardsSection'
import HowItWorks from './components/HomePage/HowItWorks'
import Registration from './components/HomePage/Registration'
import Footer from './components/HomePage/Footer'
import Carousel from './components/HomePage/Carousel'

const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/contact'
          element={<div className='text-5xl text-red-500'>NESTO</div>}
        />
        <Route
          path='/'
          element={
            <>
              <HomePage />
              <ExploreYourJourney />
              <CardsSection />
              <HowItWorks />
              <Registration />
              {/* <Carousel /> */}
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default RouterComponent
