
import {Route,Routes} from 'react-router-dom'
import Home from '../home/Home'
import AboutUs from '../about/AboutUs'
import Services from '../services/Services'

export default function RoutePath() {
  return (
    <div>
      {/* We need to define path for routing element */}
      <Routes>
        {/* We define path and routing in route element */}
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/services" element={<Services/>}/>
      </Routes>
    </div>
  )
}
