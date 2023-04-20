import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useState } from 'react';

export default () => {
    const [screenSize, setScreenSize] = useState(4)

    useEffect(() => {
        console.log(window.screen.width)
        const getScreen = () => {
            if (window.screen.width > 1200) {
                setScreenSize(4)
            } else if (window.screen.width > 1100) {
                setScreenSize(2
                )
            } else if (window.screen.width > 600) {
                setScreenSize(2
                )
            } else if (window.screen.width > 500) {
                setScreenSize(1)

            } else if (window.screen.width > 300) {
                setScreenSize(1)
            } else {
                setScreenSize(1)
            }
        }
        getScreen()
    }, [window.screen.width])
    return (
        <Swiper className='swiper'
            style={{ width: '100%', height: '450px' }}
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={screenSize}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <div className='number'>
                <div className="swiperBanner">
                    <SwiperSlide>
                        <img src="https://cdn.shopify.com/s/files/1/0517/3195/5883/files/699b6482-8fb5-41db-a575-92b379923d81.jpg?v=1678291217&width=500" alt="" />
                    </SwiperSlide>
                </div>

                <div className="swiperBanner">
                    <SwiperSlide>
                        <img src="https://cdn.shopify.com/s/files/1/0517/3195/5883/products/20200824100822h6iaQppTspTsS2Wh6fsdiAD5FwnG4J.jpg?v=1660071963&width=500" alt="" />
                    </SwiperSlide>
                </div>
                <div className="swiperBanner">
                    <SwiperSlide>
                        <img src="https://cdn.shopify.com/s/files/1/0517/3195/5883/products/20200903180904GPc7cfyTPcAnmWQGyPdi4srZBiEJxn_0b0728b7-db0d-433a-afd2-902f3ffcf141.jpg?v=1660071837&width=500" alt="" />
                    </SwiperSlide>
                </div>
                <div className="swiperBanner">
                    <SwiperSlide>
                        <img src="https://cdn.shopify.com/s/files/1/0517/3195/5883/products/20200930220950TFJp5psdcwfGKywx34n7zt3zNJx6tQ_048e6cc2-2ce0-49dc-9b74-7c58fdf92e5f.jpg?v=1660072526&width=500" alt="" />
                    </SwiperSlide>
                </div>
                <div className="swiperBanner">
                    <SwiperSlide>
                        <img src="https://cdn.shopify.com/s/files/1/0517/3195/5883/products/202008201108385tszaxdQ74MXh4ednnTnrRzdDDitSY_f1f9a7a2-bc93-4b60-b056-2faa44964f25.jpg?v=1660071677&width=500" alt="" />
                    </SwiperSlide>
                </div>


                <div className="swiperBanner">
                    <SwiperSlide>
                        <img src="https://cdn.shopify.com/s/files/1/0517/3195/5883/files/699b6482-8fb5-41db-a575-92b379923d81.jpg?v=1678291217&width=500" alt="" />
                    </SwiperSlide>
                </div>

            </div>
            ...
        </Swiper>
    );
};