import * as React from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';
import Today from './Today';
import DecidePannel from './DecidePannel';
import Info from './Info';

export default function Content() {
  return (
    <>
      <ScrollView style={style.contentContainer}>
        {/* 날짜 */}
        <Today />
        {/* 상단 확진자 */}
        <DecidePannel decideCnt={'123,123'} decideDeltaCnt={'23'} />
        {/* 기타 정보 */}
        <Info />
      </ScrollView>
    </>
  );
}

const style = StyleSheet.create({
  contentContainer: {
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
