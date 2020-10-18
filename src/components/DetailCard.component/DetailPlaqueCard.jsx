import React, { useEffect, useState, useRef } from 'react';
import {Link} from 'react-router-dom';
import GoogleMapReact from 'google-maps-react';


function DetailPlaqueCard({match}){
    const mapRef = useRef();
    useEffect(() =>{
        fetchItem();
        console.log(match)
        // eslint-disable-next-line 
    },[])
    const [item, setItem] = useState([]);

    
    // const mapStyles = {
    //     width: '40%',
    //     height: '40%'
    //   };

    const fetchItem = async()=>{
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
        // targetUrl = 'https://s3.eu-west-2.amazonaws.com/openplaques/open-plaques-london-2019-03-13.json'
        const fetchItem = await fetch(proxyUrl + `http://openplaques.org/plaques/${match.params.id}.json`)
        const item = await fetchItem.json();
        setItem(item);
        console.log(item)
    }
    
    
    
    return (
        
        <div>
            <Link to="/">
            <button>
            <i class="fas fa-arrow-left"></i>Back
            </button>
            </Link>
            <h1>Here is the detailed page</h1>
            <h2>The inscription:{item.inscription}</h2>
            <p>Address: {item.address}</p>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
                initialCenter={{
                    latitude: 51.48904, longitude: -0.29049
                  }}
                defaultZoom={15}
                google={window.google}
                style={{ height: '50%', width: '50%' }}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({map}) => {
                    mapRef.current = map;
                }}
            />
        </div>
    )
}

export default DetailPlaqueCard;