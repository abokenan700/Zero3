import React from 'react';
import { View } from 'react-native';
import type { VisualAsset } from '@/types/home';
import { ProductVisual } from './ProductVisual';

export const HeroBanner = ({ banner }: { banner: VisualAsset }) => (
  <View>
    <ProductVisual asset={banner} size="banner" />
  </View>
);
