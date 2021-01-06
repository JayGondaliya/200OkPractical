import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { OKColors } from "../Assets/OKColors";


export default class SubNavBar extends React.Component {
    render() {
        return (
            <View style={{ flexDirection: "row",alignItems:'center',backgroundColor: OKColors.grey }}>
                <TouchableOpacity style={{padding:10}} onPress = {this.props.onLeft}>
                    <Image style={{width: 20, height: 20}} source={this.props.leftSource} />
                </TouchableOpacity>
                <Text style={{flex:1, textAlign:'center'}}>{this.props.title}</Text>
                <TouchableOpacity  style={{padding:10}} onPress={this.props.onRight}>
                    <Image style={{width: 20, height: 20}} source={this.props.rightSource} />
                </TouchableOpacity>
            </View>
        )
    }
}