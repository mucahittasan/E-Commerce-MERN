// React Libraries
import { useDispatch } from "react-redux";
import { useEffect } from 'react'
// Components
import Footer from "../../components/footer";
import Header from "../../components/home/header";
import Main from "../../components/main";
// Service Actions
import { getAllBasketItemsAsync } from "../../redux/basket/service";
import { getAllFavoritesAsync } from "../../redux/favorite/service";


const MainLayout = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBasketItemsAsync())
    dispatch(getAllFavoritesAsync())
  }, [])


  return (
    <div className="flex flex-col dark:bg-darkModeBg transition-all duration-200">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default MainLayout;
