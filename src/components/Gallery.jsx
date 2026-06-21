"use client";

import Image from "next/image";
import { useState } from "react";

const GALLERY_IMAGES = [
  {
    className: "gallery_imag_1",
    src: "/img/gallery/1.JPG",
    colClass: "col-xl-4 col-md-12 col-lg-12",
  },
  {
    className: "gallery_imag_3",
    src: "/img/gallery/3.jpg",
    colClass: "col-xl-5 col-md-12 col-lg-12",
  },
  {
    className: "gallery_imag_4",
    src: "/img/gallery/4.JPG",
    colClass: "col-xl-6 col-md-12 col-lg-12",
  },
  {
    className: "gallery_imag_5",
    src: "/img/gallery/5.JPG",
    colClass: "col-xl-6 col-md-12 col-lg-12",
  },
];

export default function Gallery() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <>
      <div className="gallery_area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section_title text-center">
                <Image
                  src="/img/banner/flowers.png"
                  alt=""
                  width={180}
                  height={60}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid p-0">
          <div className="row grid no-gutters">
            {GALLERY_IMAGES.map((image) => (
              <div key={image.src} className={`${image.colClass} grid-item`}>
                <div className={`single_gallery ${image.className}`}>
                  <button
                    type="button"
                    className="popup-image"
                    onClick={() => setActiveImage(image.src)}
                    aria-label="Open gallery image"
                    style={{
                      width: "100%",
                      height: "100%",
                      border: "none",
                      padding: 0,
                      background: "transparent",
                      cursor: "pointer",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {activeImage && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveImage(null)}
          onKeyDown={(event) => {
            if (event.key === "Escape") setActiveImage(null);
          }}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            padding: 24,
          }}
        >
          <button
            type="button"
            onClick={() => setActiveImage(null)}
            aria-label="Close gallery"
            style={{
              position: "absolute",
              top: 20,
              right: 24,
              background: "transparent",
              border: "none",
              color: "#fff",
              fontSize: 32,
              cursor: "pointer",
            }}
          >
            ×
          </button>
          <Image
            src={activeImage}
            alt="Gallery"
            width={1200}
            height={800}
            onClick={(event) => event.stopPropagation()}
            style={{
              maxWidth: "100%",
              maxHeight: "90vh",
              width: "auto",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </div>
      )}
    </>
  );
}
