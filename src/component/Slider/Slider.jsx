import './Slider.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import MainBottom from './../MainBottom/MainBottom';
import { SliderComponent } from '../SliderComponent/SliderComponent'

const Slider = ({ PoppupWindow, setPoppupWindow }) => {



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

                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >

                {
                    SliderComponent.map((slide, i) => (
                        <SwiperSlide key={i}>
                            <MainBottom {...slide} PoppupWindow={PoppupWindow} setPoppupWindow={setPoppupWindow} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default Slider
