import { Link } from "react-router-dom";

const Slide = ({ image}) => {
  return (
    <div>
      <div className="slide" style={{backgroundImage: `url(${image.src})`}}>
        <div className="slide-text container mx-auto flex flex-col items-start justify-center h-full gap-5 text-violet-50">
          <h1 className="text-6xl lg:text-7xl font-semibold uppercase space-font w-4/5">{image.headline}</h1>
          <p className="w-4/5 lg:w-3/5">{image.body}</p>
          <Link to={`/products/${image.category}`} className="slide-btn h-12 w-72 border uppercase border-violet-50 hover:text-orange-50 hover:border-orange-500 font-medium duratin-300 mt-4 lg:mt-5"><span className="z-[1] absolute text-center top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-full">{image.btn}</span></Link>
        </div>
      </div>
    </div>
  )
}

export default Slide