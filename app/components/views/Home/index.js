import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';

import { navigatorDrawer, navigatorDeepLink } from '../../utils/misc';

import HorizontalScrollIcons from './horizontal_scroll_icons';
import styles from './styles';

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: ['All', 'Sports', 'Music', 'Clothing', 'Electronics'],
      categorySelected: 'All',
    };

    this.props.navigator.setOnNavigatorEvent((event) => {
      navigatorDeepLink(event, this);
      navigatorDrawer(event, this);
    });
  }

  changeCategory = (value) => {
    this.setState({categorySelected: value})
  }

  render() {
    const { categories, categorySelected } = this.state;
    return (
      <ScrollView>
        <View style={styles.container}>
          <HorizontalScrollIcons
            categories={categories}
            selected={categorySelected}
            updateCategoryHandler={this.changeCategory}
          />
        </View>
      </ScrollView>
    );
  }
}

export default Home;
