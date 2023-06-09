// Libraries
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Components
import PageLoading from '../features/pageLoading'

const Main = () => {
  return (
    <main className='flex-auto min-h-screenSize md:mt-[77px] mt-[77px]'>
      <Suspense fallback={<PageLoading />}>
        <ToastContainer />
        <Outlet />
      </Suspense>
    </main>
  )
}

export default Main