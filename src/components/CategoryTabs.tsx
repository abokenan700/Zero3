import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import type { CategoryTab } from '@/types/home';
import { colors } from '@/theme/colors';
import { Icon } from './Icon';

export const CategoryTabs = ({ tabs }: { tabs: CategoryTab[] }) => (
  <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.content}>
    {tabs.map((tab) => (
      <View key={tab.id} style={styles.tab}>
        <Icon name={tab.icon} size={34} color={tab.active ? colors.text : colors.text} filled={tab.active} />
        <Text style={[styles.label, tab.active && styles.activeLabel]}>{tab.label}</Text>
        {tab.active ? <View style={styles.indicator} /> : null}
      </View>
    ))}
  </ScrollView>
);

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
    color: colors.text,
    textAlign: 'center',
  },
  activeLabel: { fontWeight: '900' },
  indicator: {
    position: 'absolute',
    bottom: 0,
    width: 58,
    height: 5,
    borderRadius: 5,
    backgroundColor: colors.text,
  },
});
