

import React ,{useState, useEffect} from 'react'
import axios from "axios";

const useFetch = () => {
 const [data, setdata] = useState([]);
 const [loading,setLoading] = useState(false);
 const [error , setError] = useState(false);

const fetchData = () => {
    setLoading(true)
  axios.get("http://api.github.com/users?q=Masai").then(r =>{
  setLoading(false)
  setdata(r.data)
  }).catch(e =>{
    setError(true,e);
    setLoading(false);
  });
}

useEffect(() =>{
 fetchData()
},[])

return{
    data,
    loading,
    error,
};


 };

export default useFetch
