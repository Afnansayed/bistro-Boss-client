import DynamicTitle from '../../../Components/DynamicTitle';
import image from '../../../assets/home/featured.jpg'

const Featured = () => {
    return (
        <div style={{backgroundImage: `url(${image})`}} className='bg-cover bg-no-repeat bg-center bg-fixed'>
            <div className='pt-6'>
                <DynamicTitle
                heading="From Our Menu"
                subHeading="---Check it Out----"
                ></DynamicTitle>
            </div>
            <div className='md:flex gap-12 px-24 py-12 items-center justify-center text-white bg-slate-500 bg-opacity-50'>
                 <img className='w-4/12' src={image} alt="" />
                 <div className='w-1/2 space-y-3'>
                    <p>March 20, 2024</p>
                    <p className='uppercase'>Where can I get Some</p>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className='btn btn-outline border-0 border-b-4'>Read More</button>
                 </div>
            </div>
        </div>
    );
};

export default Featured;