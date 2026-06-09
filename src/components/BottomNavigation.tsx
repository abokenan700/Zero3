import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { NavigationItem } from '@/types/home';
import { colors } from '@/theme/colors';
import { Icon } from './Icon';

export const BottomNavigation = ({ items }: { items: NavigationItem[] }) => (
  <View style={styles.outer}>
    <View style={styles.activeBar} />
    {items.map((item) => (
      <View key={item.id} style={styles.item}>
        <Icon name={item.icon} size={34} color={item.active ? colors.text : colors.navInactive} filled={item.active} />
        <Text style={[styles.label, item.active && styles.activeLabel]}>{item.label}</Text>
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  outer: {
    height: 86,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: '#ECEEF3',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 12,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 10,
  },
  activeBar: {
    position: 'absolute',
    top: 0,
    left: 28,
    width: 66,
    height: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    backgroundColor: colors.text,
  },
  item: {
    width: 82,
    alignItems: 'center',
  },
  label: {
    color: colors.navInactive,
    fontSize: 16,
    lineHeight: 20,
    marginTop: 3,
    fontWeight: '500',
    textAlign: 'center',
  },
  activeLabel: {
    color: colors.text,
    fontWeight: '900',
  },
});
