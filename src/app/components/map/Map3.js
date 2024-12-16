import { useState, useEffect, useRef } from "react"

const Map3 = ()=>{
    const [map, setMap] = useState(null);
    const ref = useRef();

    useEffect(()=>{
        const newMap = new window.google.maps.Map(ref.current, {
            center : { lat: 37.41397, lng: 127.0999},
            zoom : 18,
        });     
        
        setMap(newMap);
    },[])

    return (
        <div ref={ref} id="map"></div>
    )
}

export default Map3;