import logo from '@/assets/images/logo.svg'
import avatar from '@/assets/images/image-avatar.png'
import cartIcon from '@/assets/images/icon-cart.svg'

import MobileHeader from './MobileHeader'


import ModalComponent from './ModalComponent'
import { useGlobalContext } from '@/mycontext'
const Header = () => {
  const navLinks = [
     'collection',
     'men',
     'women',
     'about',
     'contact'
  ]
 
  const handleOpenMenu = ()=>  {
   const menu = document.getElementById('menu')
   menu.classList.toggle('show-menu')
   document.body.classList.toggle('overlay')
}
//const [show, setShow] = useState(false);
const {show,setShow, handleShow} = useGlobalContext()

//const handleShow = () => setShow(true);
const handleCloseMenu = ()=>  {
  const menu = document.getElementById('menu')
  menu.classList.remove('show-menu')
  document.body.classList.remove('overlay')
}
const {amount} = useGlobalContext()
  return (
   <>
    <header className="max-w-[1440px] mx-auto 
     py-4 border-b  border-[hsl(223, 64%, 98%)] sm:flex hidden items-center justify-between ">
         <div className='mr-8'>
            {/* logo goes here */}
             <img className='cursor-pointer' src={logo} alt="" />
         </div>
         <ul className='flex items-center flex-1'>
            {/* nav links go here */}
            {navLinks.map((link,index) => (
               <li className='mx-[25px] relative' key={index}>
                  <a className='text-gray-500 transition-all duration-500 focus:text-black  hover:text-black capitalize font-semibold text-[16px]' href="#">{link} </a>
               </li>
            ) )}
             
         </ul>
         <div className='flex items-center gap-8'>
            {/** cart and avatar go here */}
            <div className='relative'>
               <img className='cursor-pointer'  onClick={handleShow} src={cartIcon} alt="" />
               <span style={{backgroundColor:'hsl(26, 100%, 55%)'}} 
               className='absolute top-[-15px] right-[-15px] text-white rounded-full px-[8px]'>{amount} </span>
            </div>
            
           
             <img width={40} className='cursor-pointer '  src={avatar} alt="" />
         </div>
        <ModalComponent show={show} setShow={setShow} />
     
    </header>
     <MobileHeader handleCloseMenu={handleCloseMenu}  handleOpenMenu={handleOpenMenu} navLinks={navLinks}/>
    </>
  )
}

export default Header