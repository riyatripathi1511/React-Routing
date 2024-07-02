import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div className='homeContainer'>
      <h2>This is my Home Page</h2>
     <Link className='mx-2' to={"/aboutus"}>About Us</Link>
     <Link to={"/services"}>Services</Link>
    </div>
  )
}
