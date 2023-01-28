import { Link } from 'react-router-dom'
import {AiOutlineHeart, AiOutlineSearch} from 'react-icons/ai';
import {SlBasket} from 'react-icons/sl';


const Header = () => {
  return (
    <header className='container p-2 flex items-center border-b-[1px] border-gray-200'>
        <Link to="/" className="font-bold text-[40px] logo">
          stealim
        </Link>

        <nav>
          <ul className='flex items-center ml-12'>
            <li>
              <Link className='nav-item' to="/categories" >Categories</Link>
            </li>
            <li>
              <Link className='nav-item' to="/shop">Shop</Link>
            </li>
            <li>
              <Link className='nav-item' to="/shop">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className='flex ml-auto gap-8'>
          <button className='relative group'>
            <label className='flex cursor-pointer'>
              <AiOutlineSearch className='text-2xl' />
              <input className='w-0' type="text" placeholder='Search..' />
            </label>
            <div className="hover-information transition-all group-hover:opacity-[1] group-hover:visible">
              Search
            </div>
          </button>

          <Link to="/favorites" className='relative group'>
            <AiOutlineHeart className='text-2xl'/>
            <div className="hover-information transition-all group-hover:opacity-[1] group-hover:visible">
              Favorites
            </div>
          </Link>

          <Link to="/basket" className='relative group'>
            <SlBasket className='text-2xl'/>
            <div className="hover-information transition-all group-hover:opacity-[1] group-hover:visible">
              Basket
            </div>
          </Link>
        </div>

    </header>
  )
}

export default Header