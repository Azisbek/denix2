import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
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
import { postSignUp } from '../../store/signUpSlice'
import Loading from '../ui/Loading'

const SignUp = () => {
   const [showPassword, setShowPassword] = useState(false)
   const [showPasswordСonfirm, setShowPasswordСonfirm] = useState(false)

   const navigate = useNavigate()

   const dispatch = useDispatch()

   const postStatusSignUp = useSelector((state) => state.signUp.status)
   console.log(postStatusSignUp)

   useEffect(() => {
      // Проверяем статус после изменения
      if (postStatusSignUp === 'fulfilled') {
         // Если успешно, перенаправляем на /home
         navigate('/home')
      }
   }, [postStatusSignUp, navigate])

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
      password: Yup.string()
         .required('Необходим пароль')
         .min(5, 'Пароль должен быть не менее 5 символов'),
      confirmPassword: Yup.string()
         .oneOf([Yup.ref('password'), null], 'Пароли должны совпадать')
         .required('Подтвердите пароль')
         .test(
            'passwords-match',
            'Пароли должны совпадать',
            (value, { parent }) => parent.password === value
         ),
   })

   const initialValues = {
      name: '',
      surname: '',
      email: '',
      password: '',
      confirmPassword: '',
   }

   const formSubmitHandler = (data) => {
      if (data && data.preventDefault) {
         data.preventDefault()
      }

      dispatch(postSignUp(data))
   }

   return (
      <>
         {postStatusSignUp === 'loading' && <Loading />}
         <Formik
            onSubmit={formSubmitHandler}
            initialValues={initialValues}
            validationSchema={validationSchema}
         >
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
                        <Link to="/sign-in"> Войти</Link>
                     </p>
                  </div>

                  <div className={classes.containerForm}>
                     <div>
                        <Field
                           type="text"
                           id="name"
                           name="name"
                           placeholder="Имя"
                        />
                        <ErrorMessage
                           className={classes.errorMessageEmail}
                           name="name"
                           component="div"
                        />
                     </div>
                     <div>
                        <Field
                           type="text"
                           id="surname"
                           name="surname"
                           placeholder="Фамилия"
                        />
                        <ErrorMessage
                           className={classes.errorMessageEmail}
                           name="surname"
                           component="div"
                        />
                     </div>
                     <div>
                        <Field
                           type="email"
                           id="email"
                           name="email"
                           placeholder="Введите логин"
                        />
                        <ErrorMessage
                           className={classes.errorMessageEmail}
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

                  <Button type="submit" className={classes.button}>
                     Зарегистрироваться
                  </Button>
               </div>
            </Form>
         </Formik>
      </>
   )
}

export default SignUp
