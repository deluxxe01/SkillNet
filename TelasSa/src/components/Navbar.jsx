import { Link } from "react-router-dom"
import './Navbar.css'
function Navbar() {
  return (
    <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/Port">Portifólio</Link>
        <Link to="/Teste">Testes</Link>
    </nav>
  )
}

export default Navbar
