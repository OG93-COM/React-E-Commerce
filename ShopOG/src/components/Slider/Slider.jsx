import { useEffect } from "react"
import { nextSlide, prevSlide, dotSlide } from "../../features/slider"
import { useDispatch , useSelector } from "react-redux"
import prevIcon from '../../assets/left-arrow.svg'
import nextIcon from '../../assets/right-arrow.svg'

const Slider = () => {
    const slideIndex = useSelector(state => state.slider.value)
    const dispatch = useDispatch()
    console.log(slideIndex)

    useEffect(()=>{
        const intervalID = setInterval(()=> dispatch(nextSlide(slideIndex)),5000)
        return () => clearInterval(intervalID)
    },[slideIndex])

  return (
    <div className="relative transition-all duration-500">
        <img src={`/images/slide${slideIndex}.jpg`}/>
        <button
        className="absolute left-2 top-[50%] w-6"
        onClick={()=> {dispatch(prevSlide(slideIndex))}}>
        <img src={prevIcon} className="w-5 hover:scale-125 active:scale-150 duration-150"/>
        </button>
        <button
        className="absolute right-2 top-[50%] w-6"
        onClick={()=> {dispatch(nextSlide(slideIndex))}}>
        <img src={nextIcon} className="w-5 hover:scale-125 active:scale-150 duration-150"/>
        </button>
    </div>
  )
}

export default Slider