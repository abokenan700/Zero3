import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '@/theme/colors';
import { Icon } from './Icon';

export const SearchBar = ({ placeholder }: { placeholder: string }) => (
  <View style={styles.search}>
    <Icon name="search" size={30} />
    <Text numberOfLines={1} style={styles.placeholder}>{placeholder}</Text>
    <View style={styles.divider} />
    <Icon name="mic" size={28} />
  </View>
);

const styles = StyleSheet.create({
  search: {
    height: 58,
    borderRadius: 18,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    marginHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  placeholder: {
    flex: 1,
    color: colors.muted,
    fontSize: 19,
    fontWeight: '800',
    marginLeft: 12,
  },
  divider: {
    height: 40,
    width: 1,
    backgroundColor: colors.border,
    marginHorizontal: 10,
  },
});
