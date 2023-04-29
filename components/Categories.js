import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

const CategoriesBtn = (props) => {
    return <TouchableOpacity style={styles.categoriesBtn}>
        <Image source={props.image} style={styles.images} />
        <Text style={{fontWeight: 'bold', color: 'white'}}> {props.text} </Text>
    </TouchableOpacity>
}

const Categories = () => {
    const categoriesData = [
        {text: 'Pick-Up', image: require('../assets/images/shopping-bag.png')},
        {text: 'Soft Drink', image: require('../assets/images/soft-drink.png')}, 
        {text: 'Bakery Items', image: require('../assets/images/desserts.png')}, 
        {text: 'Fast Food', image: require('../assets/images/fast-food.png')}
    ];

    return <View style={ {width: '100%', alignItems: 'center'} }>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={ styles.categories } >
                {
                    categoriesData.map( (obj, index) => {
                        return <CategoriesBtn text={obj.text} image={obj.image} key={index} />
                    })
                }
                <CategoriesBtn />
            </ScrollView>
        </View>
}

export default Categories;

const styles = StyleSheet.create({
    categories: {
        flexDirection: 'row',
        backgroundColor: '#000',
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 10
    },

    categoriesBtn: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20
    },

    images: {
        width: 40,
        height: 40
    }
})