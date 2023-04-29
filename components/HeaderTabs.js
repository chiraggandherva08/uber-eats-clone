import React, { useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, StyleSheet, View } from "react-native";

const Header = () => {
    const [activeTab, setActiveTab] = useState('Delivery');

    return (
        <View style={style.header}>
            <Tabs title={"Delivery"} setActiveTab={setActiveTab} activetab={activeTab} />
            <Tabs title={"Pickup"} setActiveTab={setActiveTab} activetab={activeTab} />
            <Tabs title={"Saved"} setActiveTab={setActiveTab} activetab={activeTab} />
        </View>
    )
}

const Tabs = (props) => {
    return (
        <TouchableOpacity style={{
            backgroundColor: (props.activetab === props.title) ? 'black': 'white',
            padding: 5,
            borderRadius: 10
        }}
        onPress={() => {props.setActiveTab(props.title)}}>
            <Text style={{
                color: (props.activetab === props.title) ? 'white': 'black'

            }}> {props.title} </Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    header: {
        color: 'black',
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 5,
        paddingTop: 50,
        paddingBottom: 10,
        backgroundColor: '#fff'
    },

    tabs: {
        backgroundColor: 'black',
        color: 'white',
        padding: 5,
        borderRadius: 10,
    }
})

export default Header;