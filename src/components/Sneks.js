import React from 'react'
import styled from 'styled-components';

const Sneks = () => {
  return (
    <Snek>
    <div className='container'>
          <h3 class="main_h ">🍟Снеки</h3>
      <div class="main__cards">
        <div class="main__card">
          <img src="" class="w-100 mt-4 mb-5" alt=""/>
          <h4 class="main__title">Картофель Фри Большой</h4>
          <p class="main__des mb-5">Информация: картофель-фри 150 гр</p>
          <div class="main__al-price">
            <p class="main__price">16 000 сум</p>
            <span class="main__button">Выбрать</span>
          </div>
        </div>
        <div class="main__card">
          <img src=""class="w-100 mt-4 mb-5" alt=""/>
          <h4 class="main__title">Наггетсы L (20 шт)</h4>
          <p class="main__des mb-5">Информация: наггетсы 20 шт</p>
          <div class="main__al-price">
            <p class="main__price">30 000 сум</p>
            <span class="main__button">Выбрать</span>
          </div>
        </div>
        <div class="main__card">
          <img src="" class="w-100 mt-4 mb-5" alt=""/>
          <h4 class="main__title">Байтсы большой</h4>
          <p class="main__des mb-2">Информация: куриное филе с ароматными специями обжаренное в панировке   270 гр</p>
          <div class="main__al-price">
            <p class="main__price">25 000 сум</p>
            <span class="main__button">Выбрать</span>
          </div>
        </div>
        <div class="main__card">
          <img src="" class="w-100 mb-2" alt=""/>
          <h4 class="main__title">Наггетс бокс </h4>
          <p class="main__des">Информация: картофель-фри 100гр, наггетсы 5 шт</p>
          <div class="main__al-price">
            <p class="main__price">18 000 сум</p>
            <span class="main__button">Выбрать</span>
          </div>
        </div>
          </div>
        </div>
        </Snek>
  )
}
const Snek = styled.div `
.main__al-price {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.main__cards{
  display: flex;
  flex-wrap: wrap;
  gap: 17px;
}
.main__card {
  max-width: 24%;
  border-radius: 12px;
  box-shadow: 0 4px 30px rgb(0 0 0 / 7%);
  padding: 20px 16px;
  margin-bottom: 20px;
  background-color: #fff;
}

.main__title {
  margin-bottom: 10px;
  height: 48px;
  color: #000;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.00735em;
}
.main__des{
  color:#696969;
  margin: 0;
  font-size: 16px;
  line-height: 20px;
  font-weight: 200;
  margin-bottom: 25px;
}
.main__price{
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 0;
}
.main__button{
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  font-family: Proxima-Nova,sans-serif;
  cursor: pointer;
  border-radius: 8px;
  background-color: rgba(81,38,125,.08);
  padding: 10px 25px;
  color: #51267d;
  border: transparent;

}
.main_h{
  margin-top: 40px;
  margin-bottom: 20px
}
`
 
export default Sneks