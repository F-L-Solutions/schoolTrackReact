import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar'
import SelectKid from '../components/SelectKid'

const MainLayout = () => {
  return (
    <>
      <Navbar/>
      <SelectKid/>
      <Outlet/>
    </>
  )
}

export default MainLayout
