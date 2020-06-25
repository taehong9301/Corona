import * as React from 'react';
import {View} from 'react-native';
import {Text, Button} from 'react-native-elements';

export default function DetailsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button title="Go to Details... again" />
    </View>
  );
}
