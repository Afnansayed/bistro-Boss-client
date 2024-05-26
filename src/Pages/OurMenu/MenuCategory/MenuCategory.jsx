import { Link } from "react-router-dom";
import Cover from "../../../Sheared/Cover/Cover";
import PopularItems from "../../../Sheared/PopularItems/PopularItems";


const MenuCategory = ({data,title,img,des}) => {
    return (
        <div>
            {
                title &&  <Cover title={title} 
                  img={img}
                  des={des}
                ></Cover>
            }
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-12">
                      {
                         data.map(popularItem => <PopularItems key={popularItem._id}
                         popularItem={popularItem}
                         ></PopularItems>)
                      }
                 </div>
             <Link to={`/order/${title}`} className="flex justify-center mb-12">
              <button className="btn btn-outline border-0 border-b-4  w-1/4">Order Your Favorite Food </button>
              </Link>    
        </div>
    );
};

export default MenuCategory;