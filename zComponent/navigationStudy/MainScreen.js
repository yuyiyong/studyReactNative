import React, {Component} from 'react';
import {Text} from 'react-native'
import {navigate} from 'react-navigation'
/*import {connect} from 'dva';
@connect(({})=>({
loading:loading.effects[''],
}))*/
class MainScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
     <Text
         // onPress={() => {alert('haha')}}
       //onPress={()=>navigate('Profile',{name:'jane'})}
     >"go to jane's profile"</Text>
    )
  }
}

export default MainScreen;
