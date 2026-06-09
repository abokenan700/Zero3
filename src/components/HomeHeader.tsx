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
        <View style={styles.profile}><Text style={styles.profileText}>●</Text><Text style={styles.profileBase}>▰</Text></View>
      </View>
    </View>
  </LinearGradient>
);

const styles = StyleSheet.create({
  header: {
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
  },
  wallet: {
    height: 54,
    width: 54,
    borderRadius: 27,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
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
    backgroundColor: 'rgba(42,42,22,0.45)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileText: { color: colors.white, fontSize: 18, lineHeight: 18 },
  profileBase: { color: colors.white, fontSize: 22, lineHeight: 18 },
});
