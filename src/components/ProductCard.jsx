export default function ProductCard({title, price, image, rating}){

    return (
      <div className="h-[16rem] flex flex-col justify-between">
        <div className="flex justify-center">
          <img
            className="h-[8rem]"
            src={image}
            alt={"Product Image for " + title}
          />
        </div>
        <div className="flex flex-col gap-1 px-3">
          <h1 className="font-bold truncate">{title}</h1>
          <p className="font-light">${price}</p>
          <button className="bg-yellow-400 font-black p-1 text-sm rounded w-fit">Ver detalhes</button>
        </div>
      </div>
    );
}