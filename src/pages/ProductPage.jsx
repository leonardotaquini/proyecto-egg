import { Product } from "../components/Product"
import { departamentos } from "../data/departamentos"

export const ProductPage = () => {
  return (
    <>
    <div className="d-flex col-12">
      <div className="filter-product-page col-4 border border-dark">
        <p>Filter product page</p>
      </div>
      <div className="border border-dark">
        {departamentos.map((item, i) => <Product key={i} item={item} />)}
      </div>
    </div>
    </>
  )
}
