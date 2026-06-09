import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { Product } from '@/types/home';
import { colors } from '@/theme/colors';
import { ProductVisual } from './ProductVisual';

export const ProductCard = ({ product }: { product: Product }) => (
  <View style={styles.card}>
    <View style={styles.imageWrap}>
      <ProductVisual asset={product.asset} size="product" />
      <View style={styles.heart}><Text style={styles.heartText}>♡</Text></View>
    </View>
    <View style={styles.timerPill}><Text style={styles.timerText}>▣ {product.deliveryTime}</Text></View>
    <Text numberOfLines={2} style={styles.name}>{product.name}</Text>
    <Text style={styles.qty}>{product.quantity}</Text>
    <View style={styles.bottomRow}>
      <View>
        <Text style={styles.price}>{product.price}</Text>
        {product.originalPrice ? <Text style={styles.original}>{product.originalPrice}</Text> : null}
      </View>
      <View style={styles.add}><Text style={styles.addText}>ADD</Text></View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    width: 122,
    marginRight: 10,
  },
  imageWrap: {
    position: 'relative',
    backgroundColor: '#F7F8FB',
    borderRadius: 12,
  },
  heart: {
    position: 'absolute',
    right: 7,
    top: 6,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: 'rgba(255,255,255,0.86)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heartText: {
    color: '#AEB3BE',
    fontSize: 13,
    fontWeight: '900',
    lineHeight: 15,
  },
  timerPill: {
    alignSelf: 'flex-start',
    backgroundColor: '#F2F4F6',
    borderRadius: 5,
    paddingHorizontal: 4,
    paddingVertical: 2,
    marginTop: 6,
  },
  timerText: {
    fontSize: 8,
    fontWeight: '900',
    color: colors.text,
  },
  name: {
    minHeight: 34,
    marginTop: 4,
    fontSize: 11,
    lineHeight: 14,
    color: colors.text,
    fontWeight: '800',
  },
  qty: {
    fontSize: 10,
    color: colors.muted,
    marginTop: 3,
  },
  bottomRow: {
    marginTop: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 12,
    fontWeight: '900',
    color: colors.text,
  },
  original: {
    fontSize: 10,
    color: colors.muted,
    textDecorationLine: 'line-through',
  },
  add: {
    borderWidth: 1,
    borderColor: colors.green,
    borderRadius: 7,
    paddingHorizontal: 12,
    paddingVertical: 5,
    backgroundColor: colors.white,
  },
  addText: {
    color: colors.green,
    fontSize: 11,
    fontWeight: '900',
  },
});
