import React from 'react'
import MainCrousel from '../../components/HomeCarousel/MainCrousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel';

const HomePage = () => {
    return (
        <div>
            <MainCrousel />

            <div>
                <HomeSectionCarousel />
            </div>
        </div>
    )
}

export default HomePage;
