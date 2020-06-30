import * as React from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import {Text} from 'react-native-elements';

export default class Info extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={style.infoContainer}>
        <View style={style.infoArea}>
          <Text h6>누적검사</Text>
          <Text h4>234,233</Text>
          <Text h6>▲45</Text>
        </View>
        <View style={style.infoArea}>
          <Text h6>완치</Text>
          <Text h4>23,423</Text>
          <Text h6>▲3</Text>
        </View>
        <View style={style.infoArea}>
          <Text h6>사망</Text>
          <Text h4>234</Text>
          <Text h6>▲2</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  infoContainer: {
    padding: 5,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoArea: {
    padding: 5,
    alignItems: 'flex-start',
  },
});
