import React, { useEffect } from 'react';
import * as THREE from 'three';

const GlobeViz = () => {
  useEffect(() => {
    // Create the globe container
    const globeContainer = document.createElement("div");
    globeContainer.id = "globeViz";
    document.body.appendChild(globeContainer);

    // Load required scripts dynamically
    const scripts = [
      "//unpkg.com/three/build/three.module.js",
      "//unpkg.com/topojson-client",
      "//unpkg.com/globe.gl",
    ];

    function loadScript(src) {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    }

    Promise.all(scripts.map(loadScript))
      .then(() => {
        // Now that the scripts are loaded, initialize the globe
        const world = Globe()
          (document.getElementById('globeViz'))
          .backgroundColor('rgba(0,0,0,0)')
          .showGlobe(false)
          .showAtmosphere(false);

        // Fetch and process the data
        fetch('//unpkg.com/world-atlas/land-110m.json')
          .then((res) => res.json())
          .then((landTopo) => {
            world
              .polygonsData(topojson.feature(landTopo, landTopo.objects.land).features)
              .polygonCapMaterial(new THREE.MeshLambertMaterial({ color: 'white', side: THREE.DoubleSide }))
              .polygonSideColor(() => 'rgba(0,0,0,0)');
          });

        // Add rotation animation
        const animate = () => {
          requestAnimationFrame(animate);
          world.controls().autoRotate = true;
          world.controls().autoRotateSpeed = 0.5;
          world.controls().autoRotateAfterIdle = 3;
          world.controls().enableDamping = true;
          world.controls().dampingFactor = 0.25;
          world.camera().fov = 40;
          world.controls().update();
        };

        animate();
      })
      .catch((error) => {
        console.error("Error loading scripts:", error);
      });

    return () => {
      document.body.removeChild(globeContainer);
    };
  }, []);

  return (
    <div className="globe-container pointer-events-none cursor-pointer h-full flex pl-96 pt-12 overflow-x-hidden overflow-y-visible">
      <div id="globeViz"></div>
    </div>
  );
};

export default GlobeViz;