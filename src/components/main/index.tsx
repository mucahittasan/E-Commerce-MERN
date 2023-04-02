import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <main className='flex-auto min-h-screenSize'>
      <Outlet />
    </main>
  )
}

export default Main