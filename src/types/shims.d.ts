declare module 'react' {
  export type ReactNode = unknown;
  export function createElement(type: unknown, props?: unknown, ...children: unknown[]): unknown;
  const React: { createElement: typeof createElement };
  export default React;
}

declare module 'react/jsx-runtime' {
  export const jsx: unknown;
  export const jsxs: unknown;
  export const Fragment: unknown;
}

declare module 'react-native' {
  export const SafeAreaView: any;
  export const ScrollView: any;
  export const StyleSheet: any;
  export const Text: any;
  export const View: any;
}

declare module 'react-native-svg' {
  export const Circle: any;
  export const Line: any;
  export const Path: any;
  export const Rect: any;
  const Svg: any;
  export default Svg;
}

declare module 'expo-linear-gradient' {
  export const LinearGradient: any;
}

declare module 'expo-status-bar' {
  export const StatusBar: any;
}

declare namespace JSX {
  interface IntrinsicAttributes {
    key?: string | number;
  }
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
