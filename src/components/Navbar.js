import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <Nav>

<div class="container">
  <div class="all">
    <div class="left">
    <ul class="nav">
      <img src="" class="mx-4" alt="" />
      <li class="nav-item">
        <a class="nav-link activss" href="#">
          Главная
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          Филиалы
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          О нас
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          Контакты
        </a>
      </li>
    </ul>
  </div>
  <div class="right">
    <a class="glav" aria-current="page" href="#">
      Корзина
    </a>
    <button type="button" class="btnpriy">
      Войти
    </button>
  </div>
  </div>
        </div>
    </Nav>

  )
}
const Nav = styled.div `
.nav-link{
  display: inline-block;
  margin-right: 32px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  color: #000000 !important;
  padding: 1.5rem 0rem !important;
}
.all{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btnpriy{
  color: #fff;
  padding: 10px 25px!important;
  font-size: 16px;
  font-family: Proxima-Nova;
  font-weight: 500;
  line-height: 19px;
  border-radius: 8px;
  background-color: #51267D;
  border-color: #51267D;
}
.activss{
  color: #51267d !important;
}
.right{
  display: flex;
  align-items: center;

}
.glav{
  color: #51267d;
  cursor: pointer;
  position: relative;
  font-weight: 500;
  margin-right: 22px;
  text-decoration: none;
}
`
export default Navbar