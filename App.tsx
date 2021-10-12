import React from 'react';
import {View, StyleSheet, Text, FlatList, ListRenderItem} from 'react-native';
import styled from 'styled-components/native';
//import {StyleSheet} from 'react-native';
//import TextItem from './components/TextItem';

type ListItem = {id: string, text: string}
type List = ListItem[];

const list: List = [
  {id: "1", text: "원두"},
  {id: "2", text: "투두"},
  {id: "3", text: "쓰리두"},
];


function App() {
  const renderItem: ListRenderItem<ListItem> = ({item}) => {
    return (
        <View>
          <Text>{item.text}</Text>
        </View>
    );
  };

  return (
    <Container>
      <TodoList
        style={{ backgroundColor: 'ivory', height: '100%' }}
        contentContainerStyle={{ padding: 50, }}

        data={list}
        renderItem={renderItem}
        keyExtractor={(item: ListItem)  => item.id}
      />
    </Container>
  );
}

const TodoList = (styled.FlatList`
  width: 100%;
` as unknown) as typeof FlatList;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`

const styles = StyleSheet.create({
  tab_1_item: {
    fontSize: 20,
  },
});

export default App;

/* function App() {
  return (
    <View style={styles.container}>
      <TextItem text="Hello world from React Naitve Web!" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems:'center',
  },
}); */
