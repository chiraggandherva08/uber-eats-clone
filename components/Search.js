import React from "react";
import { View, Text } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Search = () => {
    return (
        <View style={{ paddingTop: 10, paddingBottom: 10, flexDirection: 'row', backgroundColor: 'white' }}>
            <GooglePlacesAutocomplete placeholder="Search...." styles={{
                textInput: {
                    backgroundColor: '#eee',
                    borderRadius: 20,
                    fontSize: 15,
                },
                textInputContainer: {
                    backgroundColor: '#eee',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 15,
                    borderRadius: 30,
                    marginRight: 15
                }
            }}

                renderLeftButton={() => <View style={{ marginLeft: 10 }}>
                    <Ionicons name="location-sharp" size={24}></Ionicons>
                </View>}

                renderRightButton={() => <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10, justifyContent: 'space-between', width: 90, backgroundColor: 'white', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 15 }}>
                    <AntDesign name="clockcircle" size={15}></AntDesign>
                    <Text>Search</Text>
                </View>}
            />

            <View style={ {justifyContent: 'center', marginRight: 20} }>
                <AntDesign name="clockcircle" size={20}></AntDesign>
            </View>
        </View>
    )
}

export default Search;