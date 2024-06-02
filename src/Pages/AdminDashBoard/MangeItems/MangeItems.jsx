import Swal from "sweetalert2";
import DynamicTitle from "../../../Components/DynamicTitle";
import UseMenu from "../../../Hooks/UseMenu/UseMenu";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const MangeItems = () => {
    const [menu,,refetch] = UseMenu();
    const axiosSecure = useAxiosSecure();
    const handleItemDelete = async data => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/menu/${data._id}`)
                .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount) {
                            refetch();
                              swalWithBootstrapButtons.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              });
                        }
                    })
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your imaginary file is safe :)",
                    icon: "error"
                });
            }
        });
    }
    return (
        <div>
            <DynamicTitle subHeading={"---Hurry Up!---"} heading={"Manage  Items"}></DynamicTitle>
            <div>
                <div className=" my-4">
                    <h2 className="text-3xl">Total Items : {menu.length}</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead className="bg-orange-400">
                            <tr>
                                <th></th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Action</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu.map((data, idx) => <tr key={data._id}>
                                    <th>{idx + 1}</th>
                                    <td><img src={data?.image} className="mask rounded-lg w-12 h-12" alt="" /></td>
                                    <td>{data?.name}</td>
                                    <td>{data?.price}</td>
                                    <td>
                                        {
                                            data.role === 'admin' ? 'ADMIN' : <button
                                                className="btn btn-square bg-orange-400 ">
                                                <FaEdit className="text-white" />
                                            </button>
                                        }

                                    </td>
                                    <td>
                                        <button onClick={() => handleItemDelete(data)} className="btn btn-square bg-red-700 ">
                                            <AiFillDelete className="text-white" />
                                        </button>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MangeItems;