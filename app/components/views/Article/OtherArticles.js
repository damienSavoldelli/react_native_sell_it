import React, { Component } from 'react';
import {
  Text, View, TouchableOpacity, Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';

import { getArticlesfiltered } from '../../utils/misc';

import styles from './styles';

class OtherArticles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      articles: [],
      category: '',
    };
  }

  componentDidMount() {
    const { article, Articles } = this.props;
    const list = Articles.list;

    this.setState({
      isLoading: false,
      articles: getArticlesfiltered(list, article.category, article.id, 3),
      category: article.category,
    });
  }

  renderOtherArtcles() {
    const { category } = this.state;
    return (
      <View>
        <Text style={styles.otherArtclesTitle}>Category {category} :</Text>
        {this.renderArticles()}
      </View>
    );
  }

  renderArticles() {
    return (
      this.state.articles.map((item, i) => (
        <TouchableOpacity
          onPress={() => this.props.goTo(item)}
          key={item.id}
        >
          <View style={styles.ortherArticleContent}>
            <View>
              <Image
                resizeMode="cover"
                style={styles.itemImage}
                source={{ uri: `https://loremflickr.com/300/300/?random=${i}` }}
              />
            </View>
            <Text style={styles.itemTitle}>
              {item.title}
            </Text>
          </View>

        </TouchableOpacity>
      ))
    );
  }

  render() {
    const { isLoading } = this.state;
    return (
      <View style={styles.containerOtherArticle}>
        {
          isLoading
            ? (
              <View style={styles.isLoadingContainer}>
                <Icon
                  name="gears"
                  size={30}
                  color="lightgrey"
                />
                <Text style={styles.isLoadingText}>Loading...</Text>
              </View>
            )
            : (
              this.renderOtherArtcles()
            )
        }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  Articles: state.Article,
});

export default connect(mapStateToProps, null)(OtherArticles);
