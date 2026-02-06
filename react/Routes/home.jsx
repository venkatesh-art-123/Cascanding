import { useParams } from "react-router-dom";

function Home() {

    const { username } = useParams()
    return (
        <>
            <h1>{username ? username : "Home"}</h1>
        </>
    )
}

export default Home;