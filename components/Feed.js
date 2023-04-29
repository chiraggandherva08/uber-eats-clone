import React from "react";
import { Image, View, ScrollView, SafeAreaView, Text, StyleSheet } from "react-native";
import Data from './Data';

const Post = (prop) => {
  return (
    <View style={style.post}>
      {/* <Text> {prop.number} </Text> */}
      <Image style={style.image} source={prop.image}/>
      <View style={style.disp}>
        <Text style={style.disptext} > {prop.name} </Text>
        <Text style={style.disptext} > {prop.price} </Text>
        <Text style={style.disptext} > {prop.category} </Text>
      </View>
    </View>
  )
}

const Feed = () => {
  return (
    <ScrollView style={style.feed}>
      {
        Data.map((postData, index) => {
          return <Post
            number={postData.number}
            image={postData.image}
            name={postData.name}
            price={postData.price}
            category={postData.category}
            key={index} ></Post>
        })
      }
    </ScrollView>
  );
}

const style = StyleSheet.create({
  feed: {
    width: '100%',
    backgroundColor: '#eee',
    marginTop: 5,
  }, 
  
  image: {
    width: '98%',
    borderRadius: 10,
    backgroundColor: '#eee'
  },
  
  post: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  
  disp: {
    flexDirection: 'row',
    backgroundColor: '#eee',
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10
  },

  disptext: {
    color: 'white',
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 20,
  }
})

export default Feed;