import ProductCard from "./ProductCard";

export default function ProductSection({category, products}){
    <div>
      <div>{category}</div>
      <h1>Popular Products</h1>
      <div>
        {products.map((product) => (
          <ProductCard
            title={product.title}
            price={product.price}
            image={product.image}
            rating={product.rating}
            key={product.id}
          />
        ))}
      </div>
    </div>;
}