import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { VisualAsset } from '@/types/home';
import { colors } from '@/theme/colors';

interface ProductVisualProps {
  asset: VisualAsset;
  size?: 'small' | 'category' | 'product' | 'banner';
}

export const ProductVisual = ({ asset, size = 'category' }: ProductVisualProps) => {
  if (size === 'banner') {
    return (
      <View style={[styles.banner, { backgroundColor: asset.dominantColor }]}> 
        <View style={styles.bagLeft}><Text style={styles.bagEmoji}>🛍️</Text></View>
        <View style={styles.bannerCopy}>
          <Text style={styles.welcome}>{asset.label}</Text>
          <Text style={styles.bannerText}>Order now & enjoy FREE delivery</Text>
        </View>
        <View style={styles.bagRight}><Text style={styles.bagEmoji}>🛍️</Text></View>
      </View>
    );
  }

  const productMode = size === 'product';
  return (
    <View style={[styles.visual, productMode ? styles.productVisual : styles.categoryVisual, { backgroundColor: asset.dominantColor }]}> 
      <View style={[styles.shadowBlob, { backgroundColor: asset.accentColor }]} />
      <View style={styles.packRow}>
        <View style={[styles.pack, styles.packTall, { backgroundColor: asset.accentColor }]}><Text style={styles.packText}>{asset.label.split(' ')[0]}</Text></View>
        <View style={[styles.pack, styles.packShort]}><Text style={styles.packText}>{asset.label.split(' ').slice(1, 3).join(' ')}</Text></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  visual: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  categoryVisual: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 16,
  },
  productVisual: {
    height: 118,
    borderRadius: 12,
  },
  shadowBlob: {
    position: 'absolute',
    bottom: 18,
    width: '70%',
    height: 18,
    borderRadius: 20,
    opacity: 0.75,
  },
  packRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 5,
  },
  pack: {
    width: 42,
    borderRadius: 6,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.06)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 2,
  },
  packTall: {
    height: 58,
  },
  packShort: {
    height: 45,
  },
  packText: {
    fontSize: 7,
    fontWeight: '800',
    color: colors.text,
    textAlign: 'center',
  },
  banner: {
    height: 112,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
    paddingHorizontal: 8,
  },
  bannerCopy: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  welcome: {
    color: '#FFF3D6',
    fontSize: 36,
    fontWeight: '900',
    letterSpacing: 1,
  },
  bannerText: {
    color: colors.white,
    fontSize: 17,
    fontWeight: '700',
    marginTop: 8,
  },
  bagLeft: { transform: [{ rotate: '-8deg' }], marginLeft: -8 },
  bagRight: { transform: [{ rotate: '8deg' }], marginRight: -8 },
  bagEmoji: { fontSize: 52 },
});
