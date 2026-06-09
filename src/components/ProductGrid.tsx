import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { BestsellerGroup, CategoryItem } from '@/types/home';
import { visualAssets } from '@/data/homeData';
import { ProductVisual } from './ProductVisual';

export const CategoryGrid = ({ categories, columns }: { categories: CategoryItem[]; columns: number }) => (
  <View style={styles.grid}>
    {categories.map((category) => (
      <View key={category.id} style={[styles.categoryItem, { width: `${100 / columns}%` }]}> 
        <ProductVisual asset={category.asset} />
        <Text style={styles.categoryTitle}>{category.title}</Text>
      </View>
    ))}
  </View>
);

export const BestsellerGrid = ({ groups }: { groups: BestsellerGroup[] }) => (
  <View style={styles.bestGrid}>
    {groups.map((group) => (
      <View key={group.id} style={styles.bestCard}>
        <View style={styles.mosaic}>
          {group.assetIds.map((assetId, index) => (
            <View key={`${group.id}-${assetId}-${index}`} style={styles.mosaicCell}>
              <ProductVisual asset={visualAssets[assetId]} size="small" />
            </View>
          ))}
          <View style={styles.morePill}><Text style={styles.moreText}>{group.moreCount}</Text></View>
        </View>
        <Text style={styles.bestTitle}>{group.title}</Text>
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 8,
    rowGap: 16,
    rowGap: 18,
  },
  categoryItem: {
    paddingHorizontal: 4,
  },
  categoryTitle: {
    marginTop: 8,
    fontSize: 15,
    lineHeight: 20,
    minHeight: 40,
    fontSize: 16,
    lineHeight: 21,
    minHeight: 42,
    textAlign: 'center',
    fontWeight: '800',
    color: '#292A2E',
  },
  bestGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 12,
    columnGap: 10,
    rowGap: 12,
  },
  bestCard: {
    width: '31.6%',
    gap: 12,
  },
  bestCard: {
    width: '30.9%',
    backgroundColor: '#F2F3F8',
    borderRadius: 16,
    overflow: 'hidden',
  },
  mosaic: {
    height: 142,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 4,
  },
  mosaicCell: {
    width: '50%',
    height: '50%',
    padding: 3,
  },
  morePill: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 0,
    backgroundColor: '#EEF0F5',
    borderWidth: 1,
    borderColor: '#DCE0EA',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 2,
  },
  moreText: {
    color: '#626877',
    fontSize: 12,
    fontWeight: '800',
  },
  bestTitle: {
    paddingHorizontal: 6,
    paddingTop: 8,
    paddingBottom: 12,
    minHeight: 56,
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '900',
    color: '#2C2D32',
  },
});
