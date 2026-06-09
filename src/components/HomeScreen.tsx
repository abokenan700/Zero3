import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import type { HomeData, HomeSection } from '@/types/home';
import { BottomNavigation } from './BottomNavigation';
import { CategoryGrid, BestsellerGrid } from './ProductGrid';
import { DeliverySection } from './DeliverySection';
import { HeroBanner } from './HeroBanner';
import { HomeHeader } from './HomeHeader';
import { ProductCarousel } from './ProductCarousel';
import { PromotionalBanner } from './PromotionalBanner';
import { SectionHeader } from './SectionHeader';

const Section = ({ section }: { section: HomeSection }) => {
  if (section.type === 'bestsellers') {
    return <View style={styles.section}><SectionHeader title={section.title} /><BestsellerGrid groups={section.groups} /></View>;
  }
  if (section.type === 'category-grid') {
    return <View style={styles.section}><SectionHeader title={section.title} /><CategoryGrid categories={section.categories} columns={section.columns} /></View>;
  }
  if (section.type === 'product-carousel') {
    return <View style={styles.section}><SectionHeader title={section.title} /><ProductCarousel products={section.products} ctaLabel={section.ctaLabel} /></View>;
  }
  return (
    <View style={styles.section}>
      {section.title ? <SectionHeader title={section.title} /> : null}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.bannerStrip}>
        {section.banners.map((banner) => <PromotionalBanner key={banner.id} banner={banner} />)}
      </ScrollView>
    </View>
  );
};

export const HomeScreen = ({ data }: { data: HomeData }) => (
  <SafeAreaView style={styles.safe}>
    <View style={styles.screen}>
      <ScrollView stickyHeaderIndices={[1]} showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <HomeHeader headline={data.delivery.headline} location={data.delivery.location} availability={data.delivery.availability} />
        <DeliverySection sticky placeholder={data.search.stickyPlaceholder} tabs={data.tabs} />
        <HeroBanner banner={data.heroBanner} />
        {data.sections.map((section) => <Section key={section.id} section={section} />)}
      </ScrollView>
      <BottomNavigation items={data.bottomNavigation} />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#FFFCEF',
  },
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    paddingBottom: 100,
  },
  section: {
    marginTop: 24,
  },
  bannerStrip: {
    paddingHorizontal: 12,
  },
});
