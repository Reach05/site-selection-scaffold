# site-selection-scaffold  
This repository provides a basic scaffold for a site selection web app built with Next.js and ArcGIS/ESRI. It sets up a simple Next.js app with a homepage and a sample GIS overlay page using the @arcgis/map-components-react library. The project demonstrates how to load ArcGIS map components in a Next.js environment and prepares the project for CI/CD and deployment.  

## Features  
- Next.js boilerplate with pages directory (Home and GIS).  
- GIS overlay page that uses ArcGIS Map web component with a public web map item.  
- Configurable via environment variable `NEXT_PUBLIC_ARCGIS_API_KEY` for private maps.  
- GitHub Actions CI workflow to build the project on push/pull request.  
- Ready for deployment to Vercel or Google Cloud Run.  

## Setup  

### Prerequisites  
- Node.js 16+  
- npm  

### Installation  
```bash
git clone https://github.com/Reach05/site-selection-scaffold.git
cd site-selection-scaffold
npm install
```  

### Running locally  
Create a `.env.local` file and set `NEXT_PUBLIC_ARCGIS_API_KEY` if you plan to load private ArcGIS resources. The included GIS page uses a public item ID so it will render without a key.  

```bash
npm run dev
```  

Open `http://localhost:3000` in your browser. The homepage includes a link to `/gis` which renders a map using ArcGIS components.  

## Deployment  
The project can be deployed on Vercel or Google Cloud Run. To deploy on Vercel:  

1. Sign in to Vercel and import this GitHub repository.  
2. Set the environment variable `NEXT_PUBLIC_ARCGIS_API_KEY` in the Vercel dashboard if needed.  
3. Deploy. Vercel will automatically detect the Next.js framework and build the project.  

For Google Cloud Run, you can build a container from the Next.js build and deploy. Use the CI workflow as a starting point.  

## Credits  
This scaffold follows the guidance from Esri on building ArcGIS API for JavaScript apps with NextJS. Their article explains how to leverage Next.js dynamic imports and serverless functions to integrate mapping modules and manage state ([Building ArcGIS API for JavaScript Apps with NextJS - Esri](https://www.esri.com/arcgis-blog/products/js-api-arcgis/developers/building-arcgis-api-for-javascript-apps-with-nextjs#:~:text=Building%20ArcGIS%20API%20for%20JavaScript,the%20ArcGIS%20API%20for%20JavaScript)). The sample GIS page uses the `@arcgis/map-components-react` package, which is showcased in the open‑source demo project `arcgis-map-comps-nextjs` that runs on Next.js and can be deployed to Vercel ([odoe/arcgis-map-comps-nextjs - GitHub](https://github.com/odoe/arcgis-map-comps-nextjs/#:~:text=,Repository%20files%20navigation)). 
