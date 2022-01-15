import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from './src/screens/SearchScreen';

const { Navigator, Screen } = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          initialRouteName: 'Search',
          headerMode: 'screen',
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#A865C9' },
          headerTitleAlign: 'center',
        }}
      >
        <Screen name="Search" component={SearchScreen} />
      </Navigator>
    </NavigationContainer>
  );
};

export default App;
