import React, { Component } from 'react';
import { Text, View, Platform, ScrollView, TouchableOpacity, } from 'react-native';
import Modal from 'react-native-modal';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Icon from 'react-native-vector-icons/FontAwesome';
import { AutoSigin, getUserPost, deleteUserPost } from '../../../../store/actions/User';

import styles from './styles';

class UserPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      idPostAction: null,
      deleteModal: false,
    }

    this.renderNavBar();
  }

  renderNavBar = () => {
    const { navigator } = this.props;
    Promise.all([
      Icon.getImageSource('chevron-left', 20, 'white'),
    ]).then((sources) => {
      navigator.setButtons({
        leftButtons: Platform.OS === 'ios'
          ? [
            {
              title: 'Go Back',
              icon: sources[0],
              disableIconTint: true,
              buttonColor: '#FFF',
              id: 'goBack',
            },
          ]
          : null,
      });
    });

    navigator.setTitle({
      title: 'My Posts',
    });

    navigator.setStyle({
      navBarTextFontSize: 20,
      navBarTextColor: '#FFF',
      navBarTextFontFamily: 'RobotoCondensed-Bold',
    });

    if (Platform.OS == 'ios') {
      navigator.setOnNavigatorEvent((event) => {
        if (event.id === 'goBack') {
          navigator.dismissAllModals({
            animationType: 'slide-down',
          });
        }
      });
    }
  }

  componentDidMount() {
    const uid = this.props.User.userData.uid;
    this.props.getUserPost(uid);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.User.userPosts) {
      this.setState({posts: nextProps.User.userPosts})
    }
  }

  deletePost = () => {
    const { idPostAction } = this.state;
    this.props.deleteUserPost(idPostAction, this.props.User.userData).then(() => {
      const uid = this.props.User.userData.uid;
      this.props.getUserPost(uid);

      this.setState({
        deleteModal: false,
        idPostAction: null,        
      })
    })
  }

  showDeleteModal = (id) => (
    this.setState({
      deleteModal : true,
      idPostAction: id,
    })
  )

  renderDeleteModal = () => (
    <View style={styles.modalContent}>
      <Text style={styles.modalTitle}>Are you sur to delete post ?</Text>
      <View style={styles.modalButtons}>
        <TouchableOpacity
          style={styles.modalButton}
          onPress={() => this.deletePost()}
        >
          <Text style={styles.confirmText}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.modalButton}
          onPress={() => 
            this.setState({ 
              deleteModal: false,
              idPostAction: null,
            })
          }
        >
          <Text style={styles.escapeText}>No</Text>
        </TouchableOpacity>
      </View>
    </View>
  )

  renderPosts = () => {
    const { posts } = this.state;
    return(
      posts 
      ? posts.map( item => (
        <View style={styles.itemWrapper} key={item.id}>
          <View style={styles.itemTitle}>
            <Text style={styles.itemTitleText}>{item.title}</Text>
          </View>
          <View style={styles.itemDescription}>
            <Text style={styles.itemDescriptionText}>{item.description}</Text>
            <View style={{ marginTop:10 }}>
              <Text style={styles.small}>PRICE: $ {item.price}</Text>
              <Text style={styles.small}>CATEGORY: {item.category}</Text>
            </View>
          </View>
          <View style={styles.itemButtons}>
            <TouchableOpacity
              onPress={() => 
                this.showDeleteModal(item.id)
              }
            >
              <Text style={styles.delete}>
                Delete Pots
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        
      ))
      : null
    )
  }

  render() {
    const {posts} = this.state;
    return (
      <ScrollView> 
      <View style={styles.container}>
        <View style={{ marginBottom: 30 }}> 
          <Text>
            You have {posts.length}  
            {
              posts.length > 1 
              ? ' posts'
              : ' post'
            }        
          </Text>
        </View>

        {this.renderPosts()}

        <Modal
          isVisible={this.state.deleteModal}
          animationIn={'zoomInDown'}
          animationOut={'zoomOutUp'}
          animationInTiming={1000}
          animationOutTiming={1000}
          backdropTransitionInTiming={1000}
          backdropTransitionOutTiming={1000}
          onBackdropPress={() => this.setState({ deleteModal: false })}
        >
          {this.renderDeleteModal()}
        </Modal>

      </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  User: state.User,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ AutoSigin, getUserPost, deleteUserPost }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(UserPost);
