import DynamicTitle from "../../../Components/DynamicTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";

//rating
import '@smastrom/react-rating/style.css'
import { Rating } from "@smastrom/react-rating";
const Testimonial = () => {
    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch('/review.json')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <div>
            <div>
                <DynamicTitle
                    heading={"Testimonials"}
                    subHeading={"---What Our Client Say ---"}
                ></DynamicTitle>
            </div>
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        review.map(data => <SwiperSlide
                            key={data._id}
                        >
                            <div className="mx-24 my-16 text-center flex flex-col justify-center items-center gap-5">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={data.rating}
                                    readOnly
                                />
                                <p>{data.details}</p>
                                <h3 className="text-yellow-500 text-3xl font-semibold">{data.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;