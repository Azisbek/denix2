import React from 'react'
import { useSelector } from 'react-redux'

const GeneralInformation = () => {
   const { data } = useSelector((state) => state.newPage)
   console.log(data)

   return (
      <div>
         <h2>{data.title}</h2>
         <p>{data.description}</p>
      </div>
   )
}

export default GeneralInformation
