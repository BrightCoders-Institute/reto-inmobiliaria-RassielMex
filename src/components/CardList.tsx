import React from 'react';
import {ScrollView} from 'react-native';
import CardItem from './CardItem';

//type Props = {};

const CardList = () => {
  return (
    <ScrollView>
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
    </ScrollView>
  );
};

export default CardList;
