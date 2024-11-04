import React from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import {styles} from './styles';
import {SearchInputComp} from '../../components';

export const HomeScreen = () => {
  const addVerticalSpace = (index: number) => {
    if (index % 2 !== 0) {
      return {marginLeft: 13};
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View>
          <View style={styles.flex}>
            <Text style={styles.header}>Discovery News</Text>
            <SearchInputComp value="" />
          </View>
          <View style={styles.tagWrap}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.tagContainer}>
                {[1, 2, 3, 4, 5].map((item, index) => (
                  <View key={index} style={[styles.tagButton, styles.inactive]}>
                    <Text style={styles.tagText}>News</Text>
                  </View>
                ))}
              </View>
            </ScrollView>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.grid}>
            <FlatList
              data={[1, 2, 3, 4, 5, 6, 7]}
              numColumns={2}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => (
                <View
                  style={[addVerticalSpace(index), styles.newsCard]}
                  key={index}>
                  <View style={styles.imageContainer}></View>
                  <View style={styles.col}>
                    <Text style={styles.paragraph}>Author</Text>
                    <Text style={styles.title}>Author</Text>
                    <Text style={styles.paragraph}>Author</Text>
                  </View>
                </View>
              )}
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={() => <View style={{height: 15}} />}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
