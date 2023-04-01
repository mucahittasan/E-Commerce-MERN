import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <main className='flex-auto min-h-screenSize md:min-h-mobileScreenSize'>
      <Outlet />
    </main>
  )
}

export default Main