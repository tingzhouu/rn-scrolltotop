import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

class ScrollToTop extends Component {
  onPressBottom = () => {
    this.scrollView.scrollToEnd({ animated: true });
  };

  onPressTop = () => {
    this.scrollView.scrollTo({ x: 0, y: 0, animated: true });
  };

  onPressFlash = () => {
    this.scrollView.flashScrollIndicators();
  };

  render() {
    const arr = [];
    for (let i = 0; i < 100; i++) {
      arr.push(i + 1);
    }
    return (
      <View style={{ paddingTop: 20, flex: 1 }}>
        <ScrollView
          ref={ref => this.scrollView = ref}
        >
          <FlatList
            data={arr}
            renderItem={({item}) => {
              return (
              <View
                style={styles.box}
                key={item}
              >
                <Text style={{ fontSize: 20, fontWeight: '800' }}>{`Box - ${item}`}</Text>
              </View>
            )}}
            keyExtractor={item => `${item}`}
          />
        </ScrollView>
        <TouchableOpacity
          onPress={this.onPressBottom}
          style={[styles.button, { backgroundColor: 'purple', top: 50, right: 50 }]}
        >
          <Text style={{ color: 'white', fontWeight: '800' }}>GO BOTTOM</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.onPressTop}
          style={[styles.button, { backgroundColor: 'orange', top: 50, left: 50 }]}
        >
          <Text style={{ color: 'white', fontWeight: '800' }}>GO TOP</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.onPressFlash}
          style={[styles.button, { backgroundColor: 'green', bottom: 50, left: 50 }]}
        >
          <Text style={{ color: 'white', fontWeight: '800' }}>FLASH</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  box: {
    height: 100,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // borderColor: 'red',
    // borderWidth: 2,
  },
  boxText: {
    fontSize: 20,
    fontWeight: '800',
  }
})
export default ScrollToTop;
