import React, { useRef, useState } from "react";
import { IonModal } from "@ionic/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/navigation';

import './ImageSlider.css'


interface ImageSliderProps {
  images: []
}

const ImageSlider = (props: ImageSliderProps) => {

  const [imgURL, setImageURL] = useState("");
  const [imgModalOpen, setImgModalOpen] = useState(false);

  const modalIMG = useRef<HTMLIonModalElement>(null);

  const initialSlide = props.images.length % 2;
  const centeredSlides = props.images.length <= 2 ? true : false
  const slidesPerView = props.images.length >= 3 ? 3 : props.images.length

  function handleOpenModal(imageURL: string) {
    console.log(slidesPerView)
    setImageURL(imageURL)
    setImgModalOpen(true);
  }

  function handleCloseModal() {
    setImgModalOpen(false)
  }

  console.log(props.images)
  console.log(initialSlide)
  console.log(centeredSlides)
  console.log(slidesPerView)

  return (
    <>
      <Swiper className="swiper" spaceBetween={20} navigation={true} modules={[Navigation]}
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
        {props.images?.map((item: any) => (
          <SwiperSlide key={item.id}><div className="swiper-img-wrapper"><img src={item.image} onClick={() => { handleOpenModal(item.image) }} className="swiper-img" /></div></SwiperSlide>
        ))}
      </Swiper>

      <IonModal ref={modalIMG} keepContentsMounted={true} trigger="open-modal" isOpen={imgModalOpen} onDidDismiss={handleCloseModal}>
        <div className="block"><img src={imgURL} className="swiper-img-modal" /></div>
      </IonModal>
    </>
  )

};

export default React.memo(ImageSlider);