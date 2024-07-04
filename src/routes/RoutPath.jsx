
import {Route,Routes} from 'react-router-dom'
import Home from '../home/Home'
import AboutUs from '../about/AboutUs'
import Services from '../services/Services'
import Login from '../login/Login'

export default function RoutePath() {
  return (
    <div className='d-flex justify-content-center'>
      {/* We need to define path for routing element */}
      <Routes>
        {/* We define path and routing in route element */}
        <Route path ="/login" element ={<Login/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/services" element={<Services/>}/>
      </Routes>
    </div>
  )
}
