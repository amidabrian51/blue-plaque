import React, { useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';


function DetailPlaqueCard({match}){
    
    useEffect(() =>{
        fetchItem();
        console.log(match)
        // eslint-disable-next-line 
    },[])
    const [item, setItem] = useState([]);
    const [selected, setSelected] = useState({})
    
    const mapStyles = {        
        height: "50vh",
        width: "50%"
    };
    
    const onSelect = item => {
        setSelected(item)
    }

    //   const defaultCenter = {
    //     lat: 51.5235, lng: -0.1399
    //   }

    const fetchItem = async()=>{
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
        // targetUrl = 'https://s3.eu-west-2.amazonaws.com/openplaques/open-plaques-london-2019-03-13.json'
        const fetchItem = await fetch(proxyUrl + `http://openplaques.org/plaques/${match.params.id}.json`)
        const item = await fetchItem.json();
        setItem(item);
        console.log(item)
    }
    
    const API_KEY = process.env.REACT_APP_GOOGLE_KEY;
    
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
            <LoadScript
            googleMapsApiKey={API_KEY}>
        <GoogleMap
           mapContainerStyle={mapStyles}
          zoom={17}
          center={{lat: item.latitude, lng: item.longitude}}>
          {
          <Marker key={item.inscription} position={{lat: item.latitude, lng: item.longitude}}
          onClick={()=> onSelect(item)}
          />
          }
          {
            selected.inscription && 
            (
          <InfoWindow
          position={{lat: item.latitude, lng: item.longitude}}
          clickable={true}
          onCloseClick={() => setSelected({})}
          >
              <p>{selected.inscription}</p>
          </InfoWindow>
            )
        }
          </GoogleMap>
     </LoadScript>
            
        </div>
    )
}

export default DetailPlaqueCard;