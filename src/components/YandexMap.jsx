"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

export default function YandexMap() {
  const mapRef = useRef(null);
  const [scriptReady, setScriptReady] = useState(false);

  useEffect(() => {
    if (!scriptReady || !mapRef.current || !window.ymaps) return;

    window.ymaps.ready(() => {
      if (!mapRef.current || !window.ymaps) return;

      const myMap = new window.ymaps.Map(
        mapRef.current,
        {
          center: [40.263475, 44.566869],
          zoom: 14,
        },
        {
          searchControlProvider: "yandex#search",
        },
      );

      myMap.behaviors.disable("scrollZoom");
      myMap.behaviors.disable("drag");

      const myPlacemark = new window.ymaps.Placemark(
        myMap.getCenter(),
        {
          balloonContentBody: [
            "<address>",
            "<strong>Villa Hills Restaurant</strong>",
            "<br/>",
            '<a target="_blank" href="https://yandex.com/maps/-/CHDqEW8a">Հասցե: Կոտայքի մարզ, Գետամեջ համայնք</a>',
            "</address>",
          ].join(""),
        },
        {
          preset: "islands#redDotIcon",
        },
      );

      myMap.geoObjects.add(myPlacemark);
    });
  }, [scriptReady]);

  return (
    <>
      <Script
        src="https://api-maps.yandex.ru/2.1/?apikey=16d0f87d-c819-4ec3-81d9-6f834abcd141&lang=en_US"
        strategy="afterInteractive"
        onReady={() => setScriptReady(true)}
      />
      <div
        id="map"
        ref={mapRef}
        style={{ width: "100%", height: 400 }}
      />
    </>
  );
}
