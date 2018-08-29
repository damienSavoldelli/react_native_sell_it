import React from 'react';
import {
  Text, View, Image, Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';


const ItemArticle = ({ article }) => {
  const openEmail = () => {
    Linking.openEmail(`mailto://${article.email}&subject=Regarding ${article.title}`);
  };
  const renderArticleImage = () => (
    <View style={styles.containerImage}>
      <Image
        resizeMode="cover"
        style={styles.articleImage}
        source={{ uri: `https://loremflickr.com/400/400/?random=${article.category}` }}
      />
      <Text style={styles.priceTag}>$ {article.price}</Text>
    </View>
  );
  const renderArticleText = () => (
    <View style={styles.containerText}>
      <Text style={styles.articleTitle}>{article.title}</Text>
      <Text style={styles.articleDecription}>{article.description}</Text>
    </View>
  );
  const ownerInfo = () => (
    // TODO: create a form & send to the owner account interface
    <View style={styles.containerOwner}>
      <Text style={styles.ownerTitle}>Contact the owner</Text>
      <Icon.Button
        name="envelope"
        color="#00ADA9"
        backgroundColor="#FFF"
        onPress={() => openEmail()}
      >
        <Text style={styles.ownerEmail}>{article.email}</Text>
      </Icon.Button>
    </View>
  );

  return (
    <View>
      {renderArticleImage()}
      {renderArticleText()}
      {ownerInfo()}
    </View>
  );
};

export default ItemArticle;
