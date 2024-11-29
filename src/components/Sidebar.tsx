import { Link } from "react-router"

const Sidebar = () => {
  return (
    <>
      <div className="inner">
        <nav>
          <ul>
            <li><Link to="/">Welcome</Link></li>
            <li><Link to="/match">Match</Link></li>
            <li><Link to="/stat">Stat</Link></li>
            <li><Link to="/contact">Contact</Link></li>

          </ul>
        </nav>
      </div></>
  )
}

export default Sidebar