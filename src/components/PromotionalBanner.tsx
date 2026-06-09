import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { VisualAsset } from '@/types/home';
import { colors } from '@/theme/colors';

export const PromotionalBanner = ({ banner }: { banner: VisualAsset }) => (
  <View style={[styles.card, { backgroundColor: banner.dominantColor }]}> 
    <View style={[styles.block, { backgroundColor: banner.accentColor }]} />
    <Text numberOfLines={2} style={styles.label}>{banner.label}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    width: 118,
    height: 82,
    borderRadius: 12,
    marginRight: 10,
    padding: 8,
    overflow: 'hidden',
  },
  block: {
    position: 'absolute',
    right: 6,
    bottom: 6,
    width: 42,
    height: 42,
    borderRadius: 8,
  },
  label: {
    color: colors.text,
    fontSize: 13,
    fontWeight: '900',
    width: 74,
  },
});
