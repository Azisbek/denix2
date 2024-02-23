import React from 'react'
import instagram from '../../assets/icon/instagram.png'
import vk from '../../assets/icon/vk.png'
import whatsapp from '../../assets/icon/whatsapp.png'
import banImg from '../../assets/image/фото.png'
import classes from './Сontacts.module.css'
import Button from '../ui/Button'
import messageImg from '../../assets/image/mail-send 1.png'
import telegramImg from '../../assets/image/telegram (1) 1.png'
import useScrollToTop from '../../hooks/useScrollToTop'

const Сontacts = () => {
   useScrollToTop()
   return (
      <div className={classes.container}>
         <h1>Контактная информация</h1>
         <div className={classes.blcok}>
            <div>
               <img className={classes.bannerImg} src={banImg} alt="" />
            </div>
            <div className={classes.blockContacts}>
               <div className={classes.indentation}>
                  <p>Адрес:</p>
                  <p>Пролетарская улица, 132/5, Саранск</p>
               </div>

               <div className={classes.indentation}>
                  <p>Телефон:</p>
                  <p>+9960000000</p>
               </div>

               <div className={classes.indentation}>
                  <p>Электронная почта:</p>
                  <a className={classes.emailText} href="/">
                     example@gmail.com
                  </a>
               </div>

               <div className={classes.socialMedia}>
                  <p>Социальные сети</p>
                  <div>
                     <a href="/">
                        <img src={instagram} alt="Instagram" />
                     </a>
                     <a href="/">
                        <img src={vk} alt="vk" />
                     </a>
                     <a href="/">
                        <img src={whatsapp} alt="Whatsapp" />
                     </a>
                  </div>
               </div>
               <div className={classes}>
                  <p>Реквизиты</p>
                  <p>ООО «ШИННЫЙ ЦЕНТР 13»,</p>
                  <p>ИНН 1327032595, </p>
                  <p>ОГРН 1181326003726, </p>
                  <p>КПП 132701001.</p>
               </div>
            </div>
         </div>
         <div className={classes.border}>
            <h1>Расскажите нам о проблемах</h1>
            <div className={classes.containerForm}>
               <div className={classes.message}>
                  <img src={messageImg} alt="" />
               </div>
               <form action="">
                  <div className={classes.formProblems}>
                     <input type="text" placeholder="Ваше имя" />
                     <input type="text" placeholder="Телефон для связи" />
                     <input
                        type="text"
                        placeholder="Электронная почта для ответа"
                     />
                     <textarea
                        className={classes.messageInput}
                        type="text"
                        placeholder="Ваше сообщение"
                     />
                     <Button>Отправить сообщение</Button>
                  </div>
               </form>
               <div className={classes.telegram}>
                  <img src={telegramImg} alt="" />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Сontacts
