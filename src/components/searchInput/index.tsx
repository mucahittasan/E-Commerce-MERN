import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch, RootState } from '../../redux/store';
import { addSearchItemToProducts, inputSearch } from '../../redux/search/searchSlice';

interface SearchInputComponent {
    setSearchActive: (bool: boolean) => void,
    setActiveHamburger: (bool: boolean) => void
}

const SearchInput: React.FC<SearchInputComponent> = ({ setSearchActive, setActiveHamburger }) => {


    const navigate = useNavigate();

    const products = useSelector((state: RootState) => state.product.products);
    const search = useSelector((state: RootState) => state.search.search);

    const dispatch = useDispatch<AppDispatch>();


    const headerSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        const searchProducts = products.filter(product => product.title.toLowerCase().includes(search) ||
            product.description?.toLocaleLowerCase().includes(search.toLowerCase()) ||
            product.type_of_product?.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
            product.category?.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )

        dispatch(addSearchItemToProducts(searchProducts));

        navigate("/search")
        setSearchActive(false)
        setActiveHamburger(false)
    }

    const setSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(inputSearch(e.target.value));
    }


    return (
        <form className='w-full flex justify-center' onSubmit={(e) => headerSubmit(e)}>
            <input
                className={`border-b-2 min-w-[320px] w-1/2 h-12 rounded-md placeholder:text-black px-2 text-black font-medium outline-none`}
                type="text"
                placeholder='Ara..'
                onChange={(e) => setSearch(e)}
                value={search}
            />
        </form>
    )
}

export default SearchInput