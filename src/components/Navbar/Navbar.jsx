import { useContext } from 'react'
import './Navbar.css'
import { DataContext } from '../../context/DataContext'
import { FaUser } from "react-icons/fa";

const Navbar = () => {
    const {data}=useContext(DataContext)
  return (
    <div className='flex gap-4 justify-between items-center w-full py-1 px-5'>
    <div className="navar-icon">
        <img className='h-full w-full' src={data?.navbar_icon}  alt="navar-icon" />
    </div>
    <div className="user">
    <FaUser />

    </div>
    </div>
  )
}

export default Navbar