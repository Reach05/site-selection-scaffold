import dynamic from 'next/dynamic';

const ArcgisMapClient = dynamic(
  () => import('../components/ArcgisMapClient'),
  { ssr: false }
);

export default function Gis() {
  return (
    <div>
      <h1>GIS Overlay Example</h1>
      <p>This page demonstrates a basic ArcGIS map overlay using a public web map item.</p>
      <ArcgisMapClient />
    </div>
  );
}
