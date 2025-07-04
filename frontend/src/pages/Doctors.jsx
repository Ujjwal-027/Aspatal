import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctors = () => {

  const{ speciality } = useParams()
  const [filterDoc, SetFilterDoc] = useState([])

  const navigate = useNavigate()

  const {doctors} = useContext(AppContext)

  const applyFilter = () => {
    if(speciality){
      SetFilterDoc(doctors.filter(doc=>doc.speciality === speciality))
    } else {
      SetFilterDoc(doctors)
    }
  }

  useEffect(()=>{
    applyFilter()
  }, [doctors, speciality])

  const specialities = [
    "General physician", "Gynecologist", "Dermatologist",
    "Pediatricians", "Neurologist", "Gastroenterologist",
    "All Doctors"
  ]

  return (
    <div>
      <p className='text-3xl font-medium flex flex-col items-center gap-4 py-16 bg-orange-300 text-gray-600'>Browse through the doctors specialist.</p>
      <div>
        <div>
          {specialities.map((spec, i) => (
            <p key={i} onClick={() => navigate(`/doctors/${spec}`)} className="flex bg-slate-500 item-center justify-between border-blue-200 rounded-xl cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
              {spec}
            </p>
          ))}
        </div>
        <div className='flex flex-col items-center gap-4 my-16 text-gray-90 md:mx-10 bg-red-800'>
          <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
            {
              filterDoc.map((item, index)=>(
                <div onClick={()=>navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                  <img className='bg-green-50' src={item.image} alt="" /> 
                  <div className='p-4'>
                    <div className='flex item-center gap-2 text-sm text-center text-green-500'>
                        <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                    </div>
                    <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                    <p className='text-gray-900 text-sm'>{item.speciality}</p>
                  </div>
                  

                  
                </div>
              ))
            }
          </div> 
        </div>
      </div>


          <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
            {
              filterDoc.map((item, index)=>(
                <div onClick={()=>navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                  <img className='bg-green-50' src={item.image} alt="" /> 
                  <div className='p-4'>
                    <div className='flex item-center gap-2 text-sm text-center text-green-500'>
                        <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                    </div>
                    <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                    <p className='text-gray-900 text-sm'>{item.speciality}</p>
                  </div>
            
    </div>
  )
}

export default Doctors
