"use client";
import React, { useEffect } from 'react';
import * as THREE from 'three';
import dynamic from 'next/dynamic'
const Globe = dynamic(() => import('globe.gl'), { ssr: false });
import * as topojson from 'topojson-client';

const GlobeViz = () => {
  useEffect(() => {
    const globeContainer = document.getElementById('globeViz');

    const world = Globe()
      (globeContainer)
      .backgroundColor('rgba(0,0,0,0)')
      .showGlobe(false)
      .showAtmosphere(false);

    const fetchData = async () => {
      try {
        const response = await fetch('https://unpkg.com/world-atlas/land-110m.json');
        const landTopo = await response.json();

        world
          .polygonsData(topojson.feature(landTopo, landTopo.objects.land).features)
          .polygonCapMaterial(new THREE.MeshLambertMaterial({ color: 'white', side: THREE.DoubleSide }))
          .polygonSideColor(() => 'rgba(0,0,0,0)');
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const animate = () => {
      // Add rotation animation
      world.controls().autoRotate = true;
      world.controls().autoRotateSpeed = 0.5;
      world.controls().autoRotateAfterIdle = 3;
      world.controls().enableDamping = true;
      world.controls().dampingFactor = 0.25;
      world.camera().fov = 40;
      requestAnimationFrame(animate);
      world.controls().update();
    };

    fetchData();
    animate();
  }, []);

  return (
    <div className="globe-container pointer-events-none cursor-pointer h-full flex pl-96 pt-12 overflow-x-hidden overflow-y-visible ">
      <div id="globeViz"></div>
    </div>
  );
};

export default GlobeViz;
