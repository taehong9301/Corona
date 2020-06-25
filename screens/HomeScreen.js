import * as React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-elements';

const serviceKey = "Eh7oD%2FCmI2jArhnqUafKWPhAf03ygmbQ2GNbFJHk0aU1yx1CtuWeAtlz4bB9bSA5Q7v%2FnukBdZEMUMHxgOJakg%3D%3D";

function getData() {
  const url = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson';
  let queryParams = '?' + encodeURIComponent('ServiceKey') + '=' + serviceKey; /* Service Key*/
  queryParams += '&' + encodeURIComponent('ServiceKey') + '=' + encodeURIComponent('-'); /* */
  queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* */
  queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /* */
  queryParams += '&' + encodeURIComponent('startCreateDt') + '=' + encodeURIComponent('20200310'); /* */
  queryParams += '&' + encodeURIComponent('endCreateDt') + '=' + encodeURIComponent('20200315'); /* */

  const full_url = url + queryParams;
  fetch(full_url)
    .then((response) => response.text())
    .then((responseText) => {
      parseString(responseText, function (err, result) {
        console.log(result["response"]["body"][0]["items"][0]);
        return result;
        });
    })
    .catch((error) => {
      console.log('Error fetching the feed: ', error);
    });
}

function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
  }

  export default HomeScreen;