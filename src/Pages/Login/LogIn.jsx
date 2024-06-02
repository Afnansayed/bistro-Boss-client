import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import img from '../../../src/assets/others/authentication1.png'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';

const LogIn = () => {
    const {logIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
//    const captchaRef = useRef(null);
   const [disable,setDisable] = useState(true);
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const from = location.state?.from?.pathname || "/";
    //console.log(location.state)
    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");
        console.log(email, password)

        logIn(email,password)
        .then(res => {
            console.log(res.user);
            navigate(from,{replace: true});
        })
        .catch(error => {
            console.error(error)
        })
    }
    const handleValidate = e => {
           const user_captcha_value = e.target.value;
           console.log(user_captcha_value)
           if(validateCaptcha(user_captcha_value)){
                  setDisable(false)
           }else{
            setDisable(true);
           }
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-1/2">
                    <img src={img} alt="" className='w-3/4 mx-auto' />
                </div>
                <div className="card w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input onBlur={handleValidate}  type="text" placeholder="Type text " name="password" className="input input-bordered"  />
                            {/* ref={captchaRef} */}
                        </div>
                        <div className="form-control mt-6">
                            <input disabled={false} type="submit" value="LogIn" className={`bg-stone-400 py-2 rounded-lg text-white `} />
                            {/* ${disable ? 'opacity-50 cursor-not-allowed' : ''} */}
                        </div>
                    </form>
                    <div className='flex justify-center mb-6'>
                          <SocialLogin />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;