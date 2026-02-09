import { decryptObj } from "../Decryption/decrypt";


export const decryptRequest = async (req, res, next) => {
    try {
        let token = req?.body?.token ?? "";
        let decryptData = await decryptObj(token);
        if (decryptData) {
            req.body = decryptData;
            return next()
        } else {
            return res.json({ status: false, status: 400, message: "Invalid token" })
        }

    } catch (e) {
        console.log("decryptRequest__Err", e)
    }
}