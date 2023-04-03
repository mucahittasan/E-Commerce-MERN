import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import PageLoading from '../pageLoading'

const Main = () => {
  return (
    <main className='flex-auto min-h-screenSize md:mt-[77px] mt-[62px]'>
      <Suspense fallback={<PageLoading />}>
        <Outlet />
      </Suspense>
    </main>
  )
}

export default Main