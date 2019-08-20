import React, {Component} from 'react';
import {Navigator, ScrollView, Text, View} from 'react-native';

class DongFang extends Component {
    render() {
        let defaultName = 'List';
        let defaultComponent = List;
        return (
            <Navigator
                initialRoute={{name: defaultName, component: defaultComponent}}
                //配置场景
                configureScene={
                    (route) => {
                        return Navigator.SceneConfigs.VerticalDownSwipeJump;
                    }
                }
                renderScene={
                    (route, navigator) => {
                        let Component = route.component;
                        console.log('navigator', navigator);
                        console.log('route', route);
                        return <Component {...route.params} navigator={navigator}/>;
                    }
                }
            />
        );
    }
}

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: 'dongfangyao',
        };
    }

    _pressButton = () => {
        const {navigator} = this.props;
        console.log('navigator', navigator);

        if (navigator) {
            navigator.push({
                name: 'Detail',
                component: Detail,
                params: {
                    author: this.state.author,
                },

            });
        }
    };

    render() {
        return (
            <View>
                <ScrollView>
                    <Text onPress={() => this._pressButton()}>
                        豪华游轮
                    </Text>
                </ScrollView>
            </View>

        );
    }
}

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    _pressButton = () => {
        const {navigator} = this.props;
        if (navigator) {
            navigator.pop();
        }
    };

    componentDidMount(): void {
        /* this.setState({
             author:this.props.author,
         })*/
    }

    render() {
        return (
            <ScrollView>
                <Text
                    onPress={() => this._pressButton()}
                >
                    点击跳转回去
                </Text>
            </ScrollView>
        );
    }
}

export default DongFang;
