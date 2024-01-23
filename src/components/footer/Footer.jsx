import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../ui/Button'
import classes from './Footer.module.css'
import instagram from '../../assets/icon/instagram.png'
import vk from '../../assets/icon/vk.png'
import whatsapp from '../../assets/icon/whatsapp.png'
import logo from '../../assets/icon/logo.png'

const Footer = () => {
   return (
      <footer className={classes.footerContent}>
         <div className={classes.container}>
            <div className={classes.boxProductsServices}>
               <div className={classes.columnPruducts}>
                  <h4>Товары</h4>
                  <a href="/">Автомобильные шины</a>
                  <a href="/">Автомобильные диски</a>
                  <a href="/">
                     Аксессуары для шин,
                     <br /> дисков и шиномонтажа
                  </a>
                  <a href="/">Аккумуляторы</a>
                  <a href="/">Автомасла</a>
                  <a href="/">Автозапчасти</a>
                  <a href="/">Автоэлектроника</a>
                  <a href="/">Автохимия и автокосметика</a>
                  <a href="/">Внешний декор, тюнинг, защита</a>
                  <a href="/">Инструменты и техническая помощь</a>
                  <a href="/">Компрессоры</a>
               </div>
               <div className={classes.columnServices}>
                  <h4>Услуги</h4>
                  <a href="/">Шиномонтаж</a>
                  <a href="/">Всё для шиномонтажа</a>
                  <a href="/">Ремонт и правка дисков</a>
                  <a href="/">Ошиповка зимних шин</a>
                  <a href="/">Сезонное хранение</a>
                  <a href="/">Ремонт шин</a>
                  <a href="/">Сход-развал</a>
                  <a href="/">Мелкосрочный ремонт</a>
               </div>
            </div>
            <div className={classes.columnLogo}>
               <div className={classes.top}>.</div>
               <div className={classes.logo}>
                  <div className={classes.left}>.</div>
                  <div className={classes.center}>
                     <img src={logo} alt="Logo" />
                  </div>
                  <div className={classes.right}>.</div>
               </div>
               <span>9960000000</span>
               <p>Звонок бесплатный</p>
               <Button id={classes.btnFooter}>Заказать обратный звонок</Button>
               <p>Мы в социальных сетях</p>
               <div className={classes.boxNetwork}>
                  <img src={instagram} alt="Instagram" />
                  <img src={vk} alt="Vk" />
                  <img src={whatsapp} alt="Whatsapp" />
               </div>
            </div>
            <div className={classes.boxCompanyPrivate}>
               <div className={classes.columnCompany}>
                  <h4>Компания</h4>
                  <Link to="/company">О компании</Link>
                  <a href="/">Оплата</a>
                  <a href="/">Доставка</a>
                  <a href="/">Статьи и новости</a>
                  <a href="/">Акции и скидки</a>
                  <Link to="/contacts">Контакты</Link>
                  <a href="/">Кредит</a>
                  <a href="/">Гарантия</a>
                  <a href="/">Подарочные сертификаты</a>
                  <a href="/">Оптовым клиентам</a>
                  <a href="/">Возврат товара</a>
               </div>
               <div className={classes.columnPrivate}>
                  <h4>Личный кабинет</h4>
                  <Link to="/cart">Корзина</Link>
                  <a href="/">Баллы</a>
                  <a href="/">Гараж</a>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default Footer
