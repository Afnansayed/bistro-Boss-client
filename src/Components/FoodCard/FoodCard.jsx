

const FoodCard = ({data}) => {
     const {image,recipe,price,name} = data;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" className="relative" /></figure>
            <p className="bg-black text-white w-[100px] text-center px-6 py-2 absolute right-10 top-5">{price} $</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-outline border-0 border-b-4 border-yellow-500 bg-slate-100">Order</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;