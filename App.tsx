/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 *//*


import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
*/
import React from 'react';
import {View, Text, FlatList, ListRenderItem} from 'react-native';
import styled from 'styled-components/native';
//import {StyleSheet} from 'react-native';
//import TextItem from './components/TextItem';

type ListItem = {id: string, text: string}
type List = ListItem[];

const list: List = [
  {id: "1", text: "투수리스트를 만들꼬야!"},
  {id: "2", text: "투수리스트를 만들수 있을까..?"},
  {id: "3", text: "투수리스트를 어떻게든 만들자!"},
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
    alignItems:'center'
  },
}); */
