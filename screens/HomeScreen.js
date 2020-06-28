import * as React from 'react';
import {parseString} from 'xml2js';
import {View} from 'react-native';
import {Text, Button} from 'react-native-elements';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      item: [],
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
    let day = today.getDay();
    day = day < 10 ? '0' + day : day;

    return today.getFullYear() + month + day;
  };

  render() {
    const loading = () => {
      if (!this.state.loaded) {
        this._getData(this._getToday());
        return <Text>Loading</Text>;
      }
    };
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        {loading()}
        {this.state.item.map((item) => {
          <Text>item.accDefRate[0]</Text>;
        })}
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button title="Get Data" onPress={() => this.getData()} />
      </View>
    );
  }
}

export default HomeScreen;
