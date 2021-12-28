import LayoutContainer from '@/components/layouts/layout-main';
import { NextPage } from 'next';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: -8.385779272978626,
  lng: -74.5320432174842,
};

const GeoLocation: NextPage = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_KEY,
  });
  return (
    <LayoutContainer>
      <div className="w-full max-w-7xl mx-auto px-8">
        <h2 className="text-2xl font-extrabold text-center mb-4">Ubicación</h2>
        {!isLoaded && <p>Map is Loading</p>}
        {loadError && <p>Error loading map</p>}
        {isLoaded && (
          <div className="w-[300px] sm:w-[500px] md:w-[600px] lg:w-[900px] xl:w-[1250px] h-[500px] mx-auto">
            <GoogleMap
              id="map"
              zoom={15}
              mapContainerStyle={containerStyle}
              center={center}
            >
              <Marker
                position={{ lat: -8.385779272978626, lng: -74.5320432174842 }}
              />
            </GoogleMap>
          </div>
        )}
      </div>
    </LayoutContainer>
  );
};

export default GeoLocation;
