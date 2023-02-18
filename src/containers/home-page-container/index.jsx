import { Link } from 'react-router-dom';
import HomeBg from '../../assets/images/home-bg.png';

// Images
import phoneImg from '../../assets/images/phone1.png';
import joystick from '../../assets/images/joystick.jpg';
import headPhone from '../../assets/images/head_phone1.jpg';
import gamingChair from '../../assets/images/gaming_chair.jpg';


const HomePageContainer = () => {
  return (
  
  <div style={{backgroundImage: `url(${HomeBg})`}} className="h-[calc(100vh_-_102px)] md:h-[calc(100vh_-_117px)] bg-contain xl:bg-cover bg-no-repeat bg-light-home-bg bg-[#F4F9FD]  ">

   <div className=' flex items-center h-full w-full content justify-between px-4 2xl:px-0'>
   <div className='max-w-[500px]'>
      <h3 className='font-medium mb-3'>SHOP BETTER</h3>
      <h2 className='text-[clamp(50px,6.5454vw,72px)] leading-none font-bold mb-4'>The Greatest Journey Of Online <span className='text-primaryOrange'>Shop</span> </h2>
      <p className='text-base text-slate-600'>It only takes 5 minutes and we handle everything from payment to delivery</p>
      <button className='btn mt-8 bg-primaryOrange text-white hover:shadow-[0_0_10px_2px_rgba(255,125,26,0.75)]'>
        <Link to="/shop">Get Started</Link>  
      </button>
    </div>

    <div className='flex gap-12'>
       <div className='flex flex-col gap-y-12'>
  
          <div className='w-36 p-2 bg-white max-h-[217px] rounded-md shadow-[0px_0px_20px_0px_rgba(0,0,0,0.75)]'>
            <img className='m-auto max-w-[100px]' src={headPhone} alt="shop item" />
            <h4 className='font-bold pt-2'>Headphone</h4>
            <div className='text-sm text-slate-500'>1700 TL</div>
          </div>
          <div className='w-36 p-2 bg-white max-h-[217px] rounded-md shadow-[0px_0px_20px_0px_rgba(0,0,0,0.75)]'>
            <img className='m-auto max-w-[100px]' src={joystick} alt="shop item" />
            <h4 className='font-bold pt-2'>Joystick</h4>
            <div className='text-sm text-slate-500'>1099 TL</div>
          </div>
  
       </div>
       <div className='mt-10 flex flex-col gap-y-12'>
  
          <div className='w-36 p-2 bg-white max-h-[217px] rounded-md shadow-[0px_0px_20px_0px_rgba(0,0,0,0.75)]'>
            <img className='m-auto max-w-[100px]' src={gamingChair} alt="shop item" />
            <h4 className='font-bold pt-2'>Gaming Chair</h4>
            <div className='text-sm text-slate-500'>4100 TL</div>
          </div>
          <div className='w-36 p-2 bg-white max-h-[217px] rounded-md shadow-[0px_0px_20px_0px_rgba(0,0,0,0.75)]'>
            <img className='m-auto max-w-[100px]' src={phoneImg} alt="shop item" />
            <h4 className='font-bold pt-2'>Phone</h4>
            <div className='text-sm text-slate-500'>4900 TL</div>
          </div>

       </div>
    </div>
   </div>

  </div>
  
  )
};

export default HomePageContainer;
