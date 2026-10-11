import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

function Layout() {
  const moveSpotlight = (event) => {
    event.currentTarget.style.setProperty('--light-x', `${event.clientX}px`)
    event.currentTarget.style.setProperty('--light-y', `${event.clientY}px`)
  }

  return (
    <div className="site-shell" onPointerMove={moveSpotlight}>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default Layout
