// Icons
import { AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai';
import { SlBasket } from 'react-icons/sl';
import { RxHamburgerMenu } from 'react-icons/rx';
// Libraries
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { useSelector } from 'react-redux';
// Redux Store Types
import { RootState } from '../../redux/store';


const Header = () => {

  const basketLength = useSelector((state: RootState) => state.basket.basket.length);
  const favoritesLength = useSelector((state: RootState) => state.favorite.favorites.length);

  const navigate = useNavigate()

  // Search content open/close
  const [searchActive, setSearchActive] = useState<boolean>(false);

  // Hamburger menu open/close
  const [activeHamburger, setActiveHamburger] = useState<boolean>(false);

  const headerSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    navigate("/search")
    setSearchActive(false)
  }

  return (
    <header className='content px-4 py-2 flex md:justify-start justify-between items-center border-b-[1px] border-gray-200'>
      <Link to="/" className="font-bold text-[30px] md:text-[40px] logo">
        stealim
      </Link>

      {/* Desktop Screen Navbar */}

      <nav className='md:block hidden'>
        <ul className='flex items-center ml-12'>
          <li>
            <NavLink className='nav-item' to="/shop">Alışveriş</NavLink>
          </li>
          <li>
            <NavLink className='nav-item' to="/categories">Kategoriler</NavLink>
          </li>
          <li>
            <NavLink className='nav-item' to="/contact">İletişim</NavLink>
          </li>
        </ul>
      </nav>

      <div className="md:flex hidden ml-auto gap-8">
        <div className='relative group'>
          <label className='flex cursor-pointer'>
            <AiOutlineSearch className='text-2xl mr-2' onClick={() => setSearchActive(true)} />
            <div className={`z-50 fixed left-0 top-0 pt-[200px] flex justify-center bg-slate-900 w-full h-full transition-all ease-linear ${!searchActive && "opacity-0 invisible"} ${searchActive && "opacity-[0.98] visible"}`}>
              <form className='w-full flex justify-center' onSubmit={(e) => headerSubmit(e)}>
                <input
                  className={`border-b-2 min-w-[320px] w-1/2 h-12 rounded-md placeholder:text-black px-2 text-black font-medium outline-none`}
                  type="text"
                  placeholder='Ara..' />
              </form>

              <button onClick={() => setSearchActive(false)} className='absolute md:right-20 right-[10px] text-3xl top-20 text-white transition-colors hover:text-primaryRed'>
                x
              </button>
            </div>
          </label>
        </div>

        <Link to="/favorites" className='relative group'>
          <AiOutlineHeart className='text-2xl' />
          <div className="hover-information transition-all group-hover:opacity-[1] group-hover:visible">
            Favoriler
          </div>
          {favoritesLength > 0 &&
            <span className='absolute aspect-square top-[-5px] right-[-5px] text-xs min-w-[15px] min-h-[15px] flex items-center justify-center bg-primaryRed text-white rounded-full'>{favoritesLength}</span>
          }
        </Link>

        <Link to="/basket" className='relative group'>
          <SlBasket className='text-2xl' />
          <div className="hover-information transition-all group-hover:opacity-[1] group-hover:visible">
            Sepet
          </div>
          {basketLength > 0 &&
            <span className='absolute aspect-square top-[-5px] right-[-5px] text-xs min-w-[15px] min-h-[15px] flex items-center justify-center bg-primaryRed text-white rounded-full'>{basketLength}</span>
          }
        </Link>

      </div>

      <button onClick={() => setActiveHamburger(true)} className='text-2xl md:hidden block ml-auto'>
        <RxHamburgerMenu />
      </button>

      {/* -------------------------------------------------------------------------------------------- */}

      {/* Mobile Screen Navbar */}
      <nav className={`${!activeHamburger && "invisible"} ${activeHamburger && "opacity-[1] visible"} transition-all duration-300 z-[999] opacity-0  fixed right-0 bg-[rgba(0,0,0,.8)] h-screen top-0 w-full`}>
        <div className={`${activeHamburger && "translate-y-0"} ${!activeHamburger && "translate-y-[100%]"} transition-all duration-300  mt-4 pt-16 bg-white flex flex-col items-center gap-y-7 ml-auto h-screen rounded-tl-[2.375rem] rounded-tr-[2.375rem] `}>
          <ul className='flex items-center flex-col gap-y-6'>
            <li>
              <NavLink className='nav-item text pb-4' to="/shop">Alışveriş</NavLink>
            </li>
            <li>
              <NavLink className='nav-item text pb-4' to="/categories">Kategoriler</NavLink>
            </li>
            <li>
              <NavLink className='nav-item text pb-4' to="/contact">İletişim</NavLink>
            </li>
          </ul>
          <div className="flex gap-8 mt-12">
            <div className='relative group'>
              <label className='flex cursor-pointer'>
                <AiOutlineSearch className='text-2xl mr-2' onClick={() => setSearchActive(true)} />
                <div className={`z-50 fixed left-0 top-0 pt-[200px] flex justify-center bg-slate-900 w-full h-full transition-all ease-linear ${!searchActive && "opacity-0 invisible"} ${searchActive && "opacity-[0.98] visible"}`}>
                  <form className='w-full flex justify-center' onSubmit={(e) => headerSubmit(e)}>
                    <input
                      className={`border-b-2 min-w-[320px] w-1/2 h-12 rounded-md placeholder:text-black px-2 text-black font-medium outline-none`}
                      type="text"
                      placeholder='Ara..' />
                  </form>

                  <button onClick={() => setSearchActive(false)} className='absolute md:right-20 right-[10px] text-3xl top-20 text-white transition-colors hover:text-primaryRed'>
                    x
                  </button>
                </div>
              </label>
            </div>

            <Link to="/favorites" className='relative group'>
              <AiOutlineHeart className='text-2xl' />
              <div className="hover-information transition-all group-hover:opacity-[1] group-hover:visible">
                Favoriler
              </div>
              {favoritesLength > 0 &&
                <span className='absolute aspect-square top-[-5px] right-[-5px] text-xs min-w-[15px] min-h-[15px] flex items-center justify-center bg-primaryRed text-white rounded-full'>{favoritesLength}</span>
              }
            </Link>

            <Link to="/basket" className='relative group'>
              <SlBasket className='text-2xl' />
              <div className="hover-information transition-all group-hover:opacity-[1] group-hover:visible">
                Sepet
              </div>
              {basketLength > 0 &&
                <span className='absolute aspect-square top-[-5px] right-[-5px] text-xs min-w-[15px] min-h-[15px] flex items-center justify-center bg-primaryRed text-white rounded-full'>{basketLength}</span>
              }
            </Link>
          </div>
          <button onClick={() => setActiveHamburger(false)} className='absolute right-5 top-5 text-xl font-medium hover:text-primaryRed'>
            X
          </button>
        </div>
      </nav>

    </header>
  )
}

export default Header;