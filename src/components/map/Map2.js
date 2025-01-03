import { useState, useEffect, useRef } from "react"

const Map2 = ()=>{
    const [map, setMap] = useState(null);
    const ref = useRef();

    useEffect(()=>{
        const newMap = new window.google.maps.Map(ref.current, {
            center : { lat: 37.36576, lng: 126.9570},
            zoom : 20,
        });     
        
        setMap(newMap);
    },[])

    return (
        <div ref={ref} id="map"></div>
    )
}

export default Map2;