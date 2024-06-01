import { useForm } from "react-hook-form";
import DynamicTitle from "../../../Components/DynamicTitle";
import { FaUtensils } from "react-icons/fa6";
import axios from 'axios'
import useAxiosSecure from '../../../Hooks/useAxiosSecure'
import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItems = () => {
    const { register, handleSubmit ,reset } = useForm()
    const axiosSecure = useAxiosSecure()

    const onSubmit = async (data) => {
        console.log(data)
        console.log(data.image)
        //
        const image = data.image[0]
        console.log(image)
        const formData = new FormData()
        formData.append('image', image)
        console.log(formData)

        axios.post(image_hosting_api, formData)
            .then(res => {
                if (res.data.success) {
                    console.log(res.data.data.display_url)
                    const menuItem = {
                        name: data.name,
                        recipe: data.recipe,
                        image: res.data.data.display_url,
                        category: data.category,
                        price: parseFloat(data.price)
                    }
                    console.log(menuItem)
                    axiosSecure.post('/menu', menuItem)
                        .then(res => {
                            if (res.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: `${data.name} add in the menu list`,
                                    showConfirmButton: false,
                                    timer: 1500
                                });

                            }
                        })
                }
            })
    }
    return (
        <div>
            <DynamicTitle heading={'add an items'} subHeading={'what is new'}></DynamicTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Recipe Name*</span>
                            </div>
                            <input {...register("name", { required: true })} type="text" placeholder="Type here" className="input input-bordered w-full " />
                        </label>
                    </div>
                    <div className="flex justify-between gap-6">
                        <div className="w-full">
                            <div className="label">
                                <span className="label-text">Category*</span>
                            </div>
                            <select {...register('category', { required: true })} className="select select-primary w-full " defaultValue='default'>
                                <option disabled value='default'>Category</option>
                                <option value='salad'>Salad</option>
                                <option value='pizza'>Pizza</option>
                                <option value='soup'>Soup</option>
                                <option value='drinks'>Drinks</option>
                            </select>
                        </div>
                        <div className="w-full">
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Price*</span>
                                </div>
                                <input {...register("price", { required: true })} type="number" step="0.01" placeholder="Type here" className="input input-bordered w-full " />
                            </label>
                        </div>
                    </div>
                    <div>
                        <div className="label">
                            <span className="label-text">Recipe Details *</span>
                        </div>
                        <textarea {...register("recipe")} placeholder="Recipe Details" className="textarea textarea-bordered textarea-lg w-full " ></textarea>
                    </div>
                    <div className="from-control w-full my-6">
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>
                    <button className="btn">Add Item <FaUtensils className="ml-4"></FaUtensils></button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;