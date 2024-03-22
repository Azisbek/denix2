import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classes from './OrderPage.module.css'
import icon from '../../assets/image/Шины (Copy)/Icon 16/ok.png'
import icon2 from '../../assets/image/Шины (Copy) (1)/Icon 16/time.png'
import Button from '../ui/Button'
import useScrollToTop from '../../hooks/useScrollToTop'
import { getOrderProduct } from '../../store/orderTireProductSlice'
import useResetFiliterHome from '../../hooks/useResetFiliterHome'

const OrderPage = () => {
   useResetFiliterHome()
   useScrollToTop()
   const dispatch = useDispatch()
   const { data } = useSelector((state) => state.order)

   useEffect(() => {
      dispatch(getOrderProduct())
   }, [dispatch])
   console.log(data, 123123123)

   return (
      <div className={classes.orderContainer}>
         <h1 className={classes.orderTitle}>Оформление заказа</h1>
         <div className={classes.contacts}>
            <div className={classes.contactsForm}>
               <div className={classes.contactsFormTitle}>
                  <div className={classes.contactsFormIcon}>
                     <img
                        src={icon}
                        alt="icon"
                        className={classes.contactsFormImg}
                     />
                  </div>
                  <div className={classes.contactsFormText}>
                     Контактная информация
                  </div>
               </div>
               <div className={classes.contactsFormItemContainer}>
                  <div className={classes.contactsFormEntrepreneur}>
                     <p>Физическое лицо</p>
                     <p>Юридическое лицо</p>
                     <p>Индивидуальный предприниматель</p>
                  </div>
                  <div className={classes.linkToPersonalAccount}>
                     <p>
                        <span>Войдите в личный кабинет,</span> чтобы мы
                        автоматически заполнили поля <br /> данными с вашей
                        последней покупки
                     </p>
                  </div>
                  <form className={classes.contactsFormInput}>
                     <input type="text" placeholder="Фамилия" />
                     <input type="text" placeholder="Имя" />
                     <input type="text" placeholder="Отчество" />
                     <input type="email" placeholder="Электронная почта" />
                     <input type="tel" name="" id="" placeholder="Номер" />
                  </form>
               </div>
               <div className={classes.contactsFormTitle}>
                  <div className={classes.contactsFormIcon}>
                     <img
                        src={icon}
                        alt="icon"
                        className={classes.contactsFormImg}
                     />
                  </div>
                  <div className={classes.contactsFormText}>
                     Способ получения
                  </div>
               </div>
               <div className={classes.contactsFormItemContainer}>
                  <div className={classes.contactsFormEntrepreneur}>
                     <p className={classes.tabsItem}>Самовызов</p>
                     <p className={classes.tabsItem}>Доставка</p>
                  </div>
                  <div className={classes.adress}>
                     <div className={classes.adressContainer}>
                        <div className={classes.adressItem}>
                           <div>
                              <input type="radio" name="" id="" />
                           </div>
                           <h4>Пролетарская улица, 132/5</h4>
                        </div>
                        <div
                           className={`${classes.adressItem}  ${classes.adressItemPadding}`}
                        >
                           <div>
                              <img src={icon2} alt="icon2" />
                           </div>
                           <p>Ежедневно с 9:00 до 21:00, без перерывов</p>
                        </div>
                     </div>
                     <div className={classes.adressContainer}>
                        <div className={classes.adressItem}>
                           <div>
                              <input type="radio" name="" id="" />
                           </div>
                           <h4>ул. Пушкина, 12</h4>
                        </div>
                        <div
                           className={`${classes.adressItem}  ${classes.adressItemPadding}`}
                        >
                           <div>
                              <img src={icon2} alt="icon2" />
                           </div>
                           <p>Ежедневно с 9:00 до 21:00, без перерывов</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className={classes.contactsFormTitle}>
                  <div className={classes.contactsFormIcon}>
                     <img
                        src={icon}
                        alt="icon"
                        className={classes.contactsFormImg}
                     />
                  </div>
                  <div className={classes.contactsFormText}>
                     Дополнительные услуги
                  </div>
               </div>
               <div className={classes.contactsFormItemContainer}>
                  <div className={classes.additionalServices}>
                     <div className={classes.additionalServicesItem}>
                        <input type="checkbox" name="" id="" />
                        <p>Услуга 1</p>
                        <a href="https://www.figma.com/file/ZlZF964z9FmsD3mfJ9V4zZ/%D0%A8%D0%B8%D0%BD%D1%8B-(Copy)?node-id=97%3A6788&mode=dev">
                           Расценки
                        </a>
                        <span>сом от 500</span>
                     </div>
                     <div className={classes.additionalServicesItem}>
                        <input type="checkbox" name="" id="" />
                        <p>Услуга 1</p>
                        <a href="https://www.figma.com/file/ZlZF964z9FmsD3mfJ9V4zZ/%D0%A8%D0%B8%D0%BD%D1%8B-(Copy)?node-id=97%3A6788&mode=dev">
                           Расценки
                        </a>
                        <span>сом от 1500</span>
                     </div>
                     <div className={classes.additionalServicesItem}>
                        <input type="checkbox" name="" id="" />
                        <p>Услуга 1</p>
                        <a href="https://www.figma.com/file/ZlZF964z9FmsD3mfJ9V4zZ/%D0%A8%D0%B8%D0%BD%D1%8B-(Copy)?node-id=97%3A6788&mode=dev">
                           Расценки
                        </a>
                        <span>сом от 2500</span>
                     </div>
                     <div className={classes.additionalServicesItem}>
                        <input type="checkbox" name="" id="" />
                        <p>Услуга 1</p>
                        <a href="https://www.figma.com/file/ZlZF964z9FmsD3mfJ9V4zZ/%D0%A8%D0%B8%D0%BD%D1%8B-(Copy)?node-id=97%3A6788&mode=dev">
                           Расценки
                        </a>
                        <span>сом от 800</span>
                     </div>
                     <div className={classes.additionalServicesItem}>
                        <input type="checkbox" name="" id="" />
                        <p>Услуга 1</p>
                        <a href="https://www.figma.com/file/ZlZF964z9FmsD3mfJ9V4zZ/%D0%A8%D0%B8%D0%BD%D1%8B-(Copy)?node-id=97%3A6788&mode=dev">
                           Расценки
                        </a>
                        <span>сом от 100</span>
                     </div>
                  </div>
               </div>
               <div className={classes.contactsFormTitle}>
                  <div className={classes.contactsFormIcon}>
                     <img
                        src={icon}
                        alt="icon"
                        className={classes.contactsFormImg}
                     />
                  </div>
                  <div className={classes.contactsFormText}>Способ оплаты</div>
               </div>
               <form
                  className={`${classes.contactsFormItemContainer} ${classes.paymentЬethod}`}
               >
                  <label>
                     <input type="radio" name="gender" value="male" />
                     Наличными
                  </label>

                  <label>
                     <input type="radio" name="gender" value="female" />
                     Банковской картой
                  </label>

                  <label>
                     <input type="radio" name="gender" value="other" />
                     Рассрочка от магазина
                  </label>
               </form>
               <div className={classes.contactsFormTitle}>
                  <div className={classes.contactsFormIcon}>
                     <img
                        src={icon}
                        alt="icon"
                        className={classes.contactsFormImg}
                     />
                  </div>
                  <div className={classes.contactsFormText}>
                     Консультация специалиста
                  </div>
               </div>
               <form
                  className={`${classes.contactsFormItemContainer} ${classes.paymentЬethod}`}
               >
                  <label>
                     <input type="radio" name="gender" value="male" />
                     Мне требуется консультация менеджера
                  </label>

                  <label>
                     <input type="radio" name="gender" value="female" />Я уверен
                     в выбранных товарах, консультация менеджера мне не нужна
                  </label>
               </form>
            </div>
            <div className={classes.contactsItem}>
               <div className={classes.blockPaymentPath}>
                  <div className={classes.totalQuantityBox}>
                     <p>Стоимость</p>
                     <span>12 560 C</span>
                  </div>
                  <div className={classes.totalQuantityBox}>
                     <p>Скидка</p>
                     <span>-845 C</span>
                  </div>
                  <div className={classes.totalQuantityBox}>
                     <p>Итоговая цена</p>
                     <span>123 000 C</span>
                  </div>
                  <Button id={classes.btnPaymentPath}>Перейти к оплате</Button>
                  <label>
                     <input type="checkbox" />Я согласен получать новости об
                     акциях и новинках интернет-магазина
                  </label>
                  <label>
                     <input type="checkbox" />
                     <span>
                        Я согласен c
                        <span className={classes.span}>
                           условиями публичной оферты
                        </span>
                        и правилами продажи товаров
                     </span>
                  </label>
               </div>
            </div>
         </div>
      </div>
   )
}

export default OrderPage
