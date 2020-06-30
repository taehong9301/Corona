import * as React from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import {Text} from 'react-native-elements';

export default function Footer() {
  return (
    <>
      <SafeAreaView style={style.footerContainer}>
        <View style={style.footerTextWrap}>
          <Text h6 style={style.footerText}>
            질병관리본부
          </Text>
          <Text h6 style={style.footerText}>
            Email: public.devhong@gmail.com
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const style = StyleSheet.create({
  footerContainer: {
    height: '10%',
    padding: '5%',
  },
  footerTextWrap: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  footerText: {
    color: '#868e96',
    paddingVertical: 3,
  },
});
