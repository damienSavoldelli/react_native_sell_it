import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const categoriesIcon = (value) => {
  let name = 'home';

  switch (value.toLowerCase()) {
    case 'all':
      name = 'circle-o-notch';
      break;
    case 'sports':
      name = 'soccer-ball-o';
      break;
    case 'music':
      name = 'music';
      break;
    case 'clothing':
      name = 'shopping-bag';
      break;
    case 'electronics':
      name = 'tv';
      break;
    default:
      name = 'home';
  }

  return name;
};

class HorizontalScrollIcons extends Component {
  generateIcon() {
    const { categories, selected, updateCategoryHandler } = this.props;
    return (
      categories
        ? categories.map(item => (
          <View style={{ marginRight: 15 }} key={item}>
            <Icon.Button
              name={categoriesIcon(item)}
              iconStyle={{ marginRight: 10, marginLeft: 3 }}
              backgroundColor={
                selected !== item ? '#C1C1C1' : '#FF6444'
              }
              size={20}
              borderRadius={10}
              onPress={() => updateCategoryHandler(item)}
            >
              <Text style={styles.categoryText}>{item}</Text>
            </Icon.Button>
          </View>
        ))
        : null
    );
  }

  render() {
    return (
      <ScrollView
        horizontal
        decelerationRate={0}
        snapToInterval={200}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.scrollContainer}>
          {this.generateIcon()}
        </View>
      </ScrollView>
    );
  }
}

export default HorizontalScrollIcons;
