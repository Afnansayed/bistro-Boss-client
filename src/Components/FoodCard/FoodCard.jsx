import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";


const FoodCard = ({data}) => {
     const {image,recipe,price,name,_id} = data;
     const {user} = useContext(AuthContext);
     const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const location = useLocation();
    //important for refetch
    const [,refetch] = useCart();
   // console.log(location.pathname)
     const handleCard = () => {
        //console.log(food,user.email);
        if(user && user.email){
            //TODO: send cart item to the database
            const cartItem = {
                menuId : _id,
                email: user.email,
                name,
                image,
                price

            }
            axiosSecure.post('/carts',cartItem)
            .then(res => {
                console.log(res.data)
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} is add to cart`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                      refetch();
                }
            })

        }else{
            Swal.fire({
                title: "You are not log in ",
                text: "Please log in before you add to card",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state: {from: location}} )
                }
              });
        }
     }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" className="relative" /></figure>
            <p className="bg-black text-white w-[100px] text-center px-6 py-2 absolute right-10 top-5">{price} $</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={handleCard} className="btn btn-outline border-0 border-b-4 border-yellow-500 bg-slate-100">Order</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;