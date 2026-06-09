import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '@/theme/colors';
import { Icon } from './Icon';

interface HomeHeaderProps {
  headline: string;
  location: string;
  availability: string;
}

export const HomeHeader = ({ headline, location, availability }: HomeHeaderProps) => (
  <LinearGradient colors={['#9B7205', '#B98600', '#8A5A00', '#724202']} style={styles.header}>
    <View style={styles.lightBeamOne} />
    <View style={styles.lightBeamTwo} />
    <View style={styles.row}>
      <View style={styles.copyBlock}>
  <LinearGradient colors={[colors.heroGold, '#C69A09', colors.heroDeepGold]} style={styles.header}>
    <View style={styles.statusBar}>
      <Text style={styles.statusIcon}>▮ Ⅱ⌁  ◜◝</Text>
      <Text style={styles.statusIcon}>▧  ●  ١٢:٥٥</Text>
    </View>
    <View style={styles.row}>
      <View>
        <Text style={styles.blinkit}>Blinkit in</Text>
        <View style={styles.deliveryRow}>
          <Text style={styles.headline}>{headline}</Text>
          <View style={styles.badge}><Text style={styles.badgeText}>◴ {availability}</Text></View>
        </View>
        <Text style={styles.location}>{location}⌄</Text>
      </View>
      <View style={styles.actions}>
        <View style={styles.wallet}><Text style={styles.walletText}>₹</Text></View>
        <View style={styles.profile}>
          <View style={styles.profileHead} />
          <View style={styles.profileBody} />
        </View>
        <View style={styles.profile}><Text style={styles.profileText}>●</Text><Text style={styles.profileBase}>▰</Text></View>
      </View>
    </View>
  </LinearGradient>
);

const styles = StyleSheet.create({
  header: {
    paddingTop: 56,
    paddingHorizontal: 12,
    paddingBottom: 20,
    overflow: 'hidden',
  },
  lightBeamOne: {
    position: 'absolute',
    top: -50,
    right: 120,
    width: 52,
    height: 240,
    backgroundColor: 'rgba(255,255,255,0.14)',
    transform: [{ rotate: '-18deg' }],
    borderRadius: 28,
  },
  lightBeamTwo: {
    position: 'absolute',
    top: -10,
    right: 8,
    width: 120,
    height: 170,
    backgroundColor: 'rgba(255,199,38,0.24)',
    borderRadius: 70,
    paddingTop: 12,
    paddingHorizontal: 12,
    paddingBottom: 16,
  },
  statusBar: {
    height: 28,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    opacity: 0.9,
  },
  statusIcon: {
    color: colors.white,
    fontSize: 17,
    fontWeight: '800',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  copyBlock: {
    flexShrink: 1,
    marginTop: 18,
  },
  blinkit: {
    color: colors.white,
    fontSize: 17,
    fontWeight: '900',
  },
  deliveryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 6,
  },
  headline: {
    color: colors.white,
    fontSize: 34,
    lineHeight: 39,
    fontWeight: '900',
    letterSpacing: -0.3,
  },
  badge: {
    backgroundColor: 'rgba(255,255,255,0.25)',
    borderColor: 'rgba(255,255,255,0.25)',
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 8,
    paddingVertical: 3,
    fontSize: 33,
    lineHeight: 39,
    fontWeight: '900',
  },
  badge: {
    backgroundColor: 'rgba(255,255,255,0.28)',
    borderRadius: 16,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  badgeText: {
    color: colors.white,
    fontSize: 13,
    fontWeight: '900',
  },
  location: {
    color: colors.white,
    fontSize: 20,
    lineHeight: 26,
    marginTop: 4,
    fontWeight: '700',
  },
  actions: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    marginLeft: 8,
  },
  wallet: {
    height: 54,
    width: 54,
    borderRadius: 27,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.14,
    shadowRadius: 8,
    elevation: 4,
  },
  walletText: {
    color: '#F0C300',
    fontSize: 28,
    fontWeight: '900',
    transform: [{ rotate: '-13deg' }],
  },
  walletText: {
    color: '#F2C300',
    fontSize: 28,
    fontWeight: '900',
    transform: [{ rotate: '-12deg' }],
  },
  profile: {
    height: 54,
    width: 54,
    borderRadius: 27,
    backgroundColor: 'rgba(42,42,22,0.56)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileHead: {
    width: 13,
    height: 13,
    borderRadius: 7,
    backgroundColor: colors.white,
    marginBottom: 4,
  },
  profileBody: {
    width: 28,
    height: 16,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    backgroundColor: colors.white,
  },
    backgroundColor: 'rgba(42,42,22,0.45)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileText: { color: colors.white, fontSize: 18, lineHeight: 18 },
  profileBase: { color: colors.white, fontSize: 22, lineHeight: 18 },
});
