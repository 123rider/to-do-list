import axios from "axios"
import { AxiosResponse } from "axios";
import type { credentials, user_form_input } from "./dataType";




const login =  async (user_credentials:credentials) => {
    const url = `${import.meta.env.VITE_API_BASE_URL}auth/login/`
    console.log(url)
    try{
        const response : AxiosResponse =  await axios.post(url,user_credentials);
        return await response.data
    }catch(err){
        if(axios.isAxiosError(err)){
           return  await{
            message : err.message ,
            response : err.response?.data
            
           }
        }else{
            return err
        }
    }

}
const register =  async (user_form_input:user_form_input) => {
    const url = `${import.meta.env.VITE_API_BASE_URL}auth/reg/`
    console.log(url)
    try{
        const response : AxiosResponse =  await axios.post(url,user_form_input);
        return response.data
    }catch(err){
        if(axios.isAxiosError(err)){
           return  await{
            message : err.message,
            response : err.response?.data
            
           }
        }else{
            return err
        }
    }
}





export {login,register}