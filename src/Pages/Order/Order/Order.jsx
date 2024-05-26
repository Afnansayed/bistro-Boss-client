import { useState } from 'react';
import Cover from '../../../Sheared/Cover/Cover';
import orderImage from '../../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseMenu from '../../../Hooks/UseMenu/UseMenu';
import TabCard from '../TabCard/TabCard';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const Order = () => {
    const categories = ['salad','pizza','soup','dessert','drinks'];
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = UseMenu();
     const dessert = menu.filter(items => items.category === "dessert");
     const soup = menu.filter(items => items.category === "soup");
     const salad = menu.filter(items => items.category === "salad");
     const pizza = menu.filter(items => items.category === "pizza");
     const drinks = menu.filter(items => items.category === "drinks");
    return (
        <div>
            <Helmet>
                  <title>ORDER FOOD</title>
            </Helmet>
            <Cover img={orderImage}
                title="Our Shop"
                des="We are the best restaurant in this area You can trust us to choose your meal...."
            ></Cover>
            <div >
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className='flex justify-center items-center mt-12'>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soups</Tab>
                        <Tab>Deserts</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>
                    <TabPanel>
                    <TabCard items={salad}></TabCard>
                    </TabPanel>
                    <TabPanel>
                    <TabCard items={pizza}></TabCard>
                    </TabPanel>
                    <TabPanel>
                    <TabCard items={soup}></TabCard>
                    </TabPanel>
                    <TabPanel>
                    <TabCard items={dessert}></TabCard>
                    </TabPanel>
                    <TabPanel>
                    <TabCard items={drinks}></TabCard>
                    </TabPanel>
                </Tabs>
            </div>

        </div>
    );
};

export default Order;