import { useEffect, useState } from "react";
import axios from "axios"

export const Home = ()=>{
    const [city,getCity] = useState([])

    const getData =()=>{
        axios.get("http://localhost:8080/cities").then(({data})=>{
            console.log(data)
            getCity([...data])
        })
    }
    useEffect(()=>{
        getData()
    },[])


    return <div>
        <table>
            
            <tr>
                <th>Id</th>
                <th>Country</th>
                <th>City</th>
                <th>Popullation</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            <tr>
                <td>{city.map((el)=>{
                    return <p>{el.id}</p>
                })}</td>
                <td>{city.map((el)=>{
                    return <p>{el.country}</p>
                })}</td>
                <td>{city.map((el)=>{
                    return <p>{el.city}</p>
                    
                })}</td>
                <td>{city.map((el)=>{
                    return <p>{el.popullation}</p>
                })}</td>
                <td>{city.map((el)=>{
                    return <p>edit</p>
                })}</td>
                <td>{city.map((el)=>{
                    return <p>delete</p>
                })}</td>
            </tr>
        </table>
    </div>
}