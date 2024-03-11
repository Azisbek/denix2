import React from 'react'
import classes from './Guarantee.module.css'

const Guarantee = () => {
   return (
      <div className={classes.container}>
         <div className={classes.contentBox}>
            <div className={classes.boxDescriptionGuarantee}>
               <h2>Стандартная гарантия</h2>
               <p>
                  Гарантийный срок — это срок, во время которого покупатель,
                  обнаружив недостаток товара, имеет право потребовать от
                  продавца или изготовителя принять меры по устранению дефекта.
                  Продавец должен устранить недостатки, если не будет доказано,
                  что они возникли вследствие нарушений покупателем правил
                  эксплуатации.
               </p>
            </div>
            <div className={classes.boxDescriptionGuarantee}>
               <h2>Кто устанавливает гарантийный срок</h2>
               <p>
                  Гарантийный срок устанавливается на каждый товар
                  производителем и указывается в документах или гарантийных
                  документах, выдаваемых продавцом.
               </p>
            </div>

            <div className={classes.boxDescriptionGuarantee2}>
               <h2>Обслуживание по гарантии включает в себя</h2>
               <ul className={classes.containerUl}>
                  <li>
                     <div className={classes.numberСircleBox}>1</div>
                     <p>
                        Устранение недостатков в специализированных сервисных
                        центрах
                     </p>
                  </li>
                  <li>
                     <div className={classes.numberСircleBox}>2</div>
                     <p>Обмен на аналогичный товар без доплаты</p>
                  </li>
                  <li>
                     <div className={classes.numberСircleBox}>3</div>
                     <p>Обмен на похожий товар с доплатой</p>
                  </li>
                  <li>
                     <div className={classes.numberСircleBox}>4</div>
                     <p>
                        Возврат товара и перечисление денежных средств на счёт
                        покупателя
                     </p>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   )
}

export default Guarantee
