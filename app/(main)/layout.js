import { Divide } from 'lucide-react'
import React from 'react'

const MainLayout = ({children}) => {
  return (
    <div className='container mx-auto my-32'>
    {children}
    </div>
  )
}

export default MainLayout