import  { useState } from "react";
import image from "@/assets/images/image-product-1.jpg";
import image1 from "@/assets/images/image-product-2.jpg";
import image2 from "@/assets/images/image-product-3.jpg";
import image3 from "@/assets/images/image-product-4.jpg";
import minus from '@/assets/images/icon-minus.svg'
import plus from '@/assets/images/icon-plus.svg'
import cartIcon from '@/assets/images/icon-cart.svg'
import { useGlobalContext } from "@/mycontext";
const Gallery = () => {
  const thumbnailImages = [image, image1, image2, image3];
  const [selectedImage, setSelectedImage] = useState(thumbnailImages[0]);
   const { increase, decrease, amount, handleShow } = useGlobalContext() 
  
  const handleThumbnailClick = (thumbnail) => {
    setSelectedImage(thumbnail);
  };
  
  return (
  <div className="pb-4 max-w-[1200px] mx-auto mt-[55px] flex  sm:flex-row flex-col items-center
   justify-between gap-12">
      <div className="sm:mx-[30px] mx-[10px]">
        <div className="sm:w-[450px] w-auto h-[400px]
         flex-1 rounded-[20px] flex flex-col items-center justify-center">
          <img
            className="w-full h-full object-cover rounded-[20px] z-[1] "
            src={selectedImage}
            alt=""
          />
        </div>


        <div className="max-w-full flex items-center justify-center mt-4 space-x-4">
          {thumbnailImages.map((thumbnail, index) => (
            <img
              className={`sm:w-[100px] sm:h-[100px] h-[70px] w-[70px]
               transition-all duration-150 hover:opacity-[0.6]  
              rounded-[10px] object-cover cursor-pointer 
              ${thumbnail === selectedImage ? 'opacity-[0.6]  border-[3px] border-orange-500' : ''}`}
              src={thumbnail}
              key={index}
              alt=""
              onClick={() => handleThumbnailClick(thumbnail)}
            />
          ))}
        </div>
      
      </div>





      <div className="flex-1 flex flex-col mx-[30px] ">
       
        <p className="uppercase font-medium text-base mb-2" style={{ color: "hsl(26, 100%, 55%)" }}>
           sneaker company
         </p>
           <h2 style={{color:'hsl(220, 13%, 13%)'}} 
           className="lg:text-[45px] text-[30px] font-bold
            m-0 p-0 leading-[50px] whitespace-nowrap
             mb-[25px] capitalize">fall limited edition <br /> sneaker</h2>
           <p style={{color:'hsl(219, 9%, 45%)'}} className="font-medium text-[16px]
            sm:max-w-[500px] line-clamp-3  leading-7 my-4 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea alias veniam esse reiciendis delectus cupiditate maxime aliquam qui, dignissimos, exercitationem iste architecto pariatur molestiae! Sed? </p>
           <div className="flex sm:flex-col max-md:items-center max-md:justify-between">
               <div className="flex items-center space-x-6">
                  <h3 style={{color:'hsl(220, 13%, 13%)'}} className="font-semibold text-[30px] ">$ 125.00</h3>
                  <span style={{backgroundColor:'hsl(25, 100%, 94%)', color:'hsl(26, 100%, 55%)'}}
                   className=" rounded-md font-medium text-[18px] px-2">50%</span>
               </div>
               <p style={{color:'hsl(219, 9%, 45%)'}} className="line-through font-medium text-[18px] ">$250.00</p>
           </div>
           
            <div className="flex sm:flex-row flex-col sm:items-center mt-8 sm:space-x-6 sm:space-y-0 space-y-6">
                <div style={{backgroundColor:'hsl(223, 64%, 98%)'}}
                 className="flex items-center justify-between px-4 h-[50px] py-2.5 rounded-md  flex-1">
                     <img onClick={decrease} className="cursor-pointer hover:opacity-[0.6] " src={minus} alt="" />
                     
                        <p  className="font-semibold text-black ">{amount}</p>
                     
                     <img onClick={increase} className="cursor-pointer hover:opacity-[0.6]" src={plus} alt="" />
                </div>
                <button
                 onClick={handleShow}
                  type="button"
                   style={{backgroundColor:'hsl(26, 100%, 55%)'}} 
                className="flex-1 flex items-center
                 text-white h-[50px] justify-center gap-x-6 rounded-md 
                  transition-all duration-200 hover:opacity-[0.7] py-4" >
                    <img style={{color:'white'}} className="invert(100%) " src={cartIcon} alt="" />
                    <p className="capitalize font-semibold text-white text-[16px] ">add to cart</p>
                </button>
            </div>
      </div>
    </div>
  );
};

export default Gallery;