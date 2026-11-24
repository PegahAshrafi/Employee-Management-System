
'use client'
import React, { use, useState } from 'react'
import Sidebar from '../components/Sidebar';
interface AdminLayoutProps{
  children: React.ReactNode;
}
const AdminLayout = ({children}:AdminLayoutProps) => {
  return(
   <div className='flex min-h-screen'>
     <Sidebar/>
     <main className='flex-1 p-6'>{children}
     </main>
   </div>
   );
};

export default AdminLayout;


