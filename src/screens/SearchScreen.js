import React,{useState} from 'react'
import {View,Text,StyleSheet} from 'react-native'
import SearchBar from '../components/SearchBar'
import { useResults } from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen=()=>{
    console.log(results)
    const [term,setTerm] = useState('')
    const [searchAPI,results,errorMessage] = useResults()
    return(
        <View>
            <SearchBar 
            term={term} 
            onTermChange={setTerm} 
            onTermSubmit={()=>searchAPI(term)}/>
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} restaurants</Text>
            <ResultsList title="Cost Effective"/>
            <ResultsList title="Bit Pricier"/>
            <ResultsList title="Big Splender"/>
        </View>
    )
}

const styles=StyleSheet.create({

})

export default SearchScreen