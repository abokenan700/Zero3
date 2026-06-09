import React from 'react';
import Svg, { Circle, Line, Path, Rect } from 'react-native-svg';
import { colors } from '@/theme/colors';

interface IconProps {
  name: string;
  size?: number;
  color?: string;
  filled?: boolean;
}

export const Icon = ({ name, size = 28, color = colors.text, filled = false }: IconProps) => {
  const stroke = color;
  const common = { stroke, strokeWidth: 2.4, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, fill: 'none' };

  if (name === 'search') {
    return <Svg width={size} height={size} viewBox="0 0 32 32"><Circle cx="14" cy="14" r="9" {...common} strokeWidth={3.2}/><Line x1="21" y1="21" x2="29" y2="29" {...common} strokeWidth={3.2}/></Svg>;
  }
  if (name === 'mic') {
    return <Svg width={size} height={size} viewBox="0 0 32 32"><Rect x="11" y="4" width="10" height="17" rx="5" fill={color}/><Path d="M6 16c0 6 4 10 10 10s10-4 10-10M16 26v4" {...common}/></Svg>;
  }
  if (name === 'bag') {
    return <Svg width={size} height={size} viewBox="0 0 32 32"><Path d="M6 13h20v14H6z" fill={filled ? color : 'none'} stroke={color} strokeWidth={2.2}/><Path d="M11 13V9a3 3 0 0 1 6 0v4M17 13V8a3 3 0 0 1 6 0v5" {...common}/><Line x1="10" y1="17" x2="10" y2="23" {...common}/><Line x1="22" y1="17" x2="22" y2="23" {...common}/></Svg>;
  }
  if (name === 'beach') {
    return <Svg width={size} height={size} viewBox="0 0 32 32"><Path d="M6 14c5-8 14-8 20 0M16 6v21M11 25h10M9 18h14" {...common}/><Path d="M16 6c-3 2-4 5-4 8M16 6c4 2 5 5 5 8" {...common}/></Svg>;
  }
  if (name === 'headphones') {
    return <Svg width={size} height={size} viewBox="0 0 32 32"><Path d="M7 18v-4a9 9 0 0 1 18 0v4" {...common}/><Rect x="5" y="17" width="6" height="10" rx="3" {...common}/><Rect x="21" y="17" width="6" height="10" rx="3" {...common}/></Svg>;
  }
  if (name === 'beauty') {
    return <Svg width={size} height={size} viewBox="0 0 32 32"><Rect x="5" y="13" width="7" height="14" rx="1" {...common}/><Path d="M8 13V7h4M17 6h6l-2 10h-3z" {...common}/><Rect x="17" y="16" width="7" height="11" rx="1" {...common}/></Svg>;
  }
  if (name === 'pharmacy') {
    return <Svg width={size} height={size} viewBox="0 0 32 32"><Rect x="6" y="10" width="12" height="17" rx="2" {...common}/><Path d="M9 10V6h6v4M12 15v8M8 19h8" {...common}/><Rect x="21" y="15" width="6" height="12" rx="2" {...common}/></Svg>;
  }
  if (name === 'more') {
    return <Svg width={size} height={size} viewBox="0 0 32 32"><Circle cx="9" cy="16" r="2.3" fill={color}/><Circle cx="16" cy="16" r="2.3" fill={color}/><Circle cx="23" cy="16" r="2.3" fill={color}/></Svg>;
  }
  if (name === 'home') {
    return <Svg width={size} height={size} viewBox="0 0 32 32"><Path d="M5 15 16 6l11 9v12H9V16" fill={filled ? '#FFD85A' : 'none'} stroke={color} strokeWidth={2.4}/><Path d="M20 27v-8h-8v8" {...common}/></Svg>;
  }
  if (name === 'basket') {
    return <Svg width={size} height={size} viewBox="0 0 32 32"><Rect x="6" y="12" width="20" height="14" rx="3" {...common}/><Path d="M11 12a5 5 0 0 1 10 0M11 18v3M21 18v3" {...common}/></Svg>;
  }
  if (name === 'grid') {
    return <Svg width={size} height={size} viewBox="0 0 32 32"><Circle cx="10" cy="10" r="4" {...common}/><Circle cx="22" cy="10" r="4" {...common}/><Circle cx="10" cy="22" r="4" {...common}/><Circle cx="22" cy="22" r="4" {...common}/></Svg>;
  }
  if (name === 'printer') {
    return <Svg width={size} height={size} viewBox="0 0 32 32"><Rect x="8" y="4" width="16" height="8" rx="1" {...common}/><Rect x="6" y="12" width="20" height="12" rx="3" {...common}/><Rect x="10" y="20" width="12" height="8" rx="1" {...common}/><Circle cx="23" cy="17" r="1" fill={color}/></Svg>;
  }
  return <Svg width={size} height={size} viewBox="0 0 32 32"><Circle cx="16" cy="16" r="12" {...common}/></Svg>;
};
