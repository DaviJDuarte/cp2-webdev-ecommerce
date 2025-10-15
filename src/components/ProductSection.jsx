import ProductCard from "./ProductCard";

export default function ProductSection({category, products}){

    return (
      <div>
        <div className="text-yellow-400 bg-black font-bold text-center py-2 ">{category}</div>
        <h1 className="text-center font-bold mt-2">Popular Products</h1>
        <div className="grid grid-cols-4">
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
      </div>
    );
}