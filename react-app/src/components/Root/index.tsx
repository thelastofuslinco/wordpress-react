import { Outlet } from 'react-router-dom'
import Header from '../Header'

const Root = () => (
  <>
    <Header title="BLOG" subtitle="Inovação e Tecnologia" />
    <Outlet />
  </>
)

export default Root
