import React from 'react'
import classes from './PersonalAccount.module.css'
// import icon from '../../assets/icon/Icon 16/down.png'
import iconn from '../../assets/icon/Icon 16/Link.png'
import Queston from '../svg/Queston'
import Button from '../ui/Button'

const PersonalAccount = () => {
   return (
      <div className={classes.container}>
         <h1 className={classes.titleMain}>Личный кабинет</h1>
         <div>
            <div className={classes.block1}>
               <section className={classes.form}>
                  <div>
                     <div>
                        <h1 className={classes.titlePersonal}>Личные данные</h1>
                        <div className={classes.personalData}>
                           <input placeholder="Фамилия" type="text" />
                           <input placeholder="Имя" type="text" />
                           <input placeholder="Отчество" type="tel" />
                           <input
                              placeholder="Электронная почта"
                              type="email"
                           />
                           <input placeholder="Телефон" type="text" />
                        </div>
                        <div className={classes.buttons}>
                           <Button>Сохранить</Button>
                           <Button>Отмена</Button>
                        </div>
                     </div>
                  </div>
               </section>
               <section className={classes.block2}>
                  <h1>Личные данные</h1>
                  <p>Гараж</p>
                  <p>История заказов</p>
                  <p>Мои баллы</p>

                  <p>
                     Корзина
                     <img
                        className={classes.iconArrow}
                        src={iconn}
                        alt="iconn"
                     />
                  </p>
                  <p>
                     Избранное
                     <img
                        className={classes.iconArrow}
                        src={iconn}
                        alt="iconn"
                     />
                  </p>
               </section>
            </div>
            {/* ---------------li--------------------------------------------------- */}
            <section className={classes.block3}>
               <h1 className={classes.titlePersonal}>История заказов</h1>
               <div className={classes.historyOrders}>
                  <ul className={classes.containerUl}>
                     <li>Номер</li>
                     <li>Дата</li>
                     <li>Статус</li>
                     <li>Сумма</li>
                  </ul>
                  <ul>
                     <li>1234567</li>
                     <li>12.06.2023</li>
                     <li>оплачено</li>
                     <li>r 12345</li>
                  </ul>
                  <ul>
                     <li>1234567</li>
                     <li>12.06.2023</li>
                     <li>отменен</li>
                     <li>r 12345</li>
                  </ul>
               </div>
               <button className={classes.showMore}>
                  Показать ещё 3 из 12
               </button>
            </section>
            {/* ---------------------------li-------------------------------------------------- */}
            <section>
               <h1 className={classes.titlePersonal}>Мои баллы</h1>
               <div className={classes.block4}>
                  <div>
                     <div className={classes.blockBallContainer}>
                        <div className={classes.square}>
                           <h1>0</h1>
                           <p>баллов</p>
                        </div>
                        <div className={classes.question}>
                           <a href="/" className={classes.rules}>
                              Правила участия
                           </a>

                           <Queston className={classes.iconArrow} />
                        </div>
                     </div>
                  </div>
                  <div>
                     <p>
                        На данный момент у вас нет баллов. Чтобы их получить
                        нужно заказать <br /> и оплатить покупку.
                        <a href="http://localhost:3000/">Перейти к товарам</a>
                     </p>
                  </div>
               </div>
            </section>
         </div>
      </div>
   )
}

export default PersonalAccount
