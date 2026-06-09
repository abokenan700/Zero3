import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import type { Product } from '@/types/home';
import { colors } from '@/theme/colors';
import { ProductCard } from './ProductCard';

interface ProductCarouselProps {
  products: Product[];
  ctaLabel?: string;
}

export const ProductCarousel = ({ products, ctaLabel }: ProductCarouselProps) => (
  <View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.content}>
      {products.length > 0 ? products.map((product) => <ProductCard key={product.id} product={product} />) : [0, 1, 2].map((item) => <View key={item} style={styles.emptyCard} />)}
    </ScrollView>
    {ctaLabel ? <View style={styles.cta}><Text style={styles.ctaText}>› {ctaLabel} ›</Text></View> : null}
  </View>
);

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 12,
  },
  emptyCard: {
    width: 116,
    height: 180,
    borderRadius: 12,
    backgroundColor: '#F6F8FB',
    marginRight: 10,
  },
  cta: {
    alignSelf: 'center',
    backgroundColor: colors.white,
    borderRadius: 18,
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginTop: 12,
    shadowColor: '#000',
    shadowOpacity: 0.07,
    shadowRadius: 8,
    elevation: 2,
  },
  ctaText: {
    color: colors.text,
    fontSize: 12,
    fontWeight: '800',
  },
});
