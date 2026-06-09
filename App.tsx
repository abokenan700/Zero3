import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { homeData } from '@/data/homeData';
import { HomeScreen } from '@/components/HomeScreen';

export default function App() {
  return (
    <>
      <StatusBar style="dark" translucent />
      <HomeScreen data={homeData} />
    </>
  );
}
