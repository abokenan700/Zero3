import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { VisualAsset } from '@/types/home';
import { colors } from '@/theme/colors';

interface ProductVisualProps {
  asset: VisualAsset;
  size?: 'small' | 'category' | 'product' | 'banner';
}

const artMap: Record<string, { bg: string; chips: string[]; labels: string[]; shape?: 'bags' | 'bottles' | 'produce' | 'bars' | 'boxes' }> = {
  vegetables: { bg: '#EAF8F7', chips: ['#299D4A', '#F8C63A', '#0D8E4A', '#83B82F'], labels: ['🍉', '🍌', '🥒'], shape: 'produce' },
  atta: { bg: '#EAF8F7', chips: ['#11763B', '#C0182D', '#E6BE82'], labels: ['TATA', 'AASHIRVAAD'], shape: 'bags' },
  oil: { bg: '#EAF8F7', chips: ['#FFD22E', '#111111', '#D71920'], labels: ['Fortune', 'Everest'], shape: 'bottles' },
  dairy: { bg: '#EAF8F7', chips: ['#FDFDFD', '#2478C8', '#D8272F'], labels: ['Amul', 'Bread'], shape: 'bags' },
  bakery: { bg: '#EAF8F7', chips: ['#F5E095', '#151515', '#7A4C22'], labels: ['nutri', 'Dark'], shape: 'boxes' },
  dryfruits: { bg: '#EAF8F7', chips: ['#E82E2B', '#F0C332', '#734018'], labels: ['Kellogg’s', 'Farmley'], shape: 'boxes' },
  meat: { bg: '#EAF8F7', chips: ['#F0A0A2', '#232323', '#E1D5B0'], labels: ['Licious', 'ITC'], shape: 'boxes' },
  kitchenware: { bg: '#EAF8F7', chips: ['#C46B42', '#1E1E1E', '#D4D4D4'], labels: ['Bottle', 'Mixer'], shape: 'bottles' },
  chips: { bg: '#F5F6FB', chips: ['#09933F', '#0959AA', '#F47C20', '#F5C22C'], labels: ['Uncle', 'Lay’s', 'Kurkure'], shape: 'bags' },
  drinks: { bg: '#F5F6FB', chips: ['#F6F6F6', '#C4001A', '#16A34A', '#E6F5FF'], labels: ['Coke', 'Coca‑Cola', 'Sprite'], shape: 'bottles' },
  icecream: { bg: '#F5F6FB', chips: ['#5B2D1F', '#D7B887', '#F6C12F', '#482A1E'], labels: ['Amul', 'Mango'], shape: 'boxes' },
  sweets: { bg: '#F5F6FB', chips: ['#E0282E', '#6E2384', '#1D1512', '#5F331F'], labels: ['KitKat', 'munch', 'Amul'], shape: 'bars' },
  tea: { bg: '#EAF8F7', chips: ['#B9261F', '#008E3C', '#F5D04E'], labels: ['Nescafé', 'TATA TEA'], shape: 'boxes' },
  instant: { bg: '#EAF8F7', chips: ['#D8232A', '#F4CF2E', '#F6F0C8'], labels: ['McCain', 'Maggi'], shape: 'bags' },
  sauces: { bg: '#EAF8F7', chips: ['#482616', '#D71920', '#E6E0CB'], labels: ['nutella', 'Kissan'], shape: 'bottles' },
  paan: { bg: '#EAF8F7', chips: ['#8D2E78', '#8FE5E8', '#FFFFFF'], labels: ['Pass', 'Happydent'], shape: 'bars' },
  beauty: { bg: '#EEF9FF', chips: ['#F0A8B9', '#111111', '#EFEFEF'], labels: ['Beauty', 'Cosmetics'], shape: 'bottles' },
  face: { bg: '#EEF9FF', chips: ['#7CC9D6', '#FFFFFF', '#F6AFBC'], labels: ['Skin', 'Face'], shape: 'bottles' },
  personal: { bg: '#EEF9FF', chips: ['#E94A42', '#222222', '#EFC0A3'], labels: ['Care', 'Wash'], shape: 'bottles' },
  baby: { bg: '#EEF9FF', chips: ['#F6E6A4', '#9FD7F3', '#FFFFFF'], labels: ['Baby', 'Care'], shape: 'boxes' },
  household: { bg: '#EEF9FF', chips: ['#C9B28D', '#5A8D78', '#FFFFFF'], labels: ['Home', 'Lifestyle'], shape: 'boxes' },
  clean: { bg: '#EEF9FF', chips: ['#1D45A8', '#B23260', '#FFFFFF'], labels: ['Clean', 'Repel'], shape: 'bottles' },
  print: { bg: '#F9F4FF', chips: ['#575757', '#EEEEEE', '#111111'], labels: ['Print', 'Store'], shape: 'boxes' },
  toys: { bg: '#FFF0F5', chips: ['#8D55DD', '#F69F39', '#60A5FA'], labels: ['Toy', 'Store'], shape: 'boxes' },
  travel: { bg: '#F4F0FF', chips: ['#68C7E5', '#F7BD67', '#6247AA'], labels: ['Travel', 'Store'], shape: 'boxes' },
  sports: { bg: '#FFF2E6', chips: ['#E55D24', '#E7D1B0', '#2B2B2B'], labels: ['Sports', 'Store'], shape: 'bags' },
  pharmacy: { bg: '#EAF6FF', chips: ['#0A87C8', '#E03838', '#FFFFFF'], labels: ['Pharma', 'Store'], shape: 'boxes' },
  electronics: { bg: '#FFF1EB', chips: ['#B86E4D', '#F3B27D', '#2A2A2A'], labels: ['E‑Gifts', 'Store'], shape: 'boxes' },
  jewellery: { bg: '#FFF0F5', chips: ['#C69C44', '#E8B5C9', '#FFF4C4'], labels: ['Jewellery', 'Store'], shape: 'bars' },
};

