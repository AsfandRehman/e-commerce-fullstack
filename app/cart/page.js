"use client"
import CartPageLayout from '@/components/cartdetails/CartPage'
import SavedForLater from '@/components/cartdetails/SavedForLater'
import DiscountBanner from '@/components/productdetails/DiscountBanner'
import { useAppContext } from '@/context/AppContext'
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
  const {productsData} = useAppContext()
    const {id} = useParams() 
    const product = productsData.find((e)=> e._id === Number(id));
  return (
    <div>
        <CartPageLayout/>
        <SavedForLater product={product}/>
        <div className='my-4'>
        <DiscountBanner/>
        </div>
        
    </div>
  )
}

export default page