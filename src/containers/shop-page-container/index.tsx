// Components
import { ProductItems } from "../../components/productItems";

const ShopPageContainer = () => {
    return (
        <div className="max-w-[1300px] w-full m-auto">
            <h2 className="main-title">Tüm Ürünler</h2>
            <ProductItems />
        </div>
    )
}

export default ShopPageContainer;