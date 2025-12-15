import { useReducer } from "react";

const Action = {
    "incre" :  "Increment",
    "decre" : "Decrement"
}
function reducerFn(state, action) {

    switch(action.type) {
        case Action.incre : return { state : state.count + 1 };
        case Action.decre : return { state : state.count - 1};
        default : return { count : 0 }
    }

    
}

function Reducer() {

    const [state, dispatch] = useReducer(reducerFn, { count: 1  });

    const [count, setCount] = useState("");

    const incr = () => {
        dispatch({ type: Action.incre})
    }

    const decr = () => {
        dispatch({ type: Action.decre })
    }

    return (
        <>
            <button onClick={incr}> + </button>
            <h1>{count}</h1>
            <button onClick={decr}> - </button>
        </>
    )
}

export default Reducer();