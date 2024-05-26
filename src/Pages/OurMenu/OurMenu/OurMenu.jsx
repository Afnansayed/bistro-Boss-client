import { Helmet } from "react-helmet-async";
import Cover from "../../../Sheared/Cover/Cover";
import menuImage from "../../../assets/menu/banner3.jpg"
import DynamicTitle from "../../../Components/DynamicTitle";
import UseMenu from "../../../Hooks/UseMenu/UseMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import  dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import  saladImg from "../../../assets/menu/salad-bg.jpg"
import   soupImg from "../../../assets/menu/soup-bg.jpg"
import   pizzaImg from "../../../assets/menu/pizza-bg.jpg"


const OurMenu = () => {
    const [menu] = UseMenu();
     const offered = menu.filter(items => items.category === "offered");
     const dessert = menu.filter(items => items.category === "dessert");
     const soup = menu.filter(items => items.category === "soup");
     const salad = menu.filter(items => items.category === "salad");
     const pizza = menu.filter(items => items.category === "pizza");
    return (
        <div>
            <Helmet>
                   <title>Our | Menu</title>
             </Helmet>
             <Cover
             img={menuImage}
             title={"Our Menu"}
             des="Would Like to try a Dish?"
             ></Cover> 
             <DynamicTitle
               heading={"today's Offer"}
               subHeading={"-----Don't miss----"}
             ></DynamicTitle>
             <MenuCategory
              data={offered}
             ></MenuCategory>
             <MenuCategory
              data={dessert}
              title={"dessert"}
              img={dessertImg}
              des={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
             ></MenuCategory>
             <MenuCategory
              data={salad}
              title={"salad"}
              img={saladImg}
              des={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
             ></MenuCategory>
             <MenuCategory
              data={soup}
              title={"soup"}
              img={soupImg}
              des={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
             ></MenuCategory>
             <MenuCategory
              data={pizza}
              title={"pizza"}
              img={pizzaImg}
              des={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
             ></MenuCategory>
        </div>
    );
};

export default OurMenu;