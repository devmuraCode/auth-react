import React from 'react'
import Slider from "react-slick"
import styled from 'styled-components'
const Category = () => {

    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }

    


  return (
    <Cater>
    <div class="container">
    <div>
     <div>
       <h3 class="main_h">Категории</h3>
         <Slider {...settings}>
           <div>
             <h3 class="butos">Макси бокс</h3>
           </div>
           <div>
             <h3 class="butos">🌯Лаваш</h3>
           </div>
           <div>
             <h3 class="butos">🥪Клаб-сэндвич</h3>
           </div>
           <div>
             <h3 class="butos">🌮Шаурма</h3>
           </div>
           <div>
             <h3 class="butos">🍱Донар кебаб</h3>
           </div>
           <div>
             <h3 class="butos">Шаурма Баггет (хагги)</h3>
           </div>
           <div>
             <h3 class="butos">🍟Снеки</h3>
           </div>
           <div>
             <h3 class="butos">🍔Бургеры</h3>
           </div>
           <div>
             <h3 class="butos">🌭Хот-дог</h3>
           </div>
           <div>
             <h3 class="butos">🥫Соусы</h3>
           </div>
           <div>
             <h3 class="butos">🥤Напитки</h3>
           </div>
           <div>
             <h3 class="butos">🍰Десерты</h3>
           </div>
         </Slider>
       </div>
</div>
</div>
</Cater>
  )
}
const Cater = styled.div `
.main_h {
  font-size: 28px;
  font-family: "Proxima-Nova", sans-serif;
  font-weight: 400;
  letter-spacing: -0.00833em;
  line-height: 34px;
  color: #000;
  margin-bottom: 18px;
  margin-top: 56px;
}

.butos{
  background: #fff;
  border-radius: 12px;
  padding: 10px 16px;
  font-size: 18px;
  line-height: 22px;
  font-weight: 400;
  cursor: pointer;
  transition: all .5s;
  white-space: nowrap;
  width: 200px;
`
export default Category