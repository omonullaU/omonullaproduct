import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { AiFillStar } from "react-icons/ai"
import { Swiper, SwiperSlide } from 'swiper/react';
import ToPul from "../ToPull/ToPul.scss"
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
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={screenSize}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')} className='swiper'
        >
            <div className="swiper">
                <div className="swiperBanner">
                    <SwiperSlide>
                        <div className="bannerLogo">
                            <div className="bannerLogoLeft">
                                <img className='img' src="https://cdn.shopify.com/s/files/1/0517/3195/5883/files/B1C24ACD-3C36-4D7D-9EE6-770FF153C9A7_1_105_c.jpg?v=1658067899&width=56" alt="" />
                            </div>
                            <div className="bannerLogoRight">
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                            </div>
                            <p className='textReact'>Chad - Gym Owner</p>
                            <p className='textProduct'>Design Shoes to match your personality. ShoeZero was the perfect partner to create a custom designed shoes to show off my personality.   </p>
                        </div>
                    </SwiperSlide>
                </div>

                <div className="swiperBanner">
                    <SwiperSlide>
                        <div className="bannerLogo">
                            <div className="bannerLogoLeft">
                                <img className='img' src="https://cdn.shopify.com/s/files/1/0517/3195/5883/files/6DEDBD50-81D1-48FD-84A2-E8D28D64A119_1_105_c.jpg?v=1658067117&width=56" alt="" />
                            </div>
                            <div className="bannerLogoRight">
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                            </div>
                            <p className='textReact'>Chad - Gym Owner</p>
                            <p className='textProduct'>Design Shoes to match your personality. ShoeZero was the perfect partner to create a custom designed shoes to show off my personality.   </p>
                        </div>
                    </SwiperSlide>
                </div>
                <div className="swiperBanner">
                    <SwiperSlide>
                        <div className="bannerLogo">
                            <div className="bannerLogoLeft">
                                <img className='img' src="https://cdn.shopify.com/s/files/1/0517/3195/5883/files/044BFA82-898B-498E-B090-104523A7D37D.jpg?v=1670359258&width=56" alt="" />
                            </div>
                            <div className="bannerLogoRight">
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                            </div>
                            <p className='textReact'>Chad - Gym Owner</p>
                            <p className='textProduct'>Design Shoes to match your personality. ShoeZero was the perfect partner to create a custom designed shoes to show off my personality.   </p>
                        </div>                    </SwiperSlide>
                </div>
                <div className="swiperBanner">
                    <SwiperSlide>
                        <div className="bannerLogo">
                            <div className="bannerLogoLeft">
                                <img className='img' src="https://cdn.shopify.com/s/files/1/0517/3195/5883/files/Layer_1267_4.png?v=1657831407&width=56" alt="" />
                            </div>
                            <div className="bannerLogoRight">
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                            </div>
                            <p className='textReact'>Chad - Gym Owner</p>
                            <p className='textProduct'>Design Shoes to match your personality. ShoeZero was the perfect partner to create a custom designed shoes to show off my personality.   </p>
                        </div>                    </SwiperSlide>
                </div>
                <div className="swiperBanner">
                    <SwiperSlide>
                        <div className="bannerLogo">
                            <div className="bannerLogoLeft">
                                <img className='img' src="https://cdn.shopify.com/s/files/1/0517/3195/5883/files/B1C24ACD-3C36-4D7D-9EE6-770FF153C9A7_1_105_c.jpg?v=1658067899&width=56" alt="" />
                            </div>
                            <div className="bannerLogoRight">
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                            </div>
                            <p className='textReact'>Chad - Gym Owner</p>
                            <p className='textProduct'>Design Shoes to match your personality. ShoeZero was the perfect partner to create a custom designed shoes to show off my personality.   </p>
                        </div>
                    </SwiperSlide>
                </div>



                <div className="swiperBanner">
                    <SwiperSlide>
                        <div className="bannerLogo">
                            <div className="bannerLogoLeft">
                                <img className='img' src="https://cdn.shopify.com/s/files/1/0517/3195/5883/files/Layer_1266_5.png?v=1657015270&width=56" alt="" />
                            </div>
                            <div className="bannerLogoRight">
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                            </div>
                            <p className='textReact'>Chad - Gym Owner</p>
                            <p className='textProduct'>Design Shoes to match your personality. ShoeZero was the perfect partner to create a custom designed shoes to show off my personality.   </p>
                        </div>
                    </SwiperSlide>
                </div>

            </div>
            ...
        </Swiper>
    );
};