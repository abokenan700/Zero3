import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import type { CategoryTab } from '@/types/home';
import { colors } from '@/theme/colors';
import { Icon } from './Icon';

interface CategoryTabsProps {
  tabs: CategoryTab[];
  tone?: 'light' | 'dark';
}

export const CategoryTabs = ({ tabs, tone = 'dark' }: CategoryTabsProps) => {
  const color = tone === 'light' ? colors.white : colors.text;
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.content}>
      {tabs.map((tab) => (
        <View key={tab.id} style={styles.tab}>
          <Icon name={tab.icon} size={34} color={color} filled={tab.active} />
          <Text style={[styles.label, { color }, tab.active && styles.activeLabel]}>{tab.label}</Text>
          {tab.active ? <View style={[styles.indicator, { backgroundColor: color }]} /> : null}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 10,
    paddingTop: 22,
    minWidth: '100%',
  },
  tab: {
    width: 86,
    alignItems: 'center',
    paddingBottom: 12,
  },
  label: {
    marginTop: 5,
    fontSize: 15,
    lineHeight: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
  activeLabel: { fontWeight: '900' },
  indicator: {
    position: 'absolute',
    bottom: 0,
    width: 58,
    height: 5,
    borderRadius: 5,
  },
});
