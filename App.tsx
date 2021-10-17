import React from 'react';
import {View, SafeAreaView, StyleSheet, Text, FlatList, Image, ListRenderItem} from 'react-native';
import styled from 'styled-components/native';
//import TextItem from './components/TextItem';

/*
type ListItem = {id: string, text: string}
type List = ListItem[];

const list: List = [
  {id: "1", text: "원두"},
  {id: "2", text: "투두"},
  {id: "3", text: "쓰리두"},
];
*/

const data = [
  {
    id: 1,
    uri: 'https://i.ytimg.com/vi/ZYvvmsrDOj8/maxresdefault.jpg'
  },
  {
    id: 2,
    uri: 'https://i.ytimg.com/vi/ZYvvmsrDOj8/maxresdefault.jpg'
  },
  {
    id: 3,
    uri: 'https://i.ytimg.com/vi/ZYvvmsrDOj8/maxresdefault.jpg'
  },
  {
    id: 4,
    uri: 'https://i.ytimg.com/vi/ZYvvmsrDOj8/maxresdefault.jpg'
  },
  {
    id: 5,
    uri: 'https://i.ytimg.com/vi/ZYvvmsrDOj8/maxresdefault.jpg'
  },
  {
    id: 6,
    uri: 'https://i.ytimg.com/vi/ZYvvmsrDOj8/maxresdefault.jpg'
  },
  {
    id: 7,
    uri: 'https://i.ytimg.com/vi/ZYvvmsrDOj8/maxresdefault.jpg'
  },

]


function App() {
  /*const renderItem: ListRenderItem<ListItem> = ({item}) => {
    return (
        <View style={styles.item}>
          <Text>{item.text}</Text>
        </View>
    );
  };*/

  return (
    <SafeAreaView style={styles.wrap}>
      <FlatList

        data={data}
        ListHeaderComponent={()=>
          <View style={styles.header}>
            <Text style={styles.headerText}>Header</Text>
          </View>
        }
        renderItem={({ item })=>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: item.uri }} />
          </View>
        }
        columnWrapperStyle={styles.imageRow}
        numColumns={3}
      />
    </SafeAreaView>
  );
}

/*
const TodoList = (styled.FlatList`
  width: 100%;
` as unknown) as typeof FlatList;
*/
const styles = StyleSheet.create({
    wrap: {
      flex: 1,
      minWidth: 360,
      width: 365,
      minHeight: 700,
      margin: 'auto',
      border: '1px solid #d3d3d3',
    },
    header: {
      height: 60,
      borderBottomWidth: 2,
      borderBottomColor: '#d3d3d3',
      justifyContent: 'center',
      alignItems: 'center',
    },
    headerText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    imageRow: {
      justifyContent: 'space-between',
    },
    imageContainer : {
        width: 120,
        height: 120,
    },
    image: {
      //width: 120,
      //height: 120,
      height:'100%',
      width:'100%',
      resizeMode:'cover'
    },
});

/*
const Container = styled.View`
  margin-top: 50px;
`
*/

export default App;

