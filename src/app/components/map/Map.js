import { useState, useEffect, useRef } from "react"

const Map1 = ()=>{
    const [map, setMap] = useState(null);
    const ref = useRef();

    useEffect(()=>{
        const newMap = new window.google.maps.Map(ref.current, {
            center : { lat: 37.29576, lng: 126.8372},
            zoom : 16,
        });     
        
        setMap(newMap);
    },[])

    return (
        <div ref={ref} id="map"></div>
    )
}

export default Map1;