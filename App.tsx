/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import FlatCards from './Components/FlatCards';
import FancyCard from './Components/FancyCard';
import ActionCard from './Components/ActionCard';
import ListCard from './Components/ListCard';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container} >
      <ScrollView showsVerticalScrollIndicator={false}>

      <View>
        <FlatCards />
        <FancyCard />
        <ActionCard />
        <ListCard />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingHorizontal:8,
  },
  lightText: {
    color: 'goldenrod',
    fontWeight: 'bold',
    fontSize: 32,
  },
});

export default App;
