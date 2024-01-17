import React from 'react'
import classes from './CardDescription.module.css'

const CardDescription = () => {
   return (
      <div className={classes.tabs}>
         <ul className={classes.tabsFlex}>
            <li className={classes.tabsItem}>Общая информация</li>
            <li className={classes.tabsItem}>Характеристики</li>
            <li className={classes.tabsItem}>Гарантия</li>
            <li className={classes.tabsItem}>Оплата</li>
            <li className={classes.tabsItem}>Совместимость</li>
            <li className={classes.tabsItem}>Отзывы (2)</li>
         </ul>
         <div className={classes.block}>
            <h1 className={classes.titleCard}>
               Описание модели Cordiant Business CA1 185/75 R16C 104Q
            </h1>
            <div className={classes.blockCard}>
               <p className={classes.textCard}>
                  Чувствительность к командам водителя, а также устойчивость
                  автомобиля гарантируют установленные под специальным уклоном к
                  центру тяжести автомобиля грани средних ребер и элементов
                  грунтозацепов. Широкие борозды в форме трапеции, которые
                  покрывают внешний слой модели, помогают шине самоочищаться.
                  Они сгоняют воду и грязь под шину, что также помогает не
                  впитывать лишнюю влагу.
               </p>
               <p className={classes.textCard}>
                  Новаторская технология двух слоев каркаса, которые усиливают
                  материал, помогает машине служить намного дольше и защищает от
                  механических повреждений.
               </p>
            </div>
            <h1 className={classes.titleCard}>Характеристики модели</h1>
            <div className={classes.blockCard}>
               <p className={classes.textCard}>
                  При создании шины были применены следующие технологии: «3D
                  Mod» — рисунок протектора создавался при помощи ручного 3D
                  моделирования. Таким образом, разработчики заранее смогли
                  увидеть все недочеты и устранить их; <br /> «Contact with
                  road» — широкая площадь контакта шины с поверхностью
                  достигается за счет скошенным формам и рисунку протектора;
                  «Dissymmetric drawing» —отвод влаги к низу шины достигается
                  при помощи асимметричного рисунка протектора, что дает хорошую
                  управляемость при маневрировании.
               </p>
               <p className={classes.textCard}>
                  Как уже видно по названию, это модель специально адаптирована
                  под использование в малом или среднем бизнесе. Разработчики
                  внедрили в нее технологии, которые позволяют экономить на
                  сезонной замене шин, а также на топливе для автомобиля.
                  Высокая надежность при перевозке максимально допустимого груза
                  обеспечил усиленный каркас протектора.
               </p>
            </div>
         </div>
      </div>
   )
}

export default CardDescription
