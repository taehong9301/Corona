import * as React from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import {Text, Badge} from 'react-native-elements';

export default class DecidePannel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {decideCnt, decideDeltaCnt} = this.props;
    return (
      <SafeAreaView style={style.decidePannelContainer}>
        <SafeAreaView style={style.decidePannelWrap}>
          <Badge
            status="error"
            value={
              <View style={style.decideBadgeWrap}>
                <Text h6 style={style.decideBadge}>
                  확진
                </Text>
              </View>
            }
          />
          <SafeAreaView style={style.decidePannel}>
            <Text h1 style={style.decidePannelText1}>
              {decideCnt}
            </Text>
            <Text h6 style={style.decidePannelText2}>
              ▲{decideDeltaCnt}
            </Text>
          </SafeAreaView>
        </SafeAreaView>
      </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  decidePannelContainer: {
    padding: 10,
  },
  decidePannelWrap: {
    flex: 1,
    alignItems: 'flex-start',
  },
  decideBadgeWrap: {
    padding: 10,
  },
  decideBadge: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  decidePannel: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  decidePannelText1: {
    color: 'red',
    fontWeight: 'bold',
    marginRight: 10,
  },
  decidePannelText2: {
    color: 'red',
    fontWeight: 'bold',
    marginBottom: 7,
  },
});
