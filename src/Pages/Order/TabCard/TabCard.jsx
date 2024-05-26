import FoodCard from "../../../Components/FoodCard/FoodCard";


const TabCard = ({ items }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-12'>
            {
                items.map(data => <FoodCard
                    key={data._id}
                    data={data}
                ></FoodCard>)
            }
        </div>
    );
};

export default TabCard;