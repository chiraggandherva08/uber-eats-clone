import React from "react";
import Header from "../components/HeaderTabs";
import { SafeAreaView } from "react-native";
import Feed from "../components/Feed";
import Search from '../components/Search';
import Categories from "../components/Categories";

const Home = () => {
    return (
        <SafeAreaView style={{backgroundColor: '#eee'}}>
            <Header/>
            <Search/>
            <Categories/>
            <Feed/>
        </SafeAreaView>
    )
}

export default Home;