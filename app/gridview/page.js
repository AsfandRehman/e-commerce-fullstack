"use client";
import SecondHome from '@/components/gridview/SecondHome';
import Breadcrumb from '@/components/listview/BreadCrumb';
import React from 'react'

const page = () => {
  return (
    <div>
        <Breadcrumb/>
        <SecondHome/>
    </div>
  )
}

export default page

// grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl"