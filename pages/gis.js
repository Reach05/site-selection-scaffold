'use client';
import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { defineCustomElements } from '@arcgis/map-components/dist/loader';

const ArcgisMap = dynamic(() => import('@arcgis/map-components-react').then(mod => mod.ArcgisMap), { ssr: false });

export default function Gis() {
  useEffect(() => {
    defineCustomElements(window);
  }, []);

  return (
    <div>
      <h1>GIS Overlay Example</h1>
      <p>This page demonstrates a basic ArcGIS map overlay using a public web map item.</p>
      <ArcgisMap itemId="f2e9b762544945f390ca4ac3671cfa72" style={{ height: '500px', width: '100%' }} />
    </div>
  );
}
