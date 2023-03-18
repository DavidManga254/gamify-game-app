import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { CompleteApp } from './pages/combinedpages';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

function App() {
  return (
    <NavigationContainer>
      <CompleteApp/>
    </NavigationContainer>
  );
}

export default gestureHandlerRootHOC(App);


