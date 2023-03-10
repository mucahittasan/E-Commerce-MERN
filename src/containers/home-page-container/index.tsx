// Libraries
import { Link } from 'react-router-dom';

// Images
import phoneImg from '../../assets/images/items/phone1.png';
import joystick from '../../assets/images/items/joystick.jpg';
import gamingChair from '../../assets/images/items/gaming_chair.jpg';

// Router Loader
import { useLoaderData } from 'react-router-dom';

const HomePageContainer = () => {

  return (

    <div className="min-h-[calc(100vh_-_102px)] md:min-h-[calc(100vh_-_117px)] flex items-center bg-contain xl:bg-cover bg-no-repeat sm:bg-light-home-bg bg-[#F4F9FD]  ">

      <div className='p-4 sm:px-6 md:gap-y-0 gap-y-5 flex items-center h-full w-full sm:flex-row flex-col content gap-x-5 justify-between px-4 2xl:px-0'>
        <div className='max-w-[600px]'>
          <h3 className='font-medium mb-3'>DAHA İYİ ALIŞVERİŞ</h3>
          <h2 className='text-[clamp(40px,6.5454vw,72px)] leading-none font-bold mb-4'>Online Mağazanın En Büyük <span className='text-primaryOrange'>Yolculuğu</span> </h2>
          <p className='text-base text-slate-600'>Sadece 5 dakikanızı alır ve ödemeden teslimata kadar her şeyi biz hallederiz</p>
          <Link to="/shop">
            <button className='btn sm:mt-8 mt-4 bg-primaryOrange text-white hover:shadow-[0_0_10px_2px_rgba(255,125,26,0.75)]' >Alışverişe başla</button>
          </Link>
        </div>

        <div className='flex md:gap-12 gap-6 sm:w-auto w-full justify-around sm:justify-start'>
          <div className='flex flex-col md:gap-y-12 gap-y-6'>

            <div className='home-card'>
              <img className='m-auto md:max-w-[100px]' src="https://cdn.dsmcdn.com/ty19/product/media/images/20201105/2/22595195/101193178/0/0_org_zoom.jpg" alt="shop item" />
              <h4 className='font-bold md:text-[16px] text-[14px] pt-2'>Kulaklık</h4>
              <div className='text-xs md:text-sm text-slate-500'>379 TL</div>
            </div>
            <div className='home-card'>
              <img className='m-auto md:max-w-[100px]' src={joystick} alt="shop item" />
              <h4 className='font-bold md:text-[16px] text-[14px] pt-2'>Oyun Kumandası</h4>
              <div className='text-xs md:text-sm text-slate-500'>1739 TL</div>
            </div>

          </div>
          <div className='mt-10 flex flex-col md:gap-y-12 gap-y-6'>

            <div className='home-card '>
              <img className='m-auto md:max-w-[100px]' src={gamingChair} alt="shop item" />
              <h4 className='font-bold md:text-[16px] text-[14px] pt-2'>Oyuncu Koltuğu</h4>
              <div className='text-xs md:text-sm text-slate-500'>4123 TL</div>
            </div>
            <div className='home-card '>
              <img className='m-auto md:max-w-[100px]' src={phoneImg} alt="shop item" />
              <h4 className='font-bold md:text-[16px] text-[14px] pt-2'>Telefon</h4>
              <div className='text-xs md:text-sm text-slate-500'>4900 TL</div>
            </div>

          </div>
        </div>
      </div>

    </div>

  )
};

export default HomePageContainer;
