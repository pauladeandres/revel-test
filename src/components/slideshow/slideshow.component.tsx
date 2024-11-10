import slideshowImage from '../../images/UltraHomeCarousel.png'

import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css';

import { RevelSlide } from '../slide/slide.component'

export const Slideshow = () => {

    const slideshowSlides = [
        {
            id: 0,
            title: 'The last of us',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus viverra lacus quam, in molestie dolor consectetur in. Praesent ullamcorper fringilla pharetra....',
            image: `${slideshowImage.src}`
        },
        {
            id: 1,
            title: 'The last of us',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus viverra lacus quam, in molestie dolor consectetur in. Praesent ullamcorper fringilla pharetra....',
            image: `${slideshowImage.src}`
        }
    ]

    return (
        <div className='hero-slideshow'>
            <Slide indicators={true} transitionDuration={1000} autoplay={true} canSwipe={true} infinite={true} duration={3000}>
                {
                    slideshowSlides.map((slide, idx) => (
                        <RevelSlide key={`slide-${idx}`} slide={slide}></RevelSlide>
                    ))
                }
            </Slide>
        </div>
    )
}