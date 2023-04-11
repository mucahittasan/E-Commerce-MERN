import React from 'react'
import { BiMoon } from 'react-icons/bi'
import { CiSun } from 'react-icons/ci'

const DarkModeButton = () => {

    const toggleDarkButton = () => {

        localStorage.theme === "dark" ? localStorage.theme = "light" : localStorage.theme = "dark"

        if (localStorage.theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }

    React.useEffect(() => {

        if (localStorage.theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }

    }, [])

    return (
        <button onClick={() => toggleDarkButton()} className='cursor-pointer bg-white px-[2px] border-[1px] border-veryDarkBlue text-veryDarkBlue relative flex w-[60px] h-[30px] rounded-[50px] transition-all duration-200 justify-between items-center text-2xl'>
            <CiSun className='z-[1]' />
            <BiMoon className='z-[1]' />
            <span className='absolute top-[50%] translate-y-[-50%] translate-x-[30px] dark:translate-x-[0px] bg-veryDarkBlue w-[24px] h-[24px] rounded-full transition-all duration-200'></span>
        </button>
    )
}

export default DarkModeButton