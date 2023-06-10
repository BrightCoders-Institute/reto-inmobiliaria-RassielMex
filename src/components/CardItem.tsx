import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import location from '../../img/icons/location.png';
import area from '../../img/icons/area.png';
import bath from '../../img/icons/bath.png';
import bed from '../../img/icons/bed.png';
import star from '../../img/icons/star.png';
import heart from '../../img/icons/heart.png';
//type Props = {};

const CardItem = () => {
  return (
    <View style={styles.cardContainer}>
      <ImageBackground
        source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        style={styles.img}>
        <View style={styles.ratingWrapper}>
          <Image style={styles.icon} source={star} />
          <Text> 4.7</Text>
        </View>
      </ImageBackground>
      <View style={styles.content}>
        <Text style={styles.title}>The Willows</Text>
        <View style={styles.horizontalWrapper}>
          <Image style={styles.icon} source={location} />
          <Text style={styles.direction}>3215 St. Ulica</Text>
        </View>
        <View style={styles.textContainer}>
          <View style={styles.horizontalWrapper}>
            <Image style={styles.icon} source={bed} />
            <Text style={styles.description}>3</Text>
          </View>
          <View style={styles.horizontalWrapper}>
            <Image style={styles.icon} source={bath} />
            <Text style={styles.description}>2</Text>
          </View>
          <View style={styles.horizontalWrapper}>
            <Image style={styles.icon} source={area} />
            <Text style={styles.description}>52 ft</Text>
          </View>
        </View>
        <Text style={styles.price}>$440/m</Text>
      </View>
      <View style={styles.likeIconWrapper}>
        <Image style={styles.likeIcon} source={heart} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    margin: 5,
    backgroundColor: 'aliceblue',
    padding: 20,
  },
  img: {
    width: 100,
    height: 100,
    marginRight: 15,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  content: {
    flexGrow: 1,
    marginHorizontal: 5,
    height: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: 'black',
  },
  direction: {
    fontSize: 18,
  },
  description: {
    fontWeight: '700',
    color: 'black',
    marginRight: 10,
  },
  price: {fontSize: 24, fontWeight: '700', color: 'black'},
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    width: 15,
    height: 15,
    marginRight: 5,
  },
  likeIcon: {
    width: 15,
    height: 15,
  },
  horizontalWrapper: {flexDirection: 'row', alignItems: 'center'},
  likeIconWrapper: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'mediumturquoise',
    alignContent: 'center',
    width: 25,
    height: 25,
    borderRadius: 25,
  },
  ratingWrapper: {
    width: 60,
    flexDirection: 'row',
    bottom: 0,
    padding: 5,
    backgroundColor: 'lemonchiffon',
    borderRadius: 15,
    marginBottom: 5,
  },
});

export default CardItem;
