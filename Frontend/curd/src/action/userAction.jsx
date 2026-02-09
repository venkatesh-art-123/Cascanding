import config from "../../config/env"
import { Axios } from "../../config/axios"
// const registrationHooks = async () => {
//     try {

//     } catch (e) {
//         console.log("registrationHooks__Err", e)
//     }
// }

export const registrationHooks = async (data) => {
    try {
        console.log("`${config.API_URL}register`", data)
        const response = await Axios({
            url: `${config.API_URL}/signUp`,
            method: "post",
            data: data
        })
        // return response;
    } catch (e) {
        console.log("registrationHooks__Err", e)
    }
}