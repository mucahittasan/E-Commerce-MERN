import {AiOutlineHeart, AiOutlineSearch} from 'react-icons/ai';
import {SlBasket} from 'react-icons/sl';
import {RxHamburgerMenu} from 'react-icons/rx';

import { Link } from 'react-router-dom'
import { useState } from 'react';


const Header = () => {

  // Search content open/close
  const [searchActive, setSearchActive] = useState<boolean>(false);
  
  // Hamburger menu open/close
  const [activeHamburger, setActiveHamburger] = useState<boolean>(false);

  return (
    <header className='content p-2 flex md:justify-start justify-between items-center border-b-[1px] border-gray-200'>
        <Link to="/" className="font-bold text-[30px] md:text-[40px] logo">
          stealim
        </Link>

        {/* Desktop Screen Navbar */}

        <nav className='md:block hidden'>
          <ul className='flex items-center ml-12'>
            <li>
              <Link className='nav-item' to="/shop">Shop</Link>
            </li>
            <li>
              <Link className='nav-item' to="/categories">Categories</Link>
            </li>
            <li>
              <Link className='nav-item' to="/shop">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="md:flex hidden ml-auto gap-8">
          <button className='relative group'>
            <label className='flex cursor-pointer'>
              <AiOutlineSearch className='text-2xl mr-2' onClick={() => setSearchActive(true)}/>
              <div className={`z-50 fixed left-0 top-0 pt-[200px] flex justify-center bg-slate-900 w-full h-full transition-all ease-linear ${!searchActive && "opacity-0 invisible"} ${searchActive && "opacity-90 visible"}`}>
                <input 
                  className={`border-b-2 min-w-[320px] w-1/2 h-12 rounded-md placeholder:text-black px-2 text-black font-medium outline-none`}
                  type="text" 
                  placeholder='Search..' />
                  
                <button onClick={() => setSearchActive(false)} className='absolute md:right-20 right-[10px] text-3xl top-20 text-white transition-colors hover:text-primaryOrange'>
                  x
                </button>
              </div>
            </label>
          </button>

          <Link to="/favorites" className='relative group'>
            <AiOutlineHeart className='text-2xl'/>
            <div className="hover-information transition-all group-hover:opacity-[1] group-hover:visible">
              Favorites
            </div>
            <span className='absolute top-[-5px] right-[-5px] text-xs min-w-[15px] min-h-[15px] flex items-center justify-center bg-primaryOrange text-white rounded-full'>1</span>
          </Link>

          <Link to="/basket" className='relative group'>
            <SlBasket className='text-2xl'/>
            <div className="hover-information transition-all group-hover:opacity-[1] group-hover:visible">
              Basket
            </div>
            <span className='absolute top-[-5px] right-[-5px] text-xs min-w-[15px] min-h-[15px] flex items-center justify-center bg-primaryOrange text-white rounded-full'>1</span>
          </Link>
        </div>

        <button onClick={() => setActiveHamburger(true)} className='text-2xl md:hidden block ml-auto'>
          <RxHamburgerMenu />
        </button>


        {/* -------------------------------------------------------------------------------------------- */}

        {/* Mobile Screen Navbar */}
        <nav className={`${!activeHamburger && "invisible"} ${activeHamburger && "opacity-[1] visible"} transition-all duration-300 opacity-0  fixed right-0 bg-[rgba(0,0,0,.8)] h-screen top-0 w-full`}>
          <div className={`${activeHamburger && "translate-y-0"} ${!activeHamburger && "translate-y-[100%]"} transition-all duration-300  mt-4 pt-16 bg-white flex flex-col items-center gap-y-7 ml-auto h-screen rounded-tl-[2.375rem] rounded-tr-[2.375rem] `}>
            <ul className='flex items-center flex-col gap-y-6'>
              <li>
                <Link className='nav-item text-xl' to="/shop">Shop</Link>
              </li>
              <li>
                <Link className='nav-item text-xl' to="/categories">Categories</Link>
              </li>
              <li>
                <Link className='nav-item text-xl' to="/shop">Contact</Link>
              </li>
            </ul>
            <div className="flex gap-8 mt-12">
            <button className='relative group'>
              <label className='flex cursor-pointer'>
                <AiOutlineSearch className='text-2xl mr-2' onClick={() => setSearchActive(true)}/>
                <div className={`z-50 fixed left-0 top-0 pt-[200px] flex justify-center bg-slate-900 w-full h-full transition-all ease-linear ${!searchActive && "opacity-0 invisible"} ${searchActive && "opacity-90 visible"}`}>
                  <input 
                    className={`border-b-2 min-w-[320px] w-1/2 h-12 rounded-md placeholder:text-black px-2 text-black font-medium outline-none`}
                    type="text" 
                    placeholder='Search..' />
                    
                  <button onClick={() => setSearchActive(false)} className='absolute md:right-20 right-[10px] text-3xl top-20 text-white transition-colors hover:text-primaryOrange'>
                    x
                  </button>
                </div>
              </label>
            </button>

            <Link to="/favorites" className='relative group'>
              <AiOutlineHeart className='text-2xl'/>
              <div className="hover-information transition-all group-hover:opacity-[1] group-hover:visible">
                Favorites
              </div>
              <span className='absolute top-[-5px] right-[-5px] text-xs min-w-[15px] min-h-[15px] flex items-center justify-center bg-primaryOrange text-white rounded-full'>1</span>
            </Link>

            <Link to="/basket" className='relative group'>
              <SlBasket className='text-2xl'/>
              <div className="hover-information transition-all group-hover:opacity-[1] group-hover:visible">
                Basket
              </div>
              <span className='absolute top-[-5px] right-[-5px] text-xs min-w-[15px] min-h-[15px] flex items-center justify-center bg-primaryOrange text-white rounded-full'>1</span>
            </Link>
            </div>
            <button onClick={() => setActiveHamburger(false)} className='absolute right-5 top-5 text-xl font-medium hover:text-primaryOrange'>
              X
            </button>
          </div>
        </nav>

    </header>
  )
}

export default Header