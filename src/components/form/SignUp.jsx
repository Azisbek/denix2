import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import classes from './SignUp.module.css'
import Button from '../ui/Button'
import google from '../../assets/icon/google 1.png'
import apple from '../../assets/icon/apple.png'
import facebook from '../../assets/icon/facebook (1).png'
import email from '../../assets/icon/email.png'
import visible from '../../assets/icon/visible.png'
import hide from '../../assets/icon/hide.png'

const SignUp = () => {
   const [showPassword, setShowPassword] = useState(false)
   const [showPasswordСonfirm, setShowPasswordСonfirm] = useState(false)

   const togglePasswordVisibility = () => {
      setShowPassword((prevShowPassword) => !prevShowPassword)
   }
   const togglePasswordСonfirm = () => {
      setShowPasswordСonfirm((prevShowPassword) => !prevShowPassword)
   }

   const validationSchema = Yup.object({
      email: Yup.string()
         .email('Неверный формат адреса')
         .required('Требуется электронная почта'),
      password: Yup.string().required('Необходим пароль'),
   })

   const initialValues = {
      email: '',
      password: '',
   }

   return (
      <Formik initialValues={initialValues} validationSchema={validationSchema}>
         <Form className={classes.form}>
            <div className={classes.container}>
               <h2>Создать учетную запись</h2>
               <div className={classes.containerPath}>
                  <div>
                     <a href="/" aria-label="Google Login">
                        <img src={google} alt="Google Login" />
                     </a>
                     <a href="/" aria-label="apple Login">
                        <img src={apple} alt="apple Login" />
                     </a>
                     <a href="/" aria-label="apple Login">
                        <img src={facebook} alt="apple Login" />
                     </a>
                     <a href="/" aria-label="apple Login">
                        <img src={email} alt="apple Login" />
                     </a>
                  </div>
               </div>
               <div className={classes.blockText}>
                  <p>
                     Зарегистрируйтесь с помощью электронной почты У вас уже
                     есть учетная запись?
                     <a href="/"> Войти</a>
                  </p>
               </div>

               <div className={classes.containerForm}>
                  <div>
                     <Field
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Введите логин"
                     />
                     <ErrorMessage
                        className={classes.errorMessage}
                        name="email"
                        component="div"
                     />
                  </div>

                  <div className={classes.passwordField}>
                     <Field
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        name="password"
                        placeholder="Введите пароль"
                     />
                     <span
                        className={classes.togglePassword}
                        onClick={togglePasswordVisibility}
                        role="button"
                        tabIndex="0"
                     >
                        {showPassword ? (
                           <img src={hide} alt="Hide Password" />
                        ) : (
                           <img src={visible} alt="Show Password" />
                        )}
                     </span>

                     <ErrorMessage
                        className={classes.errorMessage}
                        name="password"
                        component="div"
                     />
                  </div>
                  <div className={classes.passwordField}>
                     <Field
                        type={showPasswordСonfirm ? 'text' : 'password'}
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Подтвердите пароль"
                     />
                     <span
                        className={classes.togglePassword}
                        onClick={togglePasswordСonfirm}
                        role="button"
                        tabIndex="0"
                     >
                        {showPasswordСonfirm ? (
                           <img src={hide} alt="Hide Password" />
                        ) : (
                           <img src={visible} alt="Show Password" />
                        )}
                     </span>
                  </div>
               </div>

               <Button className={classes.button}>Зарегистрироваться</Button>
            </div>
         </Form>
      </Formik>
   )
}

export default SignUp
