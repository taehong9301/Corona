import * as React from 'react';
import {parseString} from 'xml2js';
import {View, SliderComponent} from 'react-native';
import {Card, Text, Button, ListItem, Badge} from 'react-native-elements';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      decideCnt: 8162, // 확진자 수
      clearCnt: 834, // 격리해제 수
      examCnt: 16272, // 검사 진행중인 수
      deathCnt: 75, // 사망자 수
      careCnt: 7253, // 치료중인 환자 수
      accExamCnt: 268212, // 누적 검사 수
      accExamCompCnt: 251940, // 누적 검사 완료 수
    };
  }

  _getData(startDate) {
    const serviceKey =
      'Eh7oD%2FCmI2jArhnqUafKWPhAf03ygmbQ2GNbFJHk0aU1yx1CtuWeAtlz4bB9bSA5Q7v%2FnukBdZEMUMHxgOJakg%3D%3D';
    const url =
      'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson';
    let queryParams =
      '?' +
      encodeURIComponent('ServiceKey') +
      '=' +
      serviceKey; /* Service Key*/
    queryParams +=
      '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* */
    queryParams +=
      '&' +
      encodeURIComponent('numOfRows') +
      '=' +
      encodeURIComponent('10'); /* */
    queryParams +=
      '&' +
      encodeURIComponent('startCreateDt') +
      '=' +
      encodeURIComponent(startDate); /* */
    queryParams +=
      '&' +
      encodeURIComponent('endCreateDt') +
      '=' +
      encodeURIComponent(startDate); /* */

    const full_url = url + queryParams;
    fetch(full_url)
      .then((response) => response.text())
      .then((responseText) => {
        parseString(responseText, (err, result) => {
          const newState = Object.assign({}, this.state);
          if (err !== null) {
            console.log('Fail get data.');
          } else {
            result.response.body.map((itemsList) => {
              itemsList.items.map((itemList) => {
                itemList.item.map((item) => {
                  console.log(item.accDefRate);
                  newState.item.push(item);
                });
              });
            });
          }
          newState.loaded = true;
          this.setState(newState);
        });
      })
      .catch((error) => {
        console.log('Error fetching the feed: ', error);
      });
  }

  _getToday = () => {
    const today = new Date();
    let month = today.getMonth();
    month = month < 10 ? '0' + month : month;
    let day = today.getDate();
    day = day < 10 ? '0' + day : day;

    return today.getFullYear() + month + '' + day;
  };

  _getTodayStr = () => {
    const today = this._getToday();

    return (
      today.slice(0, 4) +
      '년 ' +
      today.slice(4, 6) +
      '월 ' +
      today.slice(6) +
      '일'
    );
  };

  render() {
    // const loading = () => {
    //   if (!this.state.loaded) {
    //     this._getData(this._getToday());
    //     return <Text>Loading</Text>;
    //   }
    // };
    return (
      <>
        <View
          style={{
            padding: 10,
            flex: 1,
          }}>
          <View
            style={{
              padding: 10,
              backgroundColor: '#ffffff',
              flex: 1,
              alignItems: 'flex-start',
            }}>
            <Badge
              status="error"
              value={
                <View style={{padding: 10}}>
                  <Text style={{color: '#ffffff'}}>확진</Text>
                </View>
              }
            />
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'flex-end',
              }}>
              <Text
                h1
                style={{
                  color: 'red',
                  marginRight: 10,
                }}>
                {this.state.decideCnt}
              </Text>
              <Text
                h4
                style={{
                  color: '#000000',
                  alignItems: 'flex-end',
                }}>
                {this.state.careCnt}
              </Text>
            </View>
          </View>
          <View
            style={{
              padding: 10,
              backgroundColor: '#ffffff',
              flex: 1,
              alignItems: 'flex-start',
              flexDirection: 'row',
            }}>
            <Text h6 style={{alignItems: 'flex-end'}}>
              누적 검사자
            </Text>
            <Text h3>{this.state.accExamCnt}</Text>
            <Text h6 style={{alignItems: 'flex-end'}}>
              누적 검사 완료
            </Text>
            <Text h3>{this.state.accExamCompCnt}</Text>
          </View>
        </View>
      </>
    );
  }
}

export default HomeScreen;
