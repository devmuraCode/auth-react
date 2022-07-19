import React from 'react'
import styled from 'styled-components';

const Burger = () => {
    return(
        <Bur>
            <div className='container'>
            <h3 class="main_h " >🍔Бургеры</h3>
      <div class="main__cards">
        <div class="main__card">
          <img src="" class="w-100" alt=""/>
          <h4 class="main__title">Гамбургер</h4>
          <p class="main__des">Информация: булочка гамбургер, соленые огурцы, помидоры, мясная котлета, красный лук, айсберг, соус "бургер</p>
          <div class="main__al-price">
            <p class="main__price">19 000 сум</p>
            <span class="main__button">Выбрать</span>
          </div>
        </div>
        <div class="main__card">
          <img src="" class="w-100" alt=""/>
          <h4 class="main__title">Чизбургер</h4>
          <p class="main__des">Информация: булочка гамбургер, соленые огурцы, помидоры, мясная котлета, красный лук, айсберг, соус "бургер"</p>
          <div class="main__al-price">
            <p class="main__price">21 000 сум</p>
            <span class="main__button">Выбрать</span>
          </div>
        </div>
        <div class="main__card">
          <img src="" class="burd" alt=""/>
          <h4 class="main__title">Дабл Бургер</h4>
          <p class="main__des">Информация: булочка гамбургер, соленые огурцы, помидоры, 2 мясной котлеты, красный лук, айсберг, соус "бургер"</p>
          <div class="main__al-price">
            <p class="main__price">27 000 сум</p>
            <span class="main__button">Выбрать</span>
          </div>
        </div>
        <div class="main__card">
          <img src="" class="bur" alt=""/>
          <h4 class="main__title">Дабл Чиз</h4>
          <p class="main__des">Информация: булочка гамбургер, соленые огурцы, помидоры, 2 мясной котлеты, красный лук, айсберг, соус "бургер"</p>
          <div class="main__al-price">
            <p class="main__price">18 000 сум</p>
            <span class="main__button">Выбрать</span>
          </div>
        </div>
          </div>
            </div>
        </Bur>
    )
}
const Bur = styled.div `
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
.bur{
  width: 72%;
}
.burd{
  width: 96%;
}
.main_h{
  margin-top: 40px;
  margin-bottom: 20px
}
`
export default Burger