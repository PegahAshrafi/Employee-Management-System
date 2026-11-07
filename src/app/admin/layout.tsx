
import React from 'react'
import Sidebar from '../components/Sidebar';

interface AdminLayoutProps{
  chidren: React.ReactNode;
}
const AdminLayout = ({children}: AdminLayoutProps) => {
  return(
   <div className='flex'>
     <Sidebar/>
     <main>{children}</main>
   </div>
   );
};

export default AdminLayout;


