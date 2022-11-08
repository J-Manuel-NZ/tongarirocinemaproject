import React, {useState} from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import './carousel.css'


// This component accpets an array of items to display in the carousel
const Carousel = ({ carouselImages }) => {
  const [current, setCurrent] = useState(0);
  const length = carouselImages.length;
// next two functions either increase the index or decrease depending on which button is clicked
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }
  console.log(current)

  if (!Array.isArray(carouselImages) || carouselImages.length <= 0) {
    return null;
  }

  return (
    <section className="tc__carousel-container">
      {/* icons */}
      <FaAngleRight className='tc__carousel-container_right-arrow' onClick={nextSlide} />
      <FaAngleLeft className='tc__carousel-container_left-arrow' onClick={prevSlide} />
      {/* images */}
      {/* Maps through the images in the array an displays them in a carousel */}
      {carouselImages.map((image, index) => {
        let ref = image.ref;
        return (
          <div className={index === current ? 'tc__carousel-container_slide active' : 'tc__carousel-container_slide'} key={index}>
            {index === current && (
            <>
              <img src={image.url} alt={image.alt} className='tc__carousel-container_slide-image' />
              <div className='tc__carousel-container_slide-content'>
                <h1>{image.title}</h1>
                <div className='tc__carousel-container_slide-content_buttons'>
                  <button type='button'><a href={ref}>READ MORE</a></button>
                  <button type='button'><a href='/staffpos'>BUY TICKETS</a></button>
                </div>
              </div>
            </>
            )}
          </div>)
      // Titles and buttons
      
          
          
      })}
  
    </section>
  )
}

export default Carousel;






















// import './carousel.css'

// const Carousel = () => {
//   return (
//     <div className='tc__carousel'>
//       <div className='tc__carousel-container'>

//       </div>
//     </div>
//   )
// }

// export default Carousel