// import { ImageGallery } from '../components/Gallery/ImageGallery';
// import { galleryData } from '../data/galleryData';
import "./gallery.styles.css";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { GalleryCategories } from "../../components/galleryCategorySelect/galleryCategorySelect.component";
import { galleryCategories } from "../../data/galleryCategoryData";
import { PageSection } from "../../components/pageSection/pageSection.component";
export const Gallery = () => {
  const location = useLocation();
  const [categorySelected, setCategorySelected] = useState(false);

  useEffect(() => {
    setCategorySelected(location.pathname !== "/gallery");
  }, [location]);

  return (
    <>
      <GalleryCategories
        ulClassName={
          categorySelected ? "cat-select-wrapper-shrink" : "cat-select-wrapper"
        }
        liClassName={
          categorySelected
            ? "cat-select-container-shrink"
            : "cat-select-container"
        }
        linkClassName={
          categorySelected ? "cat-select-item-shrink" : "cat-select-item"
        }
        overlayClassName={
          categorySelected ? "cat-select-overlay-shrink" : "cat-select-overlay"
        }
        titleClassname={
          categorySelected ? "cat-select-title-shrink" : "cat-select-title"
        }
        imageClassName={
          categorySelected ? "cat-select-image-shrink" : "cat-select-image"
        }
        data={galleryCategories}
      />
      <PageSection
        wrapperProps={{
          style: { backgroundColor: "var(--background-color-B)" },
        }}
        containerProps={{
          style: { backgroundColor: "var(--background-color-B)" },
        }}
      >
        <Outlet />
      </PageSection>
    </>
  );
};
