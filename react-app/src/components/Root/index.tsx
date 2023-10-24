import { Outlet } from 'react-router-dom'
import Header from '../Header'
import Navbar from '../Navbar'

const Root = () => (
  <>
    <Header title="BLOG" subtitle="Inovação e Tecnologia" />
    <Navbar />
    <Outlet />
  </>
)

export default Root
