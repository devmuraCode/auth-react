import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Foot>
    <footer class="footer">
    <div class="container">
        <div class="footer__all">
      <div class="top">
        <img src="" class="mb-4" alt=""/>
      </div>
      <div class="bottom">
        <ul class="nav naav">
          <li class="nav-item">
            <a class="footer_link" href="#">
              Главная
            </a>
          </li>
          <li class="nav-item">
            <a class="footer_link" href="#">
              Филиалы
            </a>
          </li>
          <li class="nav-item">
            <a class="footer_link" href="#">
              О нас
            </a>
          </li>
          <li class="nav-item">
            <a class="footer_link" href="#">
              Контакты
            </a>
          </li>
        </ul>
      </div>
    </div>
  
    <div class="footer__alls">
      <div class="footer__left">
        <p class="foter__des">© MaxWay 2005 - 2022 All rights reserved</p>
      </div>
      <div class="footer__right">
        <img src="" alt=""/>
  
        </div>
    </div>
    <div class="footer__als">
      <div class="footer__left">
        <p class="foter__des">Пользовательское соглашение</p>
      </div>
      <div class="footer__right">
        <p class="foter__des">Developed by</p>
      </div>
    </div>
    </div>
  
  </footer>
  </Foot>
  )
}
const Foot = styled.div `
.footer{
  background-color: #51267d;
  padding-top: 48px;
  margin-top: 30px;
}
.footer_link{
  display: inline-block;
  color: #ffffff !important;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  text-decoration: none;
  margin-right: 30px;
}
.footer__all{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.naav{
  padding: 32px 0 48px;
}
.foter__des{
  font-size: 14px;
  line-height: 24px;
  color: #d9dbe1;
  margin: 14px 0 38px 0;
}
.footer__alls{
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #7e7e81;
}
.footer__als{
  display: flex;
  justify-content: space-between;
  padding: 36px 0
}
}
`
export default Footer