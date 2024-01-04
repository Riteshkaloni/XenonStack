import React , {useState} from 'react'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import { useNavigate } from 'react-router-dom';
import { Modal } from '@mui/material';
import { GlobalContext } from '../navigation/ContextProvider';
import { loginApi, projectname } from '../utils/Apis';
import { Constants } from '../utils/Constants';

const Register = () => {

    const { isGlobalAccess, setGlobalAccess, isGlobalAccessType, setGlobalAccessType } = React.useContext(GlobalContext)
    const navigate = useNavigate()
    const [phone, setphone] = React.useState("")
    const [password, setpassword] = React.useState("")
    const [name, setname] = React.useState("")
    const [email, setemail] = useState("")
    const [error, seterror] = React.useState(false)
    const [message, setmessage] = React.useState("")
    const handleClose = () => {
        seterror(false)
    }
    const submit = async () => {

        if (phone == "" || password == "" || name== "" || email == "") {

            seterror(true)
            setmessage("Please Complete Full Form")

        } else {

            loginApi("users", {
                phone: phone,
                password: password,
                name: name,
                email: email,
            }).then((result) => {
                console.log(result)
                if (result.error == 0) {
                    
                    navigate("/login")
                    
                } else {
                    alert(result.status)
                }
            })
        }
    }

    return (


        <div class="login">
            <div class="container sm:px-10">

                <div class="block xl:grid grid-cols-2 gap-4">

                    <div class="hidden xl:flex flex-col min-h-screen">
                        <a href="" class="-intro-x flex items-center pt-5">
                            <img alt="Midone - HTML Admin Template" class="w-6" src="dist/images/logo.svg" />
                            <span class="text-white text-lg ml-3"> {projectname} </span>
                        </a>
                        <div class="my-auto">
                            <img alt="Midone - HTML Admin Template" class="-intro-x w-1/2 -mt-16" src="dist/images/illustration.svg" />
                            <div class="-intro-x text-white font-medium text-4xl leading-tight mt-10">
                                A few more clicks to
                                <br />
                                sign in to your account.
                            </div>


                            <div class="-intro-x mt-5 text-lg text-white text-opacity-70 dark:text-slate-400">Manage all your  account's in one place</div>

                        </div>
                    </div>

                    

                    <div class="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
                        <div class="my-auto mx-auto xl:ml-20 bg-white dark:bg-darkmode-600 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
                            <h2 class="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">
                                Register
                            </h2>

                            {
                                error
                                    ?
                                    <div class="alert alert-primary alert-dismissible show flex items-center mb-2" role="alert"> <PrivacyTipIcon /> {message} <button onClick={() => {
                                        setmessage("")
                                        seterror(false)
                                    }} type="button" class="btn-close text-white" data-tw-dismiss="alert" aria-label="Close"> <HighlightOffIcon /> </button> </div>
                                    :
                                    null
                            }
                            <div class="intro-x mt-2 text-slate-400 xl:hidden text-center">A few more clicks to sign in to your account. Manage all your e-commerce accounts in one place</div>
                            <div class="intro-x mt-8">
                                <input onChange={(e) => setphone(e.target.value)} type="text" class="intro-x login__input form-control py-3 px-4 block" placeholder="Phone" />
                                <input onChange={(e) => setpassword(e.target.value)} type="password" class="intro-x login__input form-control py-3 px-4 block mt-4" placeholder="Password" />
                                <input onChange={(e) => setemail(e.target.value)} type="text" class="intro-x login__input form-control py-3 px-4 block mt-4" placeholder="Email" />
                                <input onChange={(e) => setname(e.target.value)} type="text" class="intro-x login__input form-control py-3 px-4 block mt-4" placeholder="Name" />
                            </div>
                            

                            <div class="intro-x mt-5 xl:mt-8 text-center xl:text-left">
                                <button onClick={() => submit()} class="btn btn-primary py-3 px-4 w-full xl:w-32 xl:mr-3 align-top">Register</button>
                            </div>
                            <div class="intro-x mt-10 xl:mt-24 text-slate-600 dark:text-slate-500 text-center xl:text-left"> Already a user <a class="text-primary dark:text-slate-200 underline" href="/login">Login</a> <a class="text-primary dark:text-slate-200" href=""></a> </div>
                        </div>
                    </div>
                </div>
            </div>
            

        </div>


    )
}

export default Register