import React from 'react'
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';
import { mainCarouselData } from './MainCarouselData';

const MainCrousel = () => {

    const items = mainCarouselData.map((item) => <img className='cursor-pointer'
        role='presentation' src={item.image} alt='' />)

    return (
        <AliceCarousel
            infinite
            autoPlay
            buttonsDisabled
            autoPlayInterval={1000}

            // mouseTracking
            items={items}
        // responsive={responsive}
        // controlsStrategy="alternate"
        />
    )
}

export default MainCrousel
