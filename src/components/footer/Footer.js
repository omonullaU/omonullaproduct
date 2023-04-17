import React from 'react'
import { FiInstagram } from "react-icons/fi"
import { TfiFacebook } from "react-icons/tfi"
import { FaPinterestP } from "react-icons/fa"
import { BsYoutube } from "react-icons/bs"
import { SiTiktok } from "react-icons/si"
import "../footer/Footer.scss"

function Footer() {
    return (
        <div className='footer'>

            <div className="footerTopB">
                <div className="footerTopBLeft">
                    <h1>Footer menu</h1>
                    <p>Search</p>
                    <p>Privacy Policy</p>
                    <p>Refund Policy</p>
                    <p>Shipping Policy</p>
                    <p>Terms of Service</p>
                    <p>Refer A Friend</p>
                    <p>Do not sell my personal</p>
                    <p> information</p>

                </div>
                <div className="footerTopBRight">
                    <h1>Have a Question</h1>
                    <p>Message us at +1(402)699-6524</p>
                </div>
            </div>
            <div className="between">
                <div className="betweenIcon">
                    <TfiFacebook />
                    <FiInstagram />
                    <FaPinterestP />
                    <BsYoutube />
                    <SiTiktok />
                </div>
                <div className="betweenSelect">
                    <select>
                        <option value="">
                            <img src="https://flagdownload.com/wp-content/uploads/Flag_of_Lithuania_Flat_Round-1024x1024.png" alt="" />
                            Lithuania (EUR €)
                        </option>
                        <option value="">
                            <img src="" alt="" />
                            <h1></h1>
                        </option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>

                    </select>
                </div>
            </div>
            <p className='wear'>© 2023, Shoe Zero. Business Address: 183 Cambridge MA, 02140 United States</p>
            <div className="foterText">
                <h3>Custom Designed Shoes</h3>
                <p>At Shoe Zero's staff favorites collection you'll find some of our top-rated and best-selling customized shoe designs that have been created by our community. Our custom shoes are the perfect way to show off <br /> your individuality and unique style. With Shoe Zero, you can design your own sneakers and make a statement with your footwear.</p>
                <p>Our customized shoes are made with high-quality materials that are both durable and comfortable. Our easy-to-use design tool allows you to choose from a variety of colors, patterns, and materials to create <br /> your perfect pair of shoes. You can add your flare and artwork to make your shoes truly unique.</p>
                <p>Our staff favorites collection is a great place to find inspiration for your own customized shoe designs. Here, you can see what other customers have created and get ideas for your own distinctive pair of sneakers. Our collection features some of our best-selling shoe designs, so you can be sure that you're getting a pair of <br /> shoes that are both stylish and popular. Like what you see, but want to make it your own? Use these staff picks to add that extra bit of you to your <br /> customized shoe design. Our shoes are perfect for any occasion, whether it's for casual wear or for sports and outdoor activities.</p>
                <p>Our best-selling customized shoes are a great way to show off your individuality and stand out from the crowd. Our shoes are loved by sneakerheads all over the world, and our staff favorites collection <br /> showcases some of the best designs that our customers have created.</p>
            </div>
        </div>
    )
}

export default Footer 