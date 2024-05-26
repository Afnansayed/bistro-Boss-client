
import DynamicTitle from "../../../Components/DynamicTitle";
import PopularItems from "../../../Sheared/PopularItems/PopularItems";
import UseMenu from "../../../Hooks/UseMenu/UseMenu";


const PopularMenu = () => {
    // const [menuData,setMenuData] = useState([]);

    // useEffect(() =>{
    //        fetch(`/menu.json`)
    //        .then(res => res.json())
    //        .then(data => {
    //             const popularData = data.filter(items => items.category === "popular");
    //             setMenuData(popularData)
    //        })
    // },[])
    const [menu] = UseMenu();
    const popularData = menu.filter(items => items.category === "popular");
    //console.log(popularData)
    return (
        <section className="mb-8">
                 <div>
                    <DynamicTitle
                     heading="From Our Menu"
                     subHeading="----Check It Out-----"
                    ></DynamicTitle>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {
                         popularData.map(popularItem => <PopularItems key={popularItem._id}
                         popularItem={popularItem}
                         ></PopularItems>)
                      }
                 </div>
        </section>
    );
};

export default PopularMenu;