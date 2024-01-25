import s from './Slider.module.css'
import item from '../../slider.json'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination, Navigation } from 'swiper/modules';
import MainBottom from './../MainBottom/MainBottom';

const Slider = () => {
    return (
        <div className={s.slider}>
            <Swiper
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >

                {
                    item.map((slide,i) => (
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