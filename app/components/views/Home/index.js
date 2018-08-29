import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import { navigatorDrawer, navigatorDeepLink, gridTwoColumns } from '../../utils/misc';

import { getArticle } from '../../../store/actions/Article'

import HorizontalScrollIcons from './HorizontalScrollIcons';
import BlockItem from './BlockItem';

import styles from './styles';

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      articles: [],
      categories: ['All', 'Sports', 'Music', 'Clothing', 'Electronics'],
      categorySelected: 'All',
    };

    this.props.navigator.setOnNavigatorEvent((event) => {
      navigatorDeepLink(event, this);
      navigatorDrawer(event, this);
    });
  }

  changeCategory = (value) => {
    this.setState({
      categorySelected: value,
      isLoading: true,
      articles:[],
    });

    this.props.getArticle(value).then(() => {
      const newArticles = gridTwoColumns(this.props.Articles.list);

      this.setState({
        isLoading: false,
        articles: newArticles
      });
    });

  }


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

  renderArticles() {
    return (
      this.state.articles.map((item, i) => (
        <BlockItem 
          key={`columnHome${i}`}
          item={item}
          iteration={i}
          goTo={this.goToArticle}
          />
      ))
    )
  }


  componentDidMount() {
    this.props.getArticle('All').then(() => {
      const newArticles = gridTwoColumns(this.props.Articles.list);

      this.setState({
        isLoading: false,
        articles: newArticles
      });
    });
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
          {
            this.state.isLoading
            ? 
              <View style={styles.isLoadingContainer}>
                <Icon 
                  name="gears" size={30} color="lightgrey"
                />
                <Text style={styles.isLoadingText}>Loading...</Text>
              </View>
            : null
          }
        </View>
        <View style={styles.articleContainer}>
          <View style={styles.articleContent}>
            {this.renderArticles()}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    Articles: state.Article,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getArticle}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
