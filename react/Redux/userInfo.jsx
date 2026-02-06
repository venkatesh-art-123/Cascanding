import { useSelector } from "react-redux";

function userInfo() {
    const { userDetails } = useSelector((state) => state.user);
    console.log("userInfo details", userDetails)
    return (
        <>
            {userDetails && userDetails?.length > 0 && userDetails?.map((item) => {
                return (
                    <>
                        <h1>{item?.name}</h1>
                        <h1>{item?.email}</h1>
                        <h1>{item?.age}</h1>
                    </>
                )
            })}
        </>
    )
}

export default userInfo; 