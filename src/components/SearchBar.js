import React from 'react'
import {View,TextInput,StyleSheet} from 'react-native'
import { Feather } from '@expo/vector-icons';

const SearchBar=(props)=>{
    return(
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput 
            placeholder="Search" 
            style={styles.inputStyle}
            value={props.term}
            onChangeText={newterm=>props.onTermChange(newterm)}
            autoCapitalize="none"
            autoCorrect={false}
            onEndEditing={props.onTermSubmit}/>
        </View>
    )
}

const styles=StyleSheet.create({
    backgroundStyle:{
        marginTop:15,
        backgroundColor:'rgb(210,210,210)',
        height:50,
        borderRadius:5,
        marginHorizontal:15,
        flexDirection:'row'
    },
    inputStyle:{
        flex:1,
        fontSize:18
    },
    iconStyle:{
        fontSize:35,
        alignSelf:'center',
        marginHorizontal:15
    }
})

export default SearchBar