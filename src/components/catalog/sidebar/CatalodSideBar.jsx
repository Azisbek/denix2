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
               <input type="checkbox" name="option1" /> Nokian
            </label>
            <label>
               <input type="checkbox" name="option1" /> Pirelli
            </label>
            <label>
               <input type="checkbox" name="option1" /> Hankook
            </label>
            <label>
               <input type="checkbox" name="option1" /> Michelin
            </label>
            <label>
               <input type="checkbox" name="option1" /> Cordiant
            </label>
            <a href="https://www.example.com">Показать все</a>
            <span>(12)</span>
         </div>
         <div>
            <p>Скидки</p>
            <label>
               <input type="checkbox" name="option1" /> Да
            </label>
            <p>
               Runflat <span className={classes.tieresSpan}>?</span>
            </p>
            <label>
               <input type="checkbox" name="option1" /> Да
            </label>
            <p>
               Off-Road <span className={classes.tieresSpan}>?</span>
            </p>
            <label>
               <input type="checkbox" name="option1" /> Да
            </label>
         </div>
         <div>
            <p className={classes.tieresTitle}>
               Индекс скорости <span className={classes.tieresSpan}>?</span>
            </p>
            <select name="H(934)" id="">
               <option value="Все">H (934)</option>
               <option value="Все">Все</option>
               <option value="Все">Все</option>
            </select>
         </div>
         <div className={classes.price}>
            <input type="text" placeholder="от 1234" />
            <input type="text" placeholder="до 50234" /> <br />
            <input type="range" />
         </div>
         <div>
            <p>Топливная экономичность</p>
            <label>
               <input type="checkbox" name="option1" /> A
            </label>
            <label>
               <input type="checkbox" name="option1" /> B
            </label>
            <label>
               <input type="checkbox" name="option1" /> C
            </label>
            <label>
               <input type="checkbox" name="option1" /> D
            </label>
            <label>
               <input type="checkbox" name="option1" /> E
            </label>
            <label>
               <input type="checkbox" name="option1" /> F
            </label>
            <label>
               <input type="checkbox" name="option1" /> G
            </label>
            <p>Сцепление с мокрой поверхностью</p>
            <label>
               <input type="checkbox" name="option1" /> A
            </label>
            <label>
               <input type="checkbox" name="option1" /> B
            </label>
            <label>
               <input type="checkbox" name="option1" /> C
            </label>
            <label>
               <input type="checkbox" name="option1" /> D
            </label>
            <label>
               <input type="checkbox" name="option1" /> E
            </label>
            <label>
               <input type="checkbox" name="option1" /> F
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
