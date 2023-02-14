import { useState } from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import Slide from "./Slide";
const data = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/1787236/pexels-photo-1787236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    headline: 'dslr cameras for stunning photos',
    body:"A DSLR camera is a must-have tool for capturing life's special moments. With its advanced features and high-quality lens, a DSLR allows you to take stunning photos and videos that truly represent your unique perspective.",
    btn:"Get the DSLR Camera now",
  },
  {
    id: 2,
    src: "https://img.freepik.com/premium-photo/back-view-couple-living-room-watching-movie-tv-while-eating-takeaway-food_482257-26703.jpg?w=740",
    headline: "Unleash the Power of Picture with a New TV",
    body: "Upgrade your home entertainment experience with a new TV. With advanced technology and stunning picture quality, you'll be able to enjoy your favorite movies, TV shows, and games like never before.",
    btn:"Shop TVs now",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    headline: "Discover Stunning Sound with Headphones",
    body: "Experience music like never before with high-quality headphones. With advanced technology and a comfortable fit, you can enjoy your favorite tunes in stunning clarity and depth.",
    btn:"Shop headphones now",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    headline: "Elevate Your Gaming with a Console",
    body: "Experience gaming like never before with a powerful console. With advanced technology and stunning graphics, you'll enjoy a smooth and immersive gaming experience.",
    btn:"Shop consoles now",
  },
  {
    id: 5,
    src: "https://img.freepik.com/free-photo/smartwatch-screen-digital-device_53876-96810.jpg?w=740&t=st=1676399174~exp=1676399774~hmac=ddca0cac24bb7bbd71ea99169b82d7dfa33b2a196c532b7dd1dc345d794d6397",
    headline: "tay Connected with a Smartwatch",
    body: " Elevate your style and functionality with a high-quality smartwatch. With features like fitness tracking, message notifications, and voice control, you'll stay connected and in control no matter where you go. ",
    btn:"Shop smartwatches now",
  }
]

const Slider = () => {
  const [currentSlider, setCurrentSlider] = useState(0)
  const prevSlider = ()=> {
    setCurrentSlider(
      currentSlider === 0 ? data.length - 1 : prevSlider => prevSlider - 1,
    );
  }
  const nextSlider = ()=> {
    setCurrentSlider(
      currentSlider === data.length - 1  ? 0 : nextSlider => nextSlider + 1,
    )
  }
  return (
    <div className="frame relative">
      <div className="slider" style={{ transform: `translateX(-${100 * currentSlider}vw)` }}>
        {
          data.map(image =>(
            <Slide key={image.id} image={image}/>
          ))
        }
      </div>
      <div className="btns absolute z-[1] text-white flex gap-10 text-2xl left-0 right-0 bottom-3 lg:bottom-5 m-auto w-fit">
        <button onClick={prevSlider} className="prev-btn h-12 lg:h-14 w-20 flex justify-center items-center bg-violet-900 text-violet-200 border-2 border-violet-200 hover:bg-gray-900 hover:text-gray-200 hover:border-gray-200 duration-300"><span><BsArrowLeft /></span></button>
        <button onClick={nextSlider} className="next-btn h-12 lg:h-14 w-20 flex justify-center items-center bg-violet-900 text-violet-200 border-2 border-violet-200 hover:bg-gray-900 hover:text-gray-200 hover:border-gray-200 duration-300"><span><BsArrowRight /></span></button>
      </div>
    </div>
  )
}

export default Slider