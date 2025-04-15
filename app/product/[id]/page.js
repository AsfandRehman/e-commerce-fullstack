"use client"
import Breadcrumb from '@/components/listview/BreadCrumb'
import DiscountBanner from '@/components/productdetails/DiscountBanner'
import ProductCard from '@/components/productdetails/ProductCard'
import ProductLayout from '@/components/productdetails/ProductLayout'
import RelatedProducts from '@/components/productdetails/RelatedProducts'
import { useAppContext } from '@/context/AppContext'
import React from 'react'
import { use } from 'react';

const page = ({ params }) => {
  const {productsData} = useAppContext()
  const {id} = use(params);
  const product = productsData.find((e)=> e._id === Number(id));
  return (
    <>
    <div>
        <Breadcrumb/>
        <ProductCard id={id}/>
        <ProductLayout/>
        <RelatedProducts/>
        <DiscountBanner/>
    </div>
    </>
  )
}

export default page