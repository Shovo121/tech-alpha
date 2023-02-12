import { useState } from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
const data = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/1787236/pexels-photo-1787236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    src: "https://i.pinimg.com/564x/b6/dc/b2/b6dcb270eae6458889dc4f9b3d35cb56.jpg",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 5,
    src: "https://i.pinimg.com/564x/23/65/69/236569fbbc6d28a06da67489dde13690.jpg",
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
      currentSlider === data.length -1  ? 0 : nextSlider => nextSlider + 1,
    )
  }
  return (
    <div className="frame relative">
      <div className="slider" style={{ transform: `translateX(-${100 * currentSlider}vw)` }}>
        {
          data.map(image =>(
            <div className="slide" style={{backgroundImage: `url(${image.src})`}} 
              key={image.id}>
            </div>
          ))
        }
      </div>
      <div className="btns absolute z-[1] text-white flex gap-10 text-2xl left-0 right-0 bottom-10 m-auto w-fit">
        <button onClick={prevSlider} className="prev-btn h-14 w-20 bg-white/50 backdrop-blur-xl flex justify-center items-center hover:bg-white/90 hover:text-black duration-300"><span><BsArrowLeft /></span></button>
        <button onClick={nextSlider} className="next-btn h-14 w-20 bg-white/50 backdrop-blur-xl flex justify-center items-center hover:bg-white/90 hover:text-black duration-300"><span><BsArrowRight /></span></button>
      </div>
    </div>
  )
}

export default Slider