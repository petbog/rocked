import './Slider.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import MainBottom from './../MainBottom/MainBottom';
import { SliderComponent } from '../SliderComponent/SliderComponent'
import { useState } from 'react';

const Slider = ({ PoppupWindow, setPoppupWindow }) => {
    const [swiper, setSwiper] = useState(null);
    const CustomNextArrow = () => (
        <button className="custom-next-arrow" onClick={() => swiper.slideNext()}></button>
    );
    
    const CustomPrevArrow = () => (
        <button className="custom-prev-arrow" onClick={() => swiper.slidePrev()}></button>
    );



    return (
        <div className='slider'>
            <Swiper
                 autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    type: 'fraction',
                }}

                navigation={{
                    nextEl: '.custom-next-arrow',
                    prevEl: '.custom-prev-arrow',
                }}

                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
                onSwiper={(swiper) => { setSwiper(swiper) }}
            >
                {
                    SliderComponent.map((slide, i) => (
                        <SwiperSlide key={i}>
                            <MainBottom {...slide} PoppupWindow={PoppupWindow} setPoppupWindow={setPoppupWindow} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <CustomNextArrow />
            <CustomPrevArrow />
        </div>
    )
}

export default Slider