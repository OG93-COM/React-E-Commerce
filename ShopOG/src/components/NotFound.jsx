import notFound from '../assets/error.png'

const NotFound = () => {
  return (
    <div className='mx-auto max-w-[50%]'>
        <img src={notFound} alt="Not Found"/>
    </div>
  )
}

export default NotFound