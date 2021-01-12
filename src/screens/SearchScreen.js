import React,{useState} from 'react'
import {View,Text,StyleSheet} from 'react-native'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'

const SearchScreen=()=>{
    const [term,setTerm] = useState('')
    const [results,setResults]=useState([])
    const [errorMessage,setErrorMessage]=useState('')

    const searchAPI=async (searchTerm)=>{
        console.log("Hi There!")
        try{
            const response = await yelp.get('/search',
            {params:{
                limit:50,
                term:searchTerm,
                location:'roma'
            }})
            setResults(response.data.businesses)
        }
        catch(e){
            setErrorMessage("Something went wrong")
            console.log(e)
        }
    }
    //Bad code infinite loop
    searchAPI("pasta")
    return(
        <View>
            <SearchBar term={term} onTermChange={setTerm} onTermSubmit={()=>searchAPI(term)}/>
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} restaurants</Text>
        </View>
    )
}

const styles=StyleSheet.create({

})

export default SearchScreen