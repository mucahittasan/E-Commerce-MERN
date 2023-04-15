import { BiUser } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { AppDispatch, RootState } from '../../../redux/store'
import { logOut } from '../../../redux/register/registerSlice'
import { toast } from 'react-toastify'

type UserLoginButtonProps = {
    setActiveHamburger: (name: boolean) => void
}

const UserLoginButton: React.FC<UserLoginButtonProps> = ({ setActiveHamburger }) => {

    const user = useSelector((state: RootState) => state.register.user)

    const dispatch = useDispatch<AppDispatch>()

    const handleLogOut = () => {
        dispatch(logOut())
        toast.success("Çıkış Yapıldı!")
    }

    return (
        <div className='relative group cursor-pointer py-5'>
            <BiUser className='text-2xl dark:text-white transition-all duration-200' />
            <div className='user-login-hover top-14 transition-all group-hover:opacity-[1] group-hover:visible gap-y-2 flex flex-col'>
                {user ?
                    <>
                        {/* <Link onClick={() => setActiveHamburger(false)} to="/orders" className='min-w-[90%] flex flex-col items-center justify-center min-h-[30px] font-semibold bg-white text-veryDarkBlue hover:scale-[1.03] transition-all rounded-md'>Siparişlerim</Link> */}
                        <button onClick={() => handleLogOut()} className='min-w-[90%] flex flex-col items-center justify-center min-h-[30px] font-semibold bg-primaryRed text-white hover:scale-[1.03] transition-all rounded-md'>Çıkış Yap</button>
                    </> :
                    <>
                        <Link onClick={() => setActiveHamburger(false)} to="/login" className='min-w-[90%] flex flex-col items-center justify-center min-h-[30px] font-semibold bg-primaryRed text-white hover:scale-[1.03] transition-all rounded-md'>Giriş Yap</Link>
                        <Link onClick={() => setActiveHamburger(false)} to="/register" className='min-w-[90%] flex flex-col items-center justify-center min-h-[30px] font-semibold bg-white rounded-md hover:scale-[1.03] transition-all'>Kayıt Ol</Link>
                    </>
                }
            </div>
        </div>

    )
}

export default UserLoginButton