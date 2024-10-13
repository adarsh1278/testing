'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';
import {useRouter} from 'next/navigation';
import { useToast } from "@/hooks/use-toast"
import { sha256 } from 'js-sha256';
export default function SignIn() {
    const { toast } = useToast()
    
  const [showPassword, setShowPassword] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0); // Initialize with 0 for SSR safety
  const [isMounted, setIsMounted] = useState(false); // New state to track if component is mounted
  const [email , setEmail] = useState("")
  const [password ,setPassword] = useState("")
  const [buttonDisabled , setButtonDisabled] = useState(true)
   
 

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    // Set the component as mounted
    setIsMounted(true);

    // Only run this if window is available (i.e., client-side)
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial width
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const router = useRouter();
  async function  handleSubmit(){
    try {
        const encryptedPassword =  await sha256(password);
        console.log(encryptedPassword)
        const url = process.env.NEXT_PUBLIC_DATABASE_URL;
        console.log(url)
        setButtonDisabled(true);
        const response = await axios.post(`${url}/manager/login`, {
         email,
         password:encryptedPassword,
         
        },
        {withCredentials:true}
    
    )
        console.log("data" , response.data.message);
      
        
        
        if(response.data.statusCode==200){
            setButtonDisabled(false);
            toast({
                title: "LOGIN",
                description: "Succesfully logged",
              })
            setTimeout(() => {
                router.push("/program/dashboard")
            }, 2000);
        }

        
    } catch (error) {
        console.error(error)
const errorMessage = error.response.data.message ||"something went wrong"
        setButtonDisabled(false)
        toast({
            variant: "destructive",
            title: "Login error",
            description: errorMessage,
           
          })
    }
  }

