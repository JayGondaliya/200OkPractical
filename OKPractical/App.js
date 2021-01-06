/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Assets from './src/Assets';
import { OKColors } from './src/Assets/OKColors';
import NavBar from './src/Components/NavBar';
import SubNavBar from './src/Components/SubNavBar';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.arrayProductList = [
      {
        name: 'Bare Denim',
        description: 'Green Printed Crew Neck T-Shirt',
        price: '200',
        rating: '4.1',
        total_rating_person: '42',
        image: 'https://i.picsum.photos/id/1000/5626/3635.jpg?hmac=qWh065Fr_M8Oa3sNsdDL8ngWXv2Jb-EE49ZIn6c0P-g',
        sizes: [
          {
            size: 'small',
            price: '150',
            purchase_count: '5',
            short_Description: 'Green Printed Crew Neck T-Shirt'
          },
          {
            size: 'medium',
            price: '150',
            purchase_count: '5',
            short_Description: 'Green Printed Crew Neck T-Shirt'
          },
          {
            size: 'large',
            price: '150',
            purchase_count: '5',
            short_Description: 'Green Printed Crew Neck T-Shirt'
          }
        ]
      },
      {
        name: 'Bare Denim1',
        description: 'Green Printed Crew Neck T-Shirt',
        price: '200',
        rating: '4.1',
        total_rating_person: '42',
        image: 'https://picsum.photos/id/100/2500/1656',
        sizes: [
          {
            size: 'small',
            price: '150',
            purchase_count: '5',
            short_Description: 'Green Printed Crew Neck T-Shirt'
          }
        ]
      },
      {
        name: 'Bare Denim2',
        description: 'Green Printed Crew Neck T-Shirt',
        price: '200',
        rating: '4.1',
        total_rating_person: '42',
        image: 'https://picsum.photos/id/10/2500/1667',
        sizes: [
          {
            size: 'small',
            price: '150',
            purchase_count: '5',
            short_Description: 'Green Printed Crew Neck T-Shirt'
          },
          {
            size: 'medium',
            price: '150',
            purchase_count: '5',
            short_Description: 'Green Printed Crew Neck T-Shirt'
          },
          {
            size: 'large',
            price: '150',
            purchase_count: '5',
            short_Description: 'Green Printed Crew Neck T-Shirt'
          }
        ]
      },
      {
        name: 'Bare Denim3',
        description: 'Green Printed Crew Neck T-Shirt',
        price: '200',
        rating: '4.1',
        total_rating_person: '42',
        image: 'https://picsum.photos/id/1004/5616/3744',
        sizes: [
          {
            size: 'small',
            price: '150',
            purchase_count: '5',
            short_Description: 'Green Printed Crew Neck T-Shirt'
          }
        ]
      },
      {
        name: 'Bare Denim4',
        description: 'Green Printed Crew Neck T-Shirt',
        price: '200',
        rating: '4.1',
        total_rating_person: '42',
        image: 'https://picsum.photos/id/1002/4312/2868',
        sizes: [
          {
            size: 'small',
            price: '150',
            purchase_count: '5',
            short_Description: 'Green Printed Crew Neck T-Shirt'
          },
          {
            size: 'medium',
            price: '150',
            purchase_count: '5',
            short_Description: 'Green Printed Crew Neck T-Shirt'
          },
          {
            size: 'large',
            price: '150',
            purchase_count: '5',
            short_Description: 'Green Printed Crew Neck T-Shirt'
          }
        ]
      }
    ]
  }

  state = {
    selectedIndex: 0
  }

  forwardCount = () => {
    if (this.arrayProductList.length > this.state.selectedIndex + 1) {
      this.state.selectedIndex += 1
      this.forceUpdate()
      this.flatListRef.scrollToIndex({ index: this.state.selectedIndex, animated: true });
    }
  }

  backwardCount = () => {
    if (this.state.selectedIndex > 0) {
      this.state.selectedIndex -= 1
      this.forceUpdate()
      this.flatListRef.scrollToIndex({ index: this.state.selectedIndex, animated: true });
    }
  }

  productDetailRender = ({ item, index }) => {
    return (
      <View style={{ flex: 1, width: Dimensions.get('window').width, backgroundColor: OKColors.white }}>
        <View style={{ alignItems: 'center' }}>
          <Image style={{ width: 150, height: 150, borderRadius: 150,marginVertical:20, overflow: 'hidden' }} source={{ uri: item.image }} />
          <Text style={{ textAlign: 'center', marginVertical: 10 }}>{item.rating + " (" + item.total_rating_person + ") Reviews"}</Text>
        </View>

        <Text style={{ padding: 10, marginHorizontal: 10, backgroundColor: OKColors.grey, borderRadius: 10, overflow: 'hidden', marginBottom: 5 }}>{item.name}</Text>
        <Text style={{ padding: 10, marginHorizontal: 10, backgroundColor: OKColors.offWhite, borderRadius: 10, overflow: 'hidden', marginBottom: 5 }}>{item.description}</Text>
        <Text style={{ padding: 10, marginHorizontal: 10, backgroundColor: OKColors.grey, borderRadius: 10, overflow: 'hidden', marginBottom: 5 }}>{item.price}</Text>
      </View>
    )
  }

  sizeDetailsRender = ({item, index}) => {
    return (
      <View 
      style={{ flex:1, flexDirection: 'row', 
      backgroundColor: OKColors.white, 
      marginVertical:10,
      paddingVertical: 10, marginHorizontal: 10, 
      borderRadius: 10, 
      shadowColor: OKColors.black, 
      shadowRadius:0.5, shadowOffset:{width:0, height:0}, shadowOpacity:0.5 }}>
        <View style={{ borderRightWidth: 1, borderColor: OKColors.green }}>
          <Text style={{ paddingHorizontal: 10, paddingVertical: 10, margin: 10 }}>{item.size}</Text>
        </View>
        <View style={{ flex:1, justifyContent: 'space-evenly', marginHorizontal: 10 }}>
          <Text >{item.short_Description}</Text>
          <View style={{ flexDirection: 'row', justifyContent:'space-between' }}>
            <Text >{item.purchase_count}</Text>
            <Text>{item.price}</Text>
          </View>
        </View>
      </View>
    )
  }

  render() {
    return (
      <>
        <View style={{ flex: 1, backgroundColor: OKColors.offWhite }}>
          <StatusBar barStyle="dark-content" backgroundColor={OKColors.green} />
          <SafeAreaView style={{backgroundColor:OKColors.green}}>
            <NavBar
              leftSource={Assets.back}
              title={"Products"}
            />

            <SubNavBar
              leftSource={Assets.backward}
              rightSource={Assets.forward}
              title={this.state.selectedIndex + 1 + " of " + this.arrayProductList.length}
              onLeft={this.backwardCount}
              onRight={this.forwardCount}
            />
            <FlatList
              ref={refrence => this.flatListRef = refrence}
              data={this.arrayProductList}
              horizontal={true}
              renderItem={this.productDetailRender}
            />
            <FlatList
            style={{backgroundColor: OKColors.offWhite}}
              data={this.arrayProductList[this.state.selectedIndex].sizes}
              renderItem={this.sizeDetailsRender}
            />
            
          </SafeAreaView>
        </View>
      </>
    );
  }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
