import { useForm } from 'react-hook-form';
import img from '../../../src/assets/others/authentication2.png'
import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../Hooks/useAxiosPublic';


const SignUp = () => {
    const {
        register,
        handleSubmit,
        // watch,
        reset,
        formState: { errors },
      } = useForm()
      const {createUser,updateUser} = useContext(AuthContext);
      const navigate = useNavigate();
     const axiosPublic= useAxiosPublic();
     
      const onSubmit = (data) => {
        console.log(data)
        //Create User
         createUser(data.email,data.password)
        .then(res => {
            console.log(res.user);
            updateUser(data.name,data.photoURL)
            .then(() => {
                //user details save in database
                const  userInfo =  {
                    name:data.name,
                    email:data.email,
                }
                axiosPublic.post('/users', userInfo)
                .then(res =>{

                    if(res.data.insertedId){
                        Swal.fire({
                            title: "User Updated SuccessFully",
                            showClass: {
                              popup: `
                                animate__animated
                                animate__fadeInUp
                                animate__faster
                              `
                            },
                            hideClass: {
                              popup: `
                                animate__animated
                                animate__fadeOutDown
                                animate__faster
                              `
                            }
                          });
                        reset();
                        navigate('/') ;
                    }
                })
            })
            .catch(error => console.error(error))
        })
        .catch(error => {
            console.error(error)
        })
      }

     // console.log(watch("example"))
    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <title>Sign Up</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-1/2">
                    <img src={img} alt="" className='w-3/4 mx-auto' />
                </div>
                <div className="card w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <h3 className='text-2xl font-bold text-center pt-5'>Sign Up</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name",{ required: true })} name="name" placeholder="name" className="input input-bordered" />
                            {errors.name && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" {...register("photoURL",{ required: true })}  placeholder="PhotoURL" className="input input-bordered" />
                            {errors.photoURL && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email",{ required: true })} name="email" placeholder="email" className="input input-bordered" />
                            {errors.email && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"
                            {...register("password",{ required: true, maxLength: 20, minLength: 6,
                            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/    
                             })}
                            placeholder="password" name="password" className="input input-bordered"  />
                             {errors.password?.type === 'minLength' && <span className='text-red-500'>Password should be minimum six character</span>}
                             {errors.password?.type === 'required' && <span className='text-red-500'>Password is Required</span>}
                             {errors.password?.type === 'pattern' && <span className='text-red-500'>Password Should have minimum one lower case character one uppercase character and on digit and one spacial character</span>}
                        </div>
                        <div className="form-control mt-6">
                            <input  type="submit" value="SignUp" className='bg-stone-400 py-2 rounded-lg text-white' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;