//   // Avoid rendering until the component is mounted
//   if (!isMounted) return null;


    return (
        <>
            {windowWidth > (768) ? (
                <div className="bg-back-rgba  md:max-lg:w-will-change-auto   w-screen h-screen    ">
                    <div className="flex  md:max-2xl:flex-row  2xl:flex-row   ">
                        <div className="   md:max-lg:w-[600px] md:max-lg:h-[720px]  lg:max-xl:pr-[30px]  lg:max-xl:mt-[55px] lg:max-xl:ml-[60px]  md:max-lg:mt-[130px] md:max-lg:ml-[89px]  xl:max-2xl:mt-[30px] xl:max-2xl:ml-[150px]  xl:max-2xl:pr-[20px]   2xl:w-[600px]   2xl:mt-[35px] 2xl:ml-auto  ex:mt-[25px]  ex2:max-xl:ml-[50px]  sm:max-md:rounded-t-[50px]    md:rounded-l-3xl   bg-inner-rgba ">
                            <div className="flex flex-row">
                                <img className="  sm:max-md:hidden lg:max-xl:w-[60px] lg:max-xl:h[57px]   md:max-lg:w-[80px]  md:max-lg:h-[77px] md:max-lg:mt-[70px]  md:max-lg:ml-[90px] xl:ml-[108px]   lg:max-xl:mt-[59px] lg:max-xl:ml-[82px]  xl:max-2xl:mt-[50px] xl:max-2xl:ml-[90px]  2xl:mt-[50px] 2xl:ml-[95px]  2xl:h-[65px] 2xl:w-[65px]  ex2:max-xl:mt-[35px]" src="/kiet.svg" alt="kiet logo " />
                                <img className="  sm:max-md:hidden  lg:max-xl:w-[60px] lg:max-xl:h-[53px]  md:max-lg:w-[80px]  md:max-lg:h-[73px] md:max-lg:mt-[70px]  md:max-lg:ml-[15px]  lg:max-xl:mt-[59px] lg:max-xl:ml-[35px]   xl:max-2xl:mt-[50px] xl:max-2xl:ml-[45px] xl:max-2xl:h-[53px]  2xl:mt-[50px] 2xl:ml-[40px] 2xl:h-[65px] 2xl:w-[65px]  ex2:max-xl:mt-[35px] " src="/image3.png" alt="2nd image " />
                            </div>

                            <div className="w-[365px] h-[35px]">
                                <p className="  font-semibold   text-hd-rgba font-[poppins] text-4xl md:max-lg:mt-[60px] xl:mt-[64px] md:max-lg:ml-[90px] xl:ml-[108px]  lg:max-xl:mt-[50px] lg:max-xl:ml-[80px]  xl:max-2xl:mt-[40px] xl:max-2xl:ml-[90px] 2xl:ml-[95px] 2xl:mt-[30px]  ex2:max-xl:mt-[30px]  ">Sign In</p>
                            </div>
                            <div className="     md:w-[449px] h-[22px] mt-[16px] md:max-lg:ml-[90px]   lg:max-xl:mt-[16px] lg:max-xl:ml-[80px] xl:max-2xl:ml-[90px] 2xl:ml-[95px] ">

                                <p className="font-normal font-[poppins] text-brdr-rgba text-xl   ">Kindly fill in your details to sign in to your account</p>
                            </div>

                            <div className="w-[123px] h-[18px] md:max-lg:mt-[50px] xl:mt-[60px] md:max-lg:ml-[90px] xl:ml-[108px]  lg:max-xl:mt-[40px] lg:max-xl:ml-[80px] xl:max-2xl:mt-[45px] xl:max-2xl:ml-[90px] 2xl:ml-[95px]  2xl:mt-[30px]">
                                <p className="text-base font-medium font-[poppins] text-txt-rgba">Email Address*</p>
                            </div>
                            <div>
                                <input
                                    className='bg-input-rgba h-[50px] w-[426px] md:max-lg:ml-[90px]  mt-[14px] border-[0.5px] border-solid border-brdr-rgba pl-[30px] rounded-[8px] shadow-custom-shadow text-brdr-rgba lg:max-xl:mt-[16px] lg:max-xl:ml-[70px]  xl:max-2xl:ml-[90px] 2xl:ml-[95px]'
                                    placeholder="Enter your Email"
                                    type="text"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="w-[123px] h-[18px] md:mt-[37px] md:max-lg:ml-[90px] lg:max-xl:mt-[35px] lg:max-xl:ml-[70px] xl:max-2xl:mt-[30px] xl:max-2xl:ml-[90px] 2xl:ml-[95px]  sm:max-md:ml-5 ">
                                <p className="text-base font-medium font-[poppins] w-[147px] h-[19px] text-txt-rgba ">Password*</p>
                            </div>

                            <div className="relative">
                                <input
                                    className='bg-input-rgba h-[51px] w-[426px]    md:max-lg:ml-[90px] xl:ml-[108px] mt-[14px] border-[0.5px] border-solid border-brdr-rgba pl-[30px] pr-[50px] rounded-[8px] shadow-custom-shadow text-brdr-rgba lg:max-xl:mt-[16px] lg:max-xl:ml-[70px]  xl:max-2xl:ml-[90px] 2xl:ml-[95px]'
                                    placeholder="Enter your Password"
                                    type={showPassword ? "text" : "password"}
                                    onChange={(e) => setPassword(e.target.value)}

                                />
                                <span
                                    className="absolute top-[26px]  right-[105px] md:max-2xl:right-[60px] cursor-pointer"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 7.125C11.2044 7.125 10.4413 7.37522 9.87868 7.82062C9.31607 8.26602 9 8.87011 9 9.5C9 10.1299 9.31607 10.734 9.87868 11.1794C10.4413 11.6248 11.2044 11.875 12 11.875C12.7956 11.875 13.5587 11.6248 14.1213 11.1794C14.6839 10.734 15 10.1299 15 9.5C15 8.87011 14.6839 8.26602 14.1213 7.82062C13.5587 7.37522 12.7956 7.125 12 7.125ZM12 13.4583C10.6739 13.4583 9.40215 13.0413 8.46447 12.299C7.52678 11.5566 7 10.5498 7 9.5C7 8.45018 7.52678 7.44337 8.46447 6.70104C9.40215 5.9587 10.6739 5.54167 12 5.54167C13.3261 5.54167 14.5979 5.9587 15.5355 6.70104C16.4732 7.44337 17 8.45018 17 9.5C17 10.5498 16.4732 11.5566 15.5355 12.299C14.5979 13.0413 13.3261 13.4583 12 13.4583ZM12 3.5625C7 3.5625 2.73 6.02458 1 9.5C2.73 12.9754 7 15.4375 12 15.4375C17 15.4375 21.27 12.9754 23 9.5C21.27 6.02458 17 3.5625 12 3.5625Z" fill="#7F8B9E" />
                                    </svg> : <Image
                                        src="/hide.png"
                                        alt=" Password Hider"
                                        width={22}
                                        height={22}

                                    />}
                                </span>
                            </div>

                            <div className="flex flex-row">
                                <div className="  md:max-lg:ml-[90px] xl:ml-[108px] md:max-lg:mt-[36px] xl:mt-[37px] lg:max-xl:mt-[20px] lg:max-xl:ml-[70px] xl:max-2xl:mt-[30px] xl:max-2xl:ml-[90px] 2xl:ml-[95px] 2xl:mt-[35px]">
                                    <input className="w-[20px] h-[20px]" type="checkbox"  onChange={(e) => setButtonDisabled(!e.target.checked)} name="terms" id="terms" />
                                </div>
                                <div className=" w-[223px] h-[19px]   ml-[12px] md:max-lg:mt-[36px] xl:mt-[37px] font-medium text-base text-txt-rgba font-[poppins] lg:max-xl:mt-[20px] lg:max-xl:ml-[12px] xl:max-2xl:mt-[30px] xl:max-2xl:ml-[11px] 2xl:mt-[35px]">
                                    <p className="font-medium text-md text-txt-rgba font-[poppins]">I agree to terms & conditions</p>
                                </div>
                            </div>

                            <div className="rounded-md">
                                <button onClick={handleSubmit}  disabled={buttonDisabled} className="w-[181px] h-[51px]  bg-blue-rgba ml-[247px] md:max-lg:mt-[40px] xl:mt-[40px]  rounded-[8px] shadow-signin-shadow lg:max-xl:mt-[26px] lg:max-xl:ml-[190px] xl:max-2xl:mt-[30px] xl:max-2xl:ml-[200px] 2xl:ml-[200px] 2xl:mt-[25px]">
                                    <div>
                                        <p className="text-white font-medium text-center">Sign in</p>
                                    </div>
                                </button> 
                            </div>

                            <div className="w-[181px] h-[22px]     mb-2.5   mt-[12px] ml-[253px] font-semibold lg:max-xl:ml-[195px]  xl:max-2xl:ml-[210px] 2xl:ml-[210px] 2xl:mb-2.5">
                                <p className="font-[Nunito Sans] text-base font-medium  text-blue-rgba ">Don’t have an account?</p>
                            </div>
                        </div>

                        <div className="   bg-blue-rgba md:max-lg:w-[600px] md:max-lg:h-[720px]  md:max-lg:mt-[130px]   lg:max-xl:mt-[55px]  lg:max-xl:w-[600px] xl:max-2xl:mt-[30px] xl:max-2xl:w-[600px] 2xl:mt-[35px]  2xl:mr-auto  2xl:w-[600px] md:max-2xl:rounded-r-3xl  2xl:rounded-r-3xl  ex:mt-[25px] ">
                            <div className=" sm:max-md:hidden ml-[13px] md:max-lg:mt-[130px]  xl:mt-[111px] flex flex-col h-[108px] w-[650px] lg:max-xl:mt-[80px] xl:max-2xl:mt-[60px] 2xl:mt-[60px]">
                                <p className="font-bold text-4xl text-white font-[Nunito Sans]">Empowering Startups with</p>
                                <p className="font-[Nunito Sans] font-bold text-4xl text-white">Mentors. Resources. Investments.</p>
                            </div>
                            <img className="      md:max-lg:h-[420.01px] xl:h-[561.01px] md:max-lg:w-[390.97px] xl:w-[399.97] md:max-lg:ml-[106px] xl:ml-[166px] lg:max-xl:h-[400px] lg:max-xl:w-[350px] lg:max-xl:ml-[100px] xl:max-2xl:w-[330px] xl:max-2xl:h-[430px]  xl:max-2xl:ml-[110px]  2xl:ml-[80px] 2xl:h-[410px] 2xl:w-[390px]  " src="/login.png" alt="" />
                        </div>
                    </div>
                </div>

            ) : 


(
      <div className="relative w-full h-full">
  <div className="absolute inset-0 bg-[url('/login.png')] bg-cover bg-center  h-screen w-max sm:h-screen sm:w-[770px] filter opacity-50"> </div>
  <div className="relative">
   <div className=" my-auto  w-min  sm:mx-10 pt-16  justify-center   bg-transparent  ">
                            <div className="flex  flex-row gap-4  mb-10 pl-5">
                                <img className="   ex2:max-xl:mt-[35px]" src="/kiet.svg" alt="kiet logo " />
                                <img className="  h-[60px] w-[65px]  ex2:max-xl:mt-[35px] " src="/image3.png" alt="2nd image " />
                            </div>

                            <div className="w-[365px] h-[35px] gap-y-6 pl-5 ">
                                <p className="  font-semibold   text-hd-rgba font-[poppins] text-4xl md:max-lg:mt-[60px] xl:mt-[64px] md:max-lg:ml-[90px] xl:ml-[108px]  lg:max-xl:mt-[50px] lg:max-xl:ml-[80px]  xl:max-2xl:mt-[40px] xl:max-2xl:ml-[90px] 2xl:ml-[95px] 2xl:mt-[30px]  ex2:max-xl:mt-[30px]  ">Sign In</p>
                            </div>
                            <div className="    h-[22px] mt-[16px] pl-5 mb-6   ">

                                <p className="font-normal font-[poppins] text-brdr-rgba text-xl   ">Kindly fill in your details to sign in to your account</p>
                            </div>

                            <div className="w-[123px] h-[18px] pl-5">
                                <p className="text-base font-medium font-[poppins] text-txt-rgba">Email Address*</p>
                            </div>
                            <div>
                                <input
                                    className='bg-input-rgba h-[50px] w-[426px]  ml-5  mb-4  mt-[14px] border-[0.5px] border-solid border-brdr-rgba pl-[30px] rounded-[8px] shadow-custom-shadow text-brdr-rgba '
                                    placeholder="Enter your Email"
                                    type="text"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="w-[123px] h-[18px]  ml-5 mb-4 ">
                                <p className="text-base font-medium font-[poppins] w-[147px] h-[19px] text-txt-rgba ">Password*</p>
                            </div>

                            <div className="relative">
                                <input
                                    className='bg-input-rgba h-[51px] mb-6 w-[426px]  ml-5   pl-[30px] pr-[50px] rounded-[8px] shadow-custom-shadow text-brdr-rgba'
                                    placeholder="Enter your Password"
                                    type={showPassword ? "text" : "password"}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <span
                                    className="absolute top-[26px]  right-[105px] md:max-2xl:right-[60px] cursor-pointer"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 7.125C11.2044 7.125 10.4413 7.37522 9.87868 7.82062C9.31607 8.26602 9 8.87011 9 9.5C9 10.1299 9.31607 10.734 9.87868 11.1794C10.4413 11.6248 11.2044 11.875 12 11.875C12.7956 11.875 13.5587 11.6248 14.1213 11.1794C14.6839 10.734 15 10.1299 15 9.5C15 8.87011 14.6839 8.26602 14.1213 7.82062C13.5587 7.37522 12.7956 7.125 12 7.125ZM12 13.4583C10.6739 13.4583 9.40215 13.0413 8.46447 12.299C7.52678 11.5566 7 10.5498 7 9.5C7 8.45018 7.52678 7.44337 8.46447 6.70104C9.40215 5.9587 10.6739 5.54167 12 5.54167C13.3261 5.54167 14.5979 5.9587 15.5355 6.70104C16.4732 7.44337 17 8.45018 17 9.5C17 10.5498 16.4732 11.5566 15.5355 12.299C14.5979 13.0413 13.3261 13.4583 12 13.4583ZM12 3.5625C7 3.5625 2.73 6.02458 1 9.5C2.73 12.9754 7 15.4375 12 15.4375C17 15.4375 21.27 12.9754 23 9.5C21.27 6.02458 17 3.5625 12 3.5625Z" fill="#7F8B9E" />
                                    </svg> : <Image
                                        src="/hide.png"
                                        alt=" Password Hider"
                                        width={22}
                                        height={22}

                                    />}
                                </span>
                            </div>

                            <div className="flex flex-row">
                                <div className=" ml-5 mb-6 ">
                                    <input className="w-[20px] h-[20px]" type="checkbox" name="terms" id="terms" />
                                </div>
                                <div className=" w-[223px] h-[19px]   ml-[12px] md:max-lg:mt-[36px] xl:mt-[37px] font-medium text-base text-txt-rgba font-[poppins] lg:max-xl:mt-[20px] lg:max-xl:ml-[12px] xl:max-2xl:mt-[30px] xl:max-2xl:ml-[11px] 2xl:mt-[35px]">
                                    <p className="font-medium text-md text-txt-rgba font-[poppins]">I agree to terms & conditions</p>
                                </div>
                            </div>

                            <div className="rounded-md">
                                <button className="w-[181px] h-[51px]  bg-blue-rgba ml-[147px] ">
                                    <div>
                                        <p className="text-white font-medium text-center">Sign in</p>
                                    </div>
                                </button>
                            </div>

                            <div className="w-[181px] h-[22px]     mb-2.5   mt-[12px] ml-[150px] font-semibold lg:max-xl:ml-[195px]  ">
                                <p className="font-[Nunito Sans] text-base font-medium  text-blue-rgba ">Don’t have an account?</p>
                            </div>
                        </div>
  </div>
</div>
)


  
}
        </>
    );
}
