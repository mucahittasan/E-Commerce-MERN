import { BiUser } from 'react-icons/bi'
import { Link } from 'react-router-dom'

type UserLoginButtonProps = {
    setActiveHamburger: (name: boolean) => void
}

const UserLoginButton: React.FC<UserLoginButtonProps> = ({ setActiveHamburger }) => {
    return (
        <div className='relative group cursor-pointer py-5'>
            <BiUser className='text-2xl dark:text-white transition-all duration-200' />
            <div className='user-login-hover top-14 transition-all group-hover:opacity-[1] group-hover:visible gap-y-2 flex flex-col'>
                <Link onClick={() => setActiveHamburger(false)} to="/login" className='min-w-[90%] flex flex-col items-center justify-center min-h-[30px] font-semibold bg-primaryRed text-white hover:scale-[1.03] transition-all rounded-md'>Giriş Yap</Link>
                <Link onClick={() => setActiveHamburger(false)} to="/register" className='min-w-[90%] flex flex-col items-center justify-center min-h-[30px] font-semibold bg-white rounded-md hover:scale-[1.03] transition-all'>Kayıt Ol</Link>
            </div>
        </div>

    )
}

export default UserLoginButton