export const ProductVisual = ({ asset, size = 'category' }: ProductVisualProps) => {
  if (size === 'banner') {
    return (
      <View style={styles.banner}>
        <View style={styles.bannerGlow} />
        <Text style={[styles.shoppingBag, styles.leftBag]}>🛍️</Text>
        <View style={styles.bannerCopy}>
          <Text style={styles.sparkle}>✦</Text>
          <Text style={styles.welcome}>{asset.label}</Text>
          <Text style={styles.bannerText}>Order now & enjoy FREE delivery</Text>
        </View>
        <Text style={[styles.shoppingBag, styles.rightBag]}>🛍️</Text>
      </View>
    );
  }

  const spec = artMap[asset.id] ?? { bg: asset.dominantColor ?? '#F3F8F8', chips: ['#FFFFFF', asset.accentColor ?? '#D9EDEC', '#222'], labels: [asset.label], shape: 'boxes' as const };
  const compact = size === 'small';
  const productMode = size === 'product';
  const labelCount = compact ? 0 : 1;

  return (
    <View style={[styles.visual, productMode ? styles.productVisual : styles.categoryVisual, { backgroundColor: spec.bg }]}> 
      <View style={styles.ground} />
      {spec.shape === 'produce' ? (
        <View style={styles.produceRow}>
          {spec.labels.map((label, index) => <Text key={`${asset.id}-${label}`} style={[styles.produce, { marginTop: index % 2 ? 12 : 0 }]}>{label}</Text>)}
        </View>
      ) : (
        <View style={[styles.packRow, compact && styles.compactRow]}>
          {spec.chips.slice(0, compact ? 2 : 3).map((chip, index) => (
            <View
              key={`${asset.id}-${chip}-${index}`}
              style={[
                spec.shape === 'bottles' ? styles.bottle : spec.shape === 'bars' ? styles.bar : styles.pack,
                index === 0 && styles.primaryPack,
                compact && styles.compactPack,
                { backgroundColor: chip, transform: [{ rotate: `${index === 0 ? -4 : index === 2 ? 5 : 0}deg` }] },
              ]}
            >
              {index < labelCount + 1 ? <Text numberOfLines={2} style={[styles.packText, chip === '#111111' || chip === '#1D1512' || chip === '#482616' ? styles.lightPackText : null]}>{spec.labels[index] ?? asset.label}</Text> : null}
            </View>
          ))}
        </View>
      )}
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
  ground: {
    position: 'absolute',
    bottom: 16,
    width: '64%',
    height: 12,
    borderRadius: 12,
    backgroundColor: 'rgba(0,0,0,0.08)',
  },
  packRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    gap: 5,
  },
  compactRow: {
    gap: 3,
  },
  pack: {
    width: 39,
    height: 58,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.08)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 2,
  },
  primaryPack: {
    height: 66,
    width: 44,
  },
  bottle: {
    width: 30,
    height: 68,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.07)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bar: {
    width: 58,
    height: 24,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.08)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  compactPack: {
    width: 30,
    height: 42,
    borderRadius: 5,
  },
  packText: {
    fontSize: 7,
    lineHeight: 8,
    fontWeight: '900',
    color: colors.text,
    textAlign: 'center',
  },
  lightPackText: {
    color: colors.white,
  },
  produceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  produce: {
    fontSize: 30,
    marginHorizontal: -1,
  },
  banner: {
    height: 112,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
    paddingHorizontal: 4,
    backgroundColor: '#744606',
  },
  bannerGlow: {
    position: 'absolute',
    top: -80,
    alignSelf: 'center',
    width: 280,
    height: 210,
    borderRadius: 160,
    backgroundColor: 'rgba(255,208,87,0.20)',
  },
  bannerCopy: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  sparkle: {
    position: 'absolute',
    left: 20,
    top: 20,
    color: '#FFF1C7',
    fontSize: 18,
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
  shoppingBag: {
    fontSize: 50,
  },
  leftBag: { transform: [{ rotate: '-10deg' }], marginLeft: -8 },
  rightBag: { transform: [{ rotate: '10deg' }], marginRight: -8 },
});
