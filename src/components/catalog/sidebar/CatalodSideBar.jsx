import React from 'react'
import classes from './CatalogSideBar.module.css'

const CatalodSideBar = () => {
   return (
      <form className={classes.tieres}>
         <h1>Шины в Бишкеке</h1>
         <p className={classes.tieresTitle}>
            Ширина <span className={classes.tieresSpan}>?</span>
         </p>
         <select name="Все" id="">
            <option value="Все">Все</option>
            <option value="Все">Все</option>
            <option value="Все">Все</option>
         </select>
         <p className={classes.tieresTitle}>
            Профиль <span className={classes.tieresSpan}>?</span>
         </p>
         <select name="Все" id="">
            <option value="Все">Все</option>
            <option value="Все">Все</option>
            <option value="Все">Все</option>
         </select>
         <p className={classes.tieresTitle}>
            Диаметр <span className={classes.tieresSpan}>?</span>
         </p>
         <select name="Все" id="">
            <option value="Все">Все</option>
            <option value="Все">Все</option>
            <option value="Все">Все</option>
         </select>
         <p className={classes.tieresTitle}>Цена</p>
         <div className={classes.price}>
            <input type="text" placeholder="от 1234" />
            <input type="text" placeholder="до 50234" /> <br />
            <input type="range" name="" id="" />
         </div>
         <div className={classes.tireType}>
            <p>Тип шин</p>
            <label>
               <input type="checkbox" name="option1" /> Легковое
            </label>

            <label>
               <input type="checkbox" name="option2" />
               Внедорожник (SUV)
            </label>

            <label>
               <input type="checkbox" name="option3" /> Легкогрузовой (LTR)
            </label>
            <p>Сезонность</p>
            <label>
               <input type="checkbox" name="option1" /> Зима
            </label>

            <label>
               <input type="checkbox" name="option2" /> Лето
            </label>

            <label>
               <input type="checkbox" name="option3" /> Всесезонное
            </label>
            <p>Состояние</p>
            <label>
               <input type="checkbox" name="option1" /> Только новые
            </label>
         </div>
         <div className={classes.inputContainer}>
            <p>Производитель</p>
            <span className={classes.icon}>🔍</span>
            <input
               type="text"
               className={classes.inputText}
               placeholder="Введите название"
            />
         </div>
         <div>
            <label>
               <input type="checkbox" name="option1" /> Опция 1
            </label>
            <label>
               <input type="checkbox" name="option1" /> Опция 1
            </label>
            <label>
               <input type="checkbox" name="option1" /> Опция 1
            </label>
            <label>
               <input type="checkbox" name="option1" /> Опция 1
            </label>
            <label>
               <input type="checkbox" name="option1" /> Опция 1
            </label>
            <a href="https://www.example.com">
               Показать все <span>(12)</span>
            </a>
         </div>
         <div>
            <p>Скидки</p>
            <label>
               <input type="checkbox" name="option1" /> Опция 1
            </label>
            <p>
               Скидки <span className={classes.tieresSpan}>?</span>
            </p>
            <label>
               <input type="checkbox" name="option1" /> Опция 1
            </label>
            <p>
               Скидки <span className={classes.tieresSpan}>?</span>
            </p>
            <label>
               <input type="checkbox" name="option1" /> Опция 1
            </label>
         </div>
         <div>
            <p className={classes.tieresTitle}>
               Профиль <span className={classes.tieresSpan}>?</span>
            </p>
            <select name="Все" id="">
               <option value="Все">Все</option>
               <option value="Все">Все</option>
               <option value="Все">Все</option>
            </select>
         </div>
         <div>
            <input type="text" placeholder="от 1234" />
            <input type="text" placeholder="до 50234" /> <br />
            <input type="range" />
         </div>
         <div>
            <p>Выберите опции:</p>
            <label>
               <input type="checkbox" name="option1" /> Опция 1
            </label>
            <label>
               <input type="checkbox" name="option1" /> Опция 1
            </label>
            <label>
               <input type="checkbox" name="option1" /> Опция 1
            </label>
            <label>
               <input type="checkbox" name="option1" /> Опция 1
            </label>
            <label>
               <input type="checkbox" name="option1" /> Опция 1
            </label>
            <label>
               <input type="checkbox" name="option1" /> Опция 1
            </label>
            <label>
               <input type="checkbox" name="option1" /> Опция 1
            </label>
            <p>Выберите опции:</p>
            <label>
               <input type="checkbox" name="option1" /> Опция 1
            </label>
            <label>
               <input type="checkbox" name="option1" /> Опция 1
            </label>
            <label>
               <input type="checkbox" name="option1" /> Опция 1
            </label>
            <label>
               <input type="checkbox" name="option1" /> Опция 1
            </label>
            <label>
               <input type="checkbox" name="option1" /> Опция 1
            </label>
            <label>
               <input type="checkbox" name="option1" /> Опция 1
            </label>
         </div>
         <div>
            <p>Уровень внешнего шума</p>
            <input type="text" placeholder="от 1234" />
            <input type="text" placeholder="до 50234" /> <br />
            <input type="range" />
         </div>
         <div>
            <button>Подобрать</button>
            <button>Сбросить все</button>
         </div>
      </form>
   )
}

export default CatalodSideBar
