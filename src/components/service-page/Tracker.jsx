import { useState, useEffect, Component } from "react";
import { useParams } from "react-router";

const Tracker = ()=> {
    const [tracks, setTracks] = useState({});
    const [details, setDetails] = useState([]);
    const params = useParams();

    useEffect(()=> {
        const fetchTrackId = async ()=> {
            const res = await fetch(`http://localhost:1337/api/trackers?populate=*&filters[TrackId][$eq]=${params.orderId}`);
            const data = await res.json();
            setTracks(data.data[0].attributes)
            setDetails(data.data[0].attributes.OrderDetails)
            console.log(">>>", details)
        }
        fetchTrackId();
    },[])
    return(
        <div>
            <h1>Customer Name = {tracks.CustomerName}</h1>
            <h2>Phone Number = {tracks.PhoneNumber}</h2>
            <h2>Address = {tracks.Address}</h2>
                Order Details = 
                <div>
                    {
                    details.map(
                        ({id, ItemName, Quantity})=> (
                        <tr key={id}>
                            <td>Item Name = {ItemName}</td>
                            <td>Quantity = {Quantity}</td>
                        </tr>
                    )
                    )}
                </div>
        </div>
    )
}

export default Tracker;