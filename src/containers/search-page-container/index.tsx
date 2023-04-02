import { useDispatch, useSelector } from "react-redux";
import SearchInput from "../../components/searchInput"
import { AppDispatch, RootState } from "../../redux/store";
import ProductItem from "../../components/productItem";
import { useEffect } from "react";
import { getProductsAsync } from "../../redux/products/services";
import { clearSearchProducts } from "../../redux/search/searchSlice";

const SearchPageContainer = () => {

    const searchProducts = useSelector((state: RootState) => state.search.products);

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getProductsAsync());

        return () => {
            dispatch(clearSearchProducts())
        }
    }, [dispatch])

    return (
        <div className="main-container">
            <h2 className="main-title">Arama Sonuçları</h2>
            <div>
                <div className="md:hidden block flex-1">

                    <SearchInput />
                </div>
                {searchProducts?.length !== 0 ?
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center my-8 gap-4'>
                        {searchProducts && searchProducts.map((item, index) => (
                            <ProductItem item={item} key={index} myKey={index} />
                        ))}
                    </div> : <div className='font-bold text-center mt-8 text-md text-veryDarkBlue'>Aradığınız ürün <span className='text-primaryRed'>bulunamadı</span> :(</div>}
            </div>
        </div>
    )
}

export default SearchPageContainer