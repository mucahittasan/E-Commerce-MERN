// Components
import { ProductItems } from "../../components/product/productItems";

const ShopPageContainer = () => {
    return (
        <div className="main-container">
            <h2 className="main-title">Tüm Ürünler</h2>
            <ProductItems />
        </div>
    )
}

export default ShopPageContainer;