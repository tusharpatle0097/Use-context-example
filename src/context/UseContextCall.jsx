import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const productApi = createContext(null);



const UseContextCall = (props) => {

    const [respD, setrespD] = useState([]);
    const [filterData, setfilterData] = useState('')

    useEffect(() => {
        callData();
    }, [])

    const callData = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                console.log(res)
                setrespD(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const filtermydata = respD.filter((items) =>
        items.name.toLowerCase().includes(filterData.toLowerCase())
    )

    const listing = {
        name: "Pawan",
        age: 26,
        class: "12th"
    }

    const contextValues = {
        filtermydata,
        setfilterData,
        filterData,
        listing
    }

    return (
        <div>
            <productApi.Provider value={contextValues} >
                {props.children}
            </productApi.Provider>
        </div>
    )
}

export default UseContextCall