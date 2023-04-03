import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <main className='flex-auto min-h-screenSize md:mt-[77px] mt-[62px]'>
      <Outlet />
    </main>
  )
}

export default Main