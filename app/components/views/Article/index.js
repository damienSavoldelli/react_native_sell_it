import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import styles from './styles';

import ItemArticle from './ItemArticle';
import OtherArticles from './OtherArticles';

export class Article extends Component {
  goToArticle = (props) => {
    this.props.navigator.push({
      screen: 'sell_it_app.Article',
      animationType: 'slide-horizontal',
      passProps: {
        articleData : props
      },
      backButtonTitle: '',
      label: `${props.title}`,
      title: `${props.title}`,
      navigatorStyle: {
        navBarTextFontSize: 20,
        navBarTextColor:'#FFF',
        navBarTextFontFamily: 'RobotoCondensed-Bold',
        navBarBackgroundColor: '#00ADA9',
        navBarTitleTextCentered: true, // android only
        navBarSubTitleTextCentered: true,
        screenBackgroundColor: '#FFF'
      }
    })
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <ItemArticle
          article={this.props.articleData}
        />
        <OtherArticles
          article={this.props.articleData}
          goTo={this.goToArticle}
        />
      </ScrollView>
    );
  }
}

export default Article;
