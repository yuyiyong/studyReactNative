import React, {useState, useEffect} from 'react';
import {View, Text, Picker, StyleSheet} from 'react-native';

const Pickers = () => {
    const [language, setLanguage] = useState(null);
    return (
        <View style={styles.layout}>
            <View style={styles.pickerw}>
                <Picker
                    selectedValue={language}
                    onValueChange={lang => setLanguage(lang)}
                    mode='dropdown' //对话框样式: dialog  下拉:dropdown
                    style={styles.picker}
                >
                    <Picker.Item label="Java" value="java"/>
                    <Picker.Item label="JavaScript" value="js"/>
                    <Picker.Item label="C语言" value="c"/>
                    <Picker.Item label="PHP开发" value="PHP"/>
                </Picker>
            </View>
            <Text style={styles.last}>{language}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    pickerw:{
        borderWidth:1,
        borderColor:'#ccc',
        width: 200,
    },

    layout: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
        // textAlign:'center',
    },
    last: {
        marginBottom: 80,
    },
    picker: {
        color: '#f00',
        width: 200,
        textAlign: 'center',

    },
});
export default Pickers;
