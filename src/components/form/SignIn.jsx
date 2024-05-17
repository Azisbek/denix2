import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import classes from './SignIn.module.css'
import Button from '../ui/Button'
import google from '../../assets/icon/google 1.png'
import apple from '../../assets/icon/apple.png'
import facebook from '../../assets/icon/facebook (1).png'
import email from '../../assets/icon/email.png'
import visible from '../../assets/icon/visible.png'
import hide from '../../assets/icon/hide.png'
import { postSignIn } from '../../store/signInSlice'
import Loading from '../ui/Loading'

const SignIn = () => {
   const [showPassword, setShowPassword] = useState(false)
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const togglePasswordVisibility = () => {
      setShowPassword((prevShowPassword) => !prevShowPassword)
   }

   const postStatusSignIn = useSelector((state) => state.signIn.status)
   console.log(postStatusSignIn)

   useEffect(() => {
      // Проверяем статус после изменения
      if (postStatusSignIn === 'fulfilled') {
         // Если успешно, перенаправляем на /home
         navigate('/home')
      } else if (postStatusSignIn === 'rejected') {
         // Если неудачно, показываем сообщение
         alert('Не правильно')
      }
   }, [postStatusSignIn, navigate])

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

   const formSubmitHandler = async (data) => {
      if (data && data.preventDefault) {
         data.preventDefault()
      }
      dispatch(postSignIn(data))
   }

   return (
      <>
         {postStatusSignIn === 'loading' && <Loading />}
         <Formik
            onSubmit={formSubmitHandler}
            initialValues={initialValues}
            validationSchema={validationSchema}
         >
            <Form className={classes.form}>
               <div className={classes.container}>
                  <h2>Вход</h2>
                  <div className={classes.blockText}>
                     <p>Новый пользователь?</p>
                     <Link to="/sign-up"> Создать учетную запись</Link>
                  </div>

                  <div className={classes.containerForm}>
                     <div>
                        <Field
                           type="email"
                           id="email"
                           name="email"
                           placeholder="Введите логин"
                        />
                        <div className={classes.errorMessageContainer2}>
                           <ErrorMessage
                              className={classes.errorMessageEmail}
                              name="email"
                              component="div"
                           />
                        </div>
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
                        <div className={classes.errorMessageContainer}>
                           <ErrorMessage
                              className={classes.errorMessage}
                              name="password"
                              component="div"
                           />
                        </div>
                     </div>
                  </div>

                  <Button type="submit" className={classes.button}>
                     Войти
                  </Button>
                  <div className={classes.containerPath}>
                     <p>Войти с помощью</p>
                     <div>
                        <a href="/" aria-label="Google Login">
                           <img src={google} alt="Google Login" />
                        </a>
                        <a href="/" aria-label="Apple Login">
                           <img src={apple} alt="Apple Login" />
                        </a>
                        <a href="/" aria-label="Facebook Login">
                           <img src={facebook} alt="Facebook Login" />
                        </a>
                        <a href="/" aria-label="Email Login">
                           <img src={email} alt="Email Login" />
                        </a>
                     </div>
                  </div>
               </div>
            </Form>
         </Formik>
      </>
   )
}

export default SignIn
