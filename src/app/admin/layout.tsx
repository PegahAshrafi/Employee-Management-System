
'use client'
import React, { Suspense, use, useState } from 'react'
import Sidebar from '../components/Sidebar';
interface AdminLayoutProps{
  children: React.ReactNode;
}
const AdminLayout = ({children}:AdminLayoutProps) => {
  return(
   <div className='flex min-h-screen'>
    <Suspense> <Sidebar/></Suspense>
     <main className='flex-1 p-6'>{children}
     </main>
   </div>
   );
};

export default AdminLayout;


