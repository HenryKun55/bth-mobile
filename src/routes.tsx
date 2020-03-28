import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import Incidents from './pages/Incidents';
import Details from './pages/Details';
import Header from './components/Header';

const AppStack = createStackNavigator();

const Routes: React.FC = () => (
<AppStack.Navigator>
    <AppStack.Screen
      name="Incidents"
      component={Incidents}
      options={{
          header: (props) => (<Header {...props}/>),
          ...TransitionPresets.SlideFromRightIOS,
        }}
    />
    <AppStack.Screen
      name="Details"
      component={Details}
      options={{
        header: (props) => (<Header {...props}/>),
        ...TransitionPresets.SlideFromRightIOS,
        gestureEnabled: true,
      }}
    />
  </AppStack.Navigator>
);

export default Routes;
