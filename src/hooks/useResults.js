import {useState,useEffect} from 'react'
import yelp from  '../api/yelp'

export const useResults=()=>{
    const [results,setResults]=useState([])
    const [errorMessage,setErrorMessage]=useState('')

    const searchAPI=async (searchTerm)=>{
        console.log("Hi There!")
        try{
            const response = await yelp.get('/search',
            {params:{
                limit:50,
                term:searchTerm,
                location:'san jose'
            }})
            setResults(response.data.businesses)
        }
        catch(e){
            setErrorMessage("Something went wrong")
            console.log(e)
        }
    }
    //Bad code infinite loop
    //searchAPI("pasta") , hence use useEffect hook

    useEffect(()=>{
        searchAPI('pizza')
    },[])

    return [searchAPI,results,errorMessage]
}
