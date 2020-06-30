import * as React from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import {Text} from 'react-native-elements';

export default function Header() {
  return (
    <>
      <SafeAreaView style={style.headerContainer}>
        <View style={style.headerTitleWrap}>
          <Text h4 style={style.headerTitle}>
            코로나19 국내 현황
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const style = StyleSheet.create({
  headerContainer: {
    height: '10%',
    padding: 5,
  },
  headerTitleWrap: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  headerTitle: {
    color: '#212529',
  },
});
