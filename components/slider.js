import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, {Pagination, Autoplay} from 'swiper'
import "swiper/css"
import "swiper/css/pagination"

const Slider = () => {
    SwiperCore.use([Pagination, Autoplay])
    return (
        <Swiper autoplay={true} pagination={true} spaceBetween={30} className='lg:hidden h-full w-full border-y-2 my-5 text-white' effect={'fade'} navigation={true}>
            <SwiperSlide>
                <img src="https://img.mobilelegends.com/group1/M00/00/B5/Cq2IxmHK0D2AAb88AAGZLzrtBBA254.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://img.mobilelegends.com/group1/M00/00/B5/Cq2IxmHC-muAPQtCAAF6I-dmnzs151.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://img.mobilelegends.com/group1/M00/00/B5/Cq2IxmHAOu6AMhhbAAF_lFR_WMk32.jpeg" alt="" />
            </SwiperSlide>
        </Swiper>
    )
}

export default Slider
