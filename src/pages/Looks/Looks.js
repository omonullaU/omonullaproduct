import React from 'react'
import img from "../Looks/img.png"
import img1 from "../Looks/img1.png"
import img2 from "../Looks/img2.png"


import "../Looks/Looks.scss"
function Looks() {
    return (
        <div className='cards'>
            <h1 className='h1'>Custom Boots </h1>
            <div className="cardsItem">

                <div className="cardsItemNumber">
                    <div className="cardsItemNumberImg">
                        <img className=' termaBox' src={img} alt="" />
                        <img className='terma' src="https://cdn.shopify.com/s/files/1/0517/3195/5883/products/20200820110872DQWQZ6nMt386DYYTch8fMANyHm2nM3_25ee98b7-e393-43a2-b85e-058e06df8550.jpg?v=1660071681&width=300" alt="" />

                    </div>
                    <button className='acrdsBtn'>+Quisk add</button>
                    <h3>Customizable Classic Eco <br /> Vegan Leather Custom <br /> Boots</h3>
                    <p>1 395 000som</p>
                    <button>Customizse now</button>

                </div>



                <div className="cardsItemNumber">
                    <div className="cardsItemNumberImg">
                        <img className='termaBox' src={img1} alt="" />
                        <img className='terma' src="https://cdn.shopify.com/s/files/1/0517/3195/5883/products/20210527200555CG6XtfHHZwcJjs2NrFAbRF5hpChK7f_27cb83ca-7e01-4726-9a3d-3cefa2948011.jpg?v=1660071640&width=300" alt="" />

                    </div>
                    <button className='acrdsBtn'>+Quisk add</button>
                    <h3>Customizable Retro Thick <br /> Boots</h3>
                    <p>1 395 000som</p>
                    <button>Customizse now</button>

                </div>





                <div className="cardsItemNumber">
                    <div className="cardsItemNumberImg">
                        <img className=' termaBox' src={img2} alt="" />
                        <img className='terma' src="https://cdn.shopify.com/s/files/1/0517/3195/5883/products/20200827090860r3cCCnihcTxcFt6AGNXQReeXm7YjrZ_4510c0fc-3a52-4087-9368-840ee7fda5af.jpg?v=1660071723&width=300" alt="" />

                    </div>
                    <button className='acrdsBtn'>+Quisk add</button>
                    <h3>Customizable Zero Eco <br /> Synthetic Leather Boots</h3>
                    <p>1 395 000som</p>
                    <button>Customizse now</button>

                </div>

            </div>

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

export default Looks