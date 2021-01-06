import { Image, TouchableOpacity, View, Text } from "react-native";
import React from 'react'
import { OKColors } from "../Assets/OKColors";


export default class NavBar extends React.Component {
    render() {
        return (
            <View style={{ flexDirection: "row",alignItems:'center',backgroundColor: OKColors.green }}>
                <TouchableOpacity style={{padding:10}}>
                    <Image style={{width: 20, height: 20}} source={this.props.leftSource} />
                </TouchableOpacity>
                <Text style={{flex:1, textAlign:'center'}}>{this.props.title}</Text>
                <TouchableOpacity  style={{padding:10}}>
                    <Image style={{width: 20, height: 20}} source={this.props.rightSource} />
                </TouchableOpacity>
            </View>
        )
    }
}

// export default NavBar;