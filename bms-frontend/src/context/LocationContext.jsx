import {createContext, useContext, useEffect,useState} from 'react';

const LocationContext = createContext();
 


export const LocationProvider = ({children})=>{
  
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    const fetchLocationData = async (latitude, longitude)=>{
      try{
        const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
        const data = await response.json();
        setLocation(data.city || data.locality || 'Unknown Location');
      }catch(err){
        setError('Failed to fetch location data');
      }finally{
        setLoading(false);
      }
    }

    //Logic to fetch and set location.
    navigator.geolocation.getCurrentPosition(
      (position)=>{
        const {latitude, longitude} = position.coords;
        fetchLocationData(latitude, longitude);
      },()=>{
        setError('Unable to retrieve your location');
        setLoading(false);}
    )
  },[])


  return (
    <LocationContext.Provider value={{location,loading,error}}>
      {children}
    </LocationContext.Provider>
  )
}


export const useLocation=()=>useContext(LocationContext )

