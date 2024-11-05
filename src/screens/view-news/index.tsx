import React from 'react';
import {Image, Pressable, ScrollView, Text, View} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {INavSetting} from '../../navigation/type';

export const ViewNewsScreen = () => {
  const navigation = useNavigation<INavSetting>();

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View>
          <View style={styles.flex}>
            <Pressable
              onPress={() => navigation.goBack()}
              style={styles.iconWrap}>
              <Image
                source={require('../../../assets/icons/back-arrow.png')}
                alt=""
                style={styles.imgae}
              />
            </Pressable>
            <Text style={styles.header}>Discovery News</Text>
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <View style={styles.col}>
              <View style={styles.flex}>
                <Text style={styles.label}>Nov 12, 2023</Text>
                <View style={styles.tagButton}>
                  <Text style={styles.tagText}>News</Text>
                </View>
              </View>
              <Text style={styles.title}>
                This is the heading of the new and it's interesting to read and
                understand because i do understand
              </Text>
              <View style={styles.flex}>
                <Text style={styles.label}>Author:</Text>
                <Text style={[styles.label, styles.boldLabel]}>
                  Festus Okeke
                </Text>
              </View>
            </View>
            <View style={styles.imageContainer}></View>
            <Text style={styles.paragraph}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi,
              repellendus accusamus perferendis eum fuga velit dolore maxime
              nulla necessitatibus autem tempore quis, aliquid facere libero
              voluptatibus alias? Optio, omnis veritatis? Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Sequi, repellendus accusamus
              perferendis eum fuga velit dolore maxime nulla necessitatibus
              autem tempore quis, aliquid facere libero voluptatibus alias?
              Optio, omnis veritatis? Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Sequi, repellendus accusamus perferendis eum
              fuga velit dolore maxime nulla necessitatibus autem tempore quis,
              aliquid facere libero voluptatibus alias? Optio, omnis veritatis?
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi,
              repellendus accusamus perferendis eum fuga velit dolore maxime
              nulla necessitatibus autem tempore quis, aliquid facere libero
              voluptatibus alias? Optio, omnis veritatis? Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Sequi, repellendus accusamus
              perferendis eum fuga velit dolore maxime nulla necessitatibus
              autem tempore quis, aliquid facere libero voluptatibus alias?
              Optio, omnis veritatis?
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
