'use client';

import { useEffect, useState } from 'react';
import ManufacturersDesktop from './ManufacturersDesktop';
import ManufacturersMobile from './ManufacturersMobile';

const Manufacturers = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia('(max-width: 1024px)').matches);
  }, []);

  return isMobile ? <ManufacturersMobile /> : <ManufacturersDesktop />;
};

export default Manufacturers;
