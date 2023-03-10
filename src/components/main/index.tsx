import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <main className='flex-auto'>
      <Outlet />
    </main>
  )
}

export default Main