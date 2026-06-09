export type TabId = 'all' | 'vacations' | 'electronics' | 'beauty' | 'pharmacy' | 'more';

export type AssetKind = 'product' | 'banner' | 'icon' | 'illustration';

export interface VisualAsset {
  id: string;
  kind: AssetKind;
  label: string;
  description: string;
  dominantColor?: string;
  accentColor?: string;
}

export interface CategoryTab {
  id: TabId;
  label: string;
  icon: string;
  active?: boolean;
}

export interface CategoryItem {
  id: string;
  title: string;
  asset: VisualAsset;
}

export interface BestsellerGroup {
  id: string;
  title: string;
  moreCount: string;
  assetIds: string[];
}

export interface Product {
  id: string;
  name: string;
  quantity: string;
  price: string;
  originalPrice?: string;
  discountLabel?: string;
  rating?: string;
  deliveryTime?: string;
  asset: VisualAsset;
}

export type HomeSection =
  | {
      id: string;
      type: 'bestsellers';
      title: string;
      groups: BestsellerGroup[];
    }
  | {
      id: string;
      type: 'category-grid';
      title: string;
      categories: CategoryItem[];
      columns: number;
    }
  | {
      id: string;
      type: 'product-carousel';
      title: string;
      products: Product[];
      ctaLabel?: string;
    }
  | {
      id: string;
      type: 'banner-strip';
      title?: string;
      banners: VisualAsset[];
    };

export interface NavigationItem {
  id: string;
  label: string;
  icon: string;
  active?: boolean;
}

export interface HomeData {
  delivery: {
    headline: string;
    location: string;
    availability: string;
  };
  search: {
    defaultPlaceholder: string;
    stickyPlaceholder: string;
  };
  tabs: CategoryTab[];
  heroBanner: VisualAsset;
  sections: HomeSection[];
  bottomNavigation: NavigationItem[];
}
