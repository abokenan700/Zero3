import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { colors } from '@/theme/colors';

export const SectionHeader = ({ title }: { title: string }) => <Text style={styles.title}>{title}</Text>;

const styles = StyleSheet.create({
  title: {
    color: colors.text,
    fontSize: 22,
    lineHeight: 28,
    fontWeight: '900',
    marginHorizontal: 12,
    marginBottom: 14,
  },
});
