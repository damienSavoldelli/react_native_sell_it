import React from 'react';
import {
  Text, View, TouchableOpacity, Image,
} from 'react-native';
import styles from './styles';


const BlockItem = (props) => {
  const itemText = item => (
    <View style={styles.itemTextContainer}>
      <Text style={styles.itemTextTitle}>
        {item.title}
      </Text>

      <Text style={styles.itemTextPrice}>
        $ {item.price}
      </Text>
    </View>
  );

  const itemImage = iteration => (
    <View>
      <Image
        resizeMode="cover"
        style={styles.itemImage}
        source={{ uri: `https://loremflickr.com/400/400/?random=${iteration}` }}
      />
    </View>
  );

  const block = ({ item, iteration }) => (
    <View style={styles.blockRow}>
      <TouchableOpacity
        style={styles.card}
        onPress={() => props.goTo(item.blockOne)}
      >
        <View
          tyle={[styles.blockGridStyle, styles.blockGridStyleLeft]}
        >
          {itemImage(iteration)}
          {itemText(item.blockOne)}
        </View>

      </TouchableOpacity>
      <TouchableOpacity
        style={styles.card}
        onPress={() => props.goTo(item.blockTwo)}
      >
        <View
          style={[styles.blockGridStyle, styles.blockGridStyleRight]}
        >
          {itemImage(iteration)}
          {itemText(item.blockTwo)}
        </View>

      </TouchableOpacity>
    </View>
  );
  return (
    <View>
      {block(props)}
    </View>
  );
};

export default BlockItem;
