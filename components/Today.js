import * as React from 'react';
import {StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {Text} from 'react-native-elements';

export default class Today extends React.Component {
  constructor(props) {
    super(props);
  }

  _getToday = () => {
    const today = new Date();
    return (
      today.getFullYear() +
      today.toLocaleDateString().slice(0, 2) +
      today.toLocaleDateString().slice(3, 5)
    );
  };

  _getTodayStr = () => {
    const today = this._getToday();

    return (
      ' ' +
      today.slice(0, 4) +
      '.' +
      today.slice(4, 6) +
      '.' +
      today.slice(6) +
      ' '
    );
  };

  render() {
    return (
      <SafeAreaView style={style.todayContainer}>
        <Text h6>({this._getTodayStr()})</Text>
      </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  todayContainer: {
    padding: 5,
  },
});
