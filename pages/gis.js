'use client';
import { ArcgisMap } from '@arcgis/map-components-react';

export default function Gis() {
  return (
    <div>
      <h1>GIS Overlay Example</h1>
      <p>This page demonstrates a basic ArcGIS map overlay using a public web map item.</p>
      <ArcgisMap itemId="f2e9b762544945f390ca4ac3671cfa72" style={{ height: '500px', width: '100%' }} />
    </div>
  );
}
