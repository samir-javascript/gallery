/* eslint-disable react/prop-types */

import avatar from '@/assets/images/image-avatar.png'
import cartIcon from '@/assets/images/icon-cart.svg'
import menu from '@/assets/images/icon-menu.svg'

import logo from '@/assets/images/logo.svg'

import { FaTimes } from 'react-icons/fa';



import ModalComponent from './ModalComponent'

import { useGlobalContext } from '@/mycontext';
const MobileHeader = ({handleCloseMenu, handleOpenMenu , navLinks}) => {
  //const [show, setShow] = useState(false);
 // const handleShow = () => setShow(true);
 const {amount, show, setShow, handleShow} = useGlobalContext()
  return (
    <nav className='sm:hidden flex items-center justify-between py-3 px-4 border-b border-gray-500'>
        <div  className='flex items-center space-x-2'>
          
            <img onClick={handleOpenMenu} width={25} className='mr-3' src={menu} alt="menu" />
            <img src={logo} alt="" />
         
        </div>
        <div className='flex items-center space-x-5'>
          <div className='relative'>
          <img className='cursor-pointer'  onClick={handleShow} src={cartIcon} alt="" />
               <span style={{backgroundColor:'hsl(26, 100%, 55%)'}} 
               className='absolute top-[-15px] right-[-15px] text-white rounded-full px-[8px]'>{amount} </span>
          </div>
        
           <img width={35} className='object-contain' src={avatar} alt="avatar" />
        </div>
         {/** modal */}
         <ModalComponent show={show} setShow={setShow} />


        <div  id='menu' className='menu-mobile'>
           <div className='p-3'>
                <FaTimes size={25} onClick={handleCloseMenu} />
            </div>
           
           <ul className='flex flex-col py-5 px-7 mt-[45px]'>
              {navLinks.map((link, index)=> (
                 <li className='text-black font-bold capitalize mb-[25px] text-[22px] ' key={index}>
                     <a className='no-underline' href="#">{link} </a>
                 </li>
              ))}
           </ul>
        </div>
    </nav>
  )
}

export default MobileHeader