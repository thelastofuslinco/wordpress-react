import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={'/'}>Your Name</Link>
        </li>
        <li>
          <Link to={'/artigo'}>Your Friend</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
