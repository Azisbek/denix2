import React from 'react'
import classes from './ApplicationAdmin.module.css'
import Button from '../../ui/Button'
import useScrollToTop from '../../../hooks/useScrollToTop'
import useResetFiliterHome from '../../../hooks/useResetFiliterHome'

const TableComponent = () => {
   useScrollToTop()
   useResetFiliterHome()
   return (
      <div className={classes.applicationAdminContainer}>
         <h1>Заявки</h1>
         <div className={classes.tableContainer}>
            <table className={classes.myTable}>
               <tr>
                  <th>ФИО</th>
                  <th>Заказ</th>
                  <th>Сумма </th>
                  <th>Статус</th>
               </tr>
               <tr>
                  <td className={classes.initialData}>Абдылаев А.</td>
                  <td className={classes.initialData}>№ 001 название шины</td>
                  <td className={classes.initialData}>1000 сом</td>
                  <td className={`${classes.initialData} ${classes.rejected}`}>
                     Отклонен
                  </td>
               </tr>
               <tr>
                  <td className={classes.initialData}>Абдылаев А.</td>
                  <td className={classes.initialData}>№ 001 название шины</td>
                  <td className={classes.initialData}>1000 сом</td>
                  <td className={`${classes.initialData} ${classes.response}`}>
                     Подтвержден
                  </td>
               </tr>
               <tr>
                  <td className={classes.initialData}>Абдылаев А.</td>
                  <td className={classes.initialData}>№ 001 название шины</td>
                  <td className={classes.initialData}>1000 сом</td>
                  <td className={classes.initialData}>{}</td>
               </tr>
               <tr>
                  <td className={classes.initialData}>Абдылаев А.</td>
                  <td className={classes.initialData}>№ 001 название шины</td>
                  <td className={classes.initialData}>1000 сом</td>
                  <td className={classes.initialData}>{}</td>
               </tr>
               <tr>
                  <td className={classes.initialData}>Абдылаев А.</td>
                  <td className={classes.initialData}>№ 001 название шины</td>
                  <td className={classes.initialData}>1000 сом</td>
                  <td className={classes.initialData}>{}</td>
               </tr>
               <tr>
                  <td className={classes.initialData}>Абдылаев А.</td>
                  <td className={classes.initialData}>№ 001 название шины</td>
                  <td className={classes.initialData}>1000 сом</td>
                  <td className={classes.initialData}>{}</td>
               </tr>
               <tr>
                  <td className={classes.initialData}>Абдылаев А.</td>
                  <td className={classes.initialData}>№ 001 название шины</td>
                  <td className={classes.initialData}>1000 сом</td>
                  <td className={classes.initialData}>{}</td>
               </tr>
               <tr>
                  <td className={classes.initialData}>Абдылаев А.</td>
                  <td className={classes.initialData}>№ 001 название шины</td>
                  <td className={classes.initialData}>1000 сом</td>
                  <td className={classes.initialData}>{}</td>
               </tr>
               <tr>
                  <td className={classes.initialData}>Абдылаев А.</td>
                  <td className={classes.initialData}>№ 001 название шины</td>
                  <td className={classes.initialData}>1000 сом</td>
                  <td className={classes.initialData}>{}</td>
               </tr>
               <tr>
                  <td className={classes.initialData}>Абдылаев А.</td>
                  <td className={classes.initialData}>№ 001 название шины</td>
                  <td className={classes.initialData}>1000 сом</td>
                  <td className={classes.initialData}>{}</td>
               </tr>
               <tr>
                  <td className={classes.initialData}>Абдылаев А.</td>
                  <td className={classes.initialData}>№ 001 название шины</td>
                  <td className={classes.initialData}>1000 сом</td>
                  <td className={classes.initialData}>{}</td>
               </tr>
               <tr>
                  <td className={classes.initialData}>Абдылаев А.</td>
                  <td className={classes.initialData}>№ 001 название шины</td>
                  <td className={classes.initialData}>1000 сом</td>
                  <td className={classes.initialData}>{}</td>
               </tr>
               <tr>
                  <td className={classes.initialData}>Абдылаев А.</td>
                  <td className={classes.initialData}>№ 001 название шины</td>
                  <td className={classes.initialData}>1000 сом</td>
                  <td className={classes.initialData}>{}</td>
               </tr>
               <tr>
                  <td className={classes.initialData}>Абдылаев А.</td>
                  <td className={classes.initialData}>№ 001 название шины</td>
                  <td className={classes.initialData}>1000 сом</td>
                  <td className={classes.initialData}>{}</td>
               </tr>
            </table>
         </div>
         <Button>Сохранить</Button> <br />
         <Button>Сбросить</Button>
      </div>
   )
}

export default TableComponent
