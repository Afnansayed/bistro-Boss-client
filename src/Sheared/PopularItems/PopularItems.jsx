

const PopularItems = ({popularItem}) => {
    const {name,recipe,image,price} = popularItem;
    return (
        <div className="flex gap-2">
            <img style={{borderRadius: "0 200px 200px 200px"}} className="w-[100px]" src={image} alt="" /> 
            <div>
                <h2 className="uppercase">{name} --------------</h2>
                <p>{recipe}</p>
            </div>
            <h4 className="text-yellow-600">${price}</h4>
        </div>
    );
};

export default PopularItems;