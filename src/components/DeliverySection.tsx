import React from 'react';
import { StyleSheet, View } from 'react-native';
import type { CategoryTab } from '@/types/home';
import { colors } from '@/theme/colors';
import { SearchBar } from './SearchBar';
import { CategoryTabs } from './CategoryTabs';

interface DeliverySectionProps {
  placeholder: string;
  tabs: CategoryTab[];
  stuck?: boolean;
}

export const DeliverySection = ({ placeholder, tabs, stuck = false }: DeliverySectionProps) => (
  <View style={[styles.wrap, stuck ? styles.stuck : styles.defaultState]}>
    <SearchBar placeholder={placeholder} />
    <CategoryTabs tabs={tabs} tone={stuck ? 'dark' : 'light'} />
  sticky?: boolean;
}

export const DeliverySection = ({ placeholder, tabs, sticky = false }: DeliverySectionProps) => (
  <View style={[styles.wrap, sticky && styles.sticky]}>
    <SearchBar placeholder={placeholder} />
    <CategoryTabs tabs={tabs} />
  </View>
);

const styles = StyleSheet.create({
  wrap: {
    paddingTop: 0,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0,0,0,0.15)',
    zIndex: 4,
  },
  defaultState: {
    backgroundColor: '#724202',
    paddingBottom: 0,
  },
  stuck: {
    backgroundColor: 'transparent',
    paddingTop: 0,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0,0,0,0.15)',
  },
  sticky: {
    backgroundColor: colors.sticky,
    paddingTop: 8,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 5,
    zIndex: 4,
  },
});
