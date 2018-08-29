import React, { Component } from 'react';
import {
  Text, View, ScrollView,
} from 'react-native';

import ItemArticle from './ItemArticle';

import styles from './styles';


const Article = props => (
  <ScrollView style={styles.container}>
    <ItemArticle
      article={props.articleData}
    />
    {/* TODO see 3 artilces from same category */}
  </ScrollView>
);

export default Article;
