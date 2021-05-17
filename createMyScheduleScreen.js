import React from "react";
import {TouchableOpacity , Text , Image , StyleSheet , View, TextInput, Alert , Modal, ScrollView , KeyboardAvoidingView} from "react-native"
import DietPlanner from "../screens/dietPlanner"
import firebase from "firebase";
import db from "../config";
import MyHeader from "../components/myHeader"
//import DropDownPicker from 'react-native-dropdown-picker'

import {Picker} from '@react-native-picker/picker';

export default class CreateMySchedule extends React.Component{

    constructor(){
        super()
        this.state={
            day:""
        }
    }

    render(){
        return(
            <View style = {{flex:1}}>
                
                    <MyHeader title={"Create My Schedule"} navigation={this.props.navigation}/>
               
        <View style = {{flex:1, alignItems:'center'}}>
        <Picker
           
            selectedValue={this.state.day}
            style={{ height: 30, width: "50%", alignItems:'center' }}
            onValueChange={(itemValue, itemIndex) => this.setState({day:itemValue})}
        >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
        </Picker>
                

            </View>
            </View>
        )
    }
}