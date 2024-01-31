import React from 'react'
import classes from './PersonalAccount.module.css'
// import icon from '../../assets/icon/Icon 16/down.png'
import iconn from '../../assets/icon/Icon 16/Link.png'
import iconnn from '../../assets/icon/circle/Icon 16/info.png'
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
                     />{' '}
                  </p>
                  <p>
                     Избранное{' '}
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
               <div className={classes.mainList}>
                  <ul className={classes.containerList}>
                     <li className={classes.namesList}>Номер</li>
                     <li>1234567</li>
                     <li>1234567</li>
                  </ul>
                  <ul className={classes.containerList}>
                     <li className={classes.namesList}>Дата</li>
                     <li>20.01.2024</li>
                     <li>20.01.2024</li>
                  </ul>
                  <ul className={classes.containerList}>
                     <li className={classes.namesList}>Статус</li>
                     <li className={classes.paid}>Оплачено</li>
                     <li className={classes.cancelled}>Отменен</li>
                  </ul>
                  <ul className={classes.containerList}>
                     <li className={classes.namesList}>Сумма</li>
                     <li>12 3456с</li>
                     <li>12 3456с</li>
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
                     <div className={classes.square}>
                        <h1>0</h1>
                        <p>баллов</p>
                     </div>
                     <div className={classes.question}>
                        <input
                           className={classes.rules}
                           type="text"
                           placeholder="Правила участия"
                        />
                        <img
                           className={classes.iconArrow}
                           src={iconnn}
                           alt=""
                        />
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


