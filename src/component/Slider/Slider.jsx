import './Slider.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import MainBottom from './../MainBottom/MainBottom';
import { SliderComponent } from '../SliderComponent/SliderComponent'

const Slider = () => {



    return (
        <div className='slider'>
            <Swiper
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation,Autoplay]}
                className="mySwiper"
            >

                {
                    SliderComponent.map((slide, i) => (
                        <SwiperSlide key={i}>
                            <MainBottom {...slide} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default Slider
