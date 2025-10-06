import React from 'react'
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';

const HomeSectionCarousel = () => {

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    const items = [1, 1, 1, 1, 1].map((item) => <HomeSectionCard />)

    return (
        <div className='relative px-4 lg:px-8'>
            <div className='relative p-5'>
                < AliceCarousel
                    infinite
                    disablebuttonsControls
                    // mouseTracking
                    items={items}
                    responsive={responsive}
                // controlsStrategy="alternate"
                />
            </div>
        </div>
    )
}

export default HomeSectionCarousel
