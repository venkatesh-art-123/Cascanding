
export const registration = async (req, res) => {
    try {
        console.log("req body", req?.body)
        const { name, email, password } = req?.body;
        // const createData = ne 
    } catch (e) {
        console.log("registration__Err", e)
    }
}


export const login = async (req, res) => {
    try {
        const { name, email, password } = req?.body;
        // const createData = ne 
    } catch (e) {
        console.log("login__Err", e)
    }
}