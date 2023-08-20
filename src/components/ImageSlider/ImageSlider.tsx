import React, { SetStateAction, useEffect, useRef, useState } from "react";
import { IonButton, IonButtons, IonFabButton, IonIcon, IonLabel, IonModal } from "@ionic/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/navigation';

import './ImageSlider.css'
import { trash } from "ionicons/icons";
import { useDeleteBuildImageMutation } from "../../domain/api/apiSlice";


interface ImageSliderProps {
  images: any[],
  label?: string,
  editable?: boolean
}

const ImageSlider = (props: ImageSliderProps) => {
  const [deleteImage, responseDelete] = useDeleteBuildImageMutation();
  const [imgURL, setImageURL] = useState("");
  const [imgModalOpen, setImgModalOpen] = useState(false);
  const [images, setImages] = useState(props.images);
  const [initialSlide, setInitialSlide] = useState(props.images.length % 2)
  const [slidesPerView, setSlidesPerView] = useState(props.images.length >= 3 ? 3 : props.images.length)

  const modalIMG = useRef<HTMLIonModalElement>(null);

  function handleOpenModal(imageURL: string) {
    setImageURL(imageURL)
    setImgModalOpen(true);
  }

  function handleCloseModal() {
    setImgModalOpen(false)
  }

  function handleDeleteImage(idx: number) {
    deleteImage(images[idx].id).then((value: any) => {

      if (!value.error) {
        setImages(images.filter((_, i) => i !== idx))
        setInitialSlide(images.length % 2)
        setSlidesPerView(images.length >= 3 ? 3 : props.images.length)
      }
    })
  }

  function deleteButton(idx: number) {
    if (!props.editable) return null
    return (
      <div className="swiper-button-wrapper">
        <IonButton fill="outline" shape="round" color="danger" onClick={() => { handleDeleteImage(idx) }}><IonIcon icon={trash}></IonIcon></IonButton>
      </div>
    )
  }

  return (
    <IonLabel>
      <h2>{props.label}</h2>
      <Swiper className="swiper" initialSlide={initialSlide} spaceBetween={20} navigation={true} modules={[Navigation]}
        breakpoints={{
          0: {
            spaceBetween: 5,
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: slidesPerView,
          },
        }}
      >
        {images?.map((item: any, idx) => (
          <SwiperSlide key={item.id}>
            <div className="swiper-img-wrapper">
              <img src={item.image} onClick={() => { handleOpenModal(item.image) }} className="swiper-img" />
            </div>
            {deleteButton(idx)}
          </SwiperSlide>
        ))}
      </Swiper>

      <IonModal ref={modalIMG} keepContentsMounted={true} trigger="open-modal" isOpen={imgModalOpen} onDidDismiss={handleCloseModal}>
        <div className="block"><img src={imgURL} className="swiper-img-modal" /></div>
      </IonModal>
    </IonLabel>
  )

};

export default React.memo(ImageSlider);