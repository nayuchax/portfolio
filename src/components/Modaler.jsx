import React from 'react';
import Modal from 'react-modal';
import "./Modal.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';


const Modaler = ({ isOpen, closeModal, title, content, table, img_path }) => {

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Modal"
      className="Modal"
      overlayClassName="Overlay"
    >
      <div className='text-md font-bold text-gray-800 border-b border-blue-200 p-2'>{title}</div>
      <div className="bg-white p-8 rounded-lg grid grid-cols-1 gap-4 xl:grid-cols-2 gap-8">
        <div className='col-span-1'>
          <div className='text-gray-800 text-sm p-4'>・左右にスワイプすると画像が遷移します。</div>
          <div className=""><Swiper
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            keyboard={{ enabled: true }}
          >
            <SwiperSlide>
              {img_path && img_path[0] && <img src={img_path[0]} alt="Slide 1" />}
            </SwiperSlide>
            <SwiperSlide>
              {img_path && img_path[1] && <img src={img_path[1]} alt="Slide 2" />}
            </SwiperSlide>
            <SwiperSlide>
              {img_path && img_path[2] && <img src={img_path[2]} alt="Slide 3" />}
            </SwiperSlide>
          </Swiper></div>
        </div>
        
        <div className='col-span-1 flex flex-col pl-2'>
          <div className='text-center text-lg font-bold p-2'>point</div>
          <div className='pb-4 text-sm'>{content}</div>
          <div>{table}</div>
        </div>
      </div>
      <button onClick={closeModal} className="bg-gray-400 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-gray-700">閉じる</button>
    </Modal>
  );
};

export default Modaler;