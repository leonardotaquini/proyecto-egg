import { FilterProduct } from "../components/FilterProduct"
import { Product } from "../components/Product"
import { departamentos } from "../data/departamentos"
import '../styles/productPage.css'

export const ProductPage = () => {
  return (
    <>
    <div className="d-flex col-12 flex-column flex-sm-row flex-lg-row">
      <div className="filter-product-page mx-4 col-10 col-sm-5 col-lg-3">
        <FilterProduct/>
      </div>
      <div className="items mx-5">
        {departamentos.map((item, i) => <Product key={i} item={item} />)}
      </div>
    </div>
    </>
  )
}
