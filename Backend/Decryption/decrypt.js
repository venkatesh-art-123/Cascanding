import CryptoJS from "crypto-js";
import config from "../config"

export const decryptObj = (data) => {
    try {
        console.log("decryptObj_datat", data, config.SECRET_KEY)
        var bytes = CryptoJS.AES.decrypt(data, config.SECRET_KEY);
        var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        return decryptedData;

    } catch (e){
        console.log("decryptObj_err", e)
    }

}