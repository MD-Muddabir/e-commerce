import React from 'react'
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { Button } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const HomeSectionCarousel = () => {

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    const items = [1, 1, 1, 1, 1].map((item) => <HomeSectionCard />)

    return (
        <div className=' border '>
            <div className='relative p-5 border'>
                < AliceCarousel

                    infinite
                    dotsDisabled
                    buttonsDisabled
                    // mouseTracking
                    items={items}
                    responsive={responsive}
                // controlsStrategy="alternate"
                />
                <Button variant="contained" className="z-50 bg-white" sx={{
                    position: "absolute", top: "8rem", right: "0rem",
                    transform: "translateX(50%) rotate(90deg)",
                    bgcolor: "white",
                }} aria-label='nexxt'>
                    <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                </Button>

                <Button variant="contained" className="z-50 bg-white" sx={{
                    position: "absolute", top: "8rem", left: "0rem",
                    transform: "translateX(-50%) rotate(-90deg)", bgcolor: "white",
                }} aria-label='nexxt'>
                    <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                </Button>
            </div>
        </div>
    )
}

export default HomeSectionCarousel
