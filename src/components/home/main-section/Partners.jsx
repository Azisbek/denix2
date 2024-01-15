import React from 'react'
import classes from './Partners.module.css'
import sitec from '../../assets/image/sitec.png'
import bushRanger from '../../assets/image/bushRanger.png'
import delta from '../../assets/image/delta.png'
import goform from '../../assets/image/goform.png'
import unitto from '../../assets/image/unitto.png'
import tigar from '../../assets/image/tigar.png'
import turvana from '../../assets/image/turvana.png'
import michelin from '../../assets/image/michelin.png'
import continental from '../../assets/image/continental.png'
import goodRide from '../../assets/image/goodRide.png'
import nokianTyres from '../../assets/image/nokianTyres.png'
import toyoTires from '../../assets/image/toyoTires.png'
import gerat from '../../assets/image/gerat.png'
import barum from '../../assets/image/barum.png'
import dunlop from '../../assets/image/dunlop.png'
import goodYear from '../../assets/image/goodYear.png'
import nokianTyresGrey from '../../assets/image/nokianTyresGrey.png'
import triangle from '../../assets/image/triangle.png'
import liquiMoly from '../../assets/image/liquiMoly.png'
import bfGoodrich from '../../assets/image/bfGoodrich.png'
import generalTire from '../../assets/image/generalTire.png'
import kumhoTyre from '../../assets/image/kumhoTyre.png'
import pirelli from '../../assets/image/pirelli.png'
import uniroyal from '../../assets/image/uniroyal.png'
import arb from '../../assets/image/arb.png'
import bridgestone from '../../assets/image/bridgestone.png'
import gislaved from '../../assets/image/gislaved.png'
import matador from '../../assets/image/matador.png'
import roadcruza from '../../assets/image/roadcruza.png'
import yokohama from '../../assets/image/yokohama.png'

const Partners = () => {
   return (
      <section className={classes.contentPartners}>
         <div className={classes.boxPartners}>
            <div className={classes.columnPartners}>
               <img src={sitec} alt="Наш партнер" />
               <img src={bushRanger} alt="Наш партнер" />
               <img src={delta} alt="Наш партнер" />
               <img src={goform} alt="Наш партнер" />
               <img src={unitto} alt="Наш партнер" />
               <img src={tigar} alt="Наш партнер" />
            </div>

            <div className={classes.columnPartners}>
               <img src={turvana} alt="Наш партнер" />
               <img src={michelin} alt="Наш партнер" />
               <img src={continental} alt="Наш партнер" />
               <img src={goodRide} alt="Наш партнер" />
               <img src={nokianTyres} alt="Наш партнер" />
               <img src={toyoTires} alt="Наш партнер" />
            </div>

            <div className={classes.columnPartners}>
               <img src={gerat} alt="Наш партнер" />
               <img src={barum} alt="Наш партнер" />
               <img src={dunlop} alt="Наш партнер" />
               <img src={goodYear} alt="Наш партнер" />
               <img src={nokianTyresGrey} alt="Наш партнер" />
               <img src={triangle} alt="Наш партнер" />
            </div>

            <div className={classes.columnPartners}>
               <img src={liquiMoly} alt="Наш партнер" />
               <img src={bfGoodrich} alt="Наш партнер" />
               <img src={generalTire} alt="Наш партнер" />
               <img src={kumhoTyre} alt="Наш партнер" />
               <img src={pirelli} alt="Наш партнер" />
               <img src={uniroyal} alt="Наш партнер" />
            </div>

            <div className={classes.columnPartners}>
               <img src={arb} alt="Наш партнер" />
               <img src={bridgestone} alt="Наш партнер" />
               <img src={gislaved} alt="Наш партнер" />
               <img src={matador} alt="Наш партнер" />
               <img src={roadcruza} alt="Наш партнер" />
               <img src={yokohama} alt="Наш партнер" />
            </div>
         </div>
      </section>
   )
}

export default Partners
