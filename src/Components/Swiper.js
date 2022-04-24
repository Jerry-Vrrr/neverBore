import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import raven from "../raven.png";

export default ({ props, openModal, openNotes, addToList }) => {
  return (
    <Swiper
      className="swiper"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <h2>Educational</h2>
        <div>
        <h1 className="swipe-nav">
            <img className="raven" src={raven} />
            <br></br>
            {props.education[0]}
            <br></br>
            <div className='but-box'>
            <button id='education' onClick={openModal}>expand</button>
            <button className='save' id={props['education'][1]} value={props['education'][0]} onClick={addToList}>
              Save Activity
            </button>
            </div>
            
          </h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <h2>Volunteer</h2>
        <h1 className="swipe-nav">
          <img className="raven" src={raven} />
          <br></br>
          {props.charity[0]}
          <br></br>
          <div className='but-box'>
          <button id='charity' onClick={openModal}>expand</button>
          <button id={props['charity'][1]} value={props['charity'][0]} onClick={addToList}>
              Save Activity
            </button>
          </div>
          
        </h1>
      </SwiperSlide>
      <SwiperSlide >
        <h2>Relaxation</h2>
        <h1 className="swipe-nav">
          <img className="raven" src={raven} />
          <br></br>
          {props.relaxation[0]}
          <br></br>
          <div className='but-box'>
          <button id='relaxation' onClick={openModal}>expand</button>
          <button id={props['relaxation'][1]} value={props['relaxation'][0]} onClick={addToList}>
              Save Activity
            </button>
          </div>
          
        </h1>
      </SwiperSlide>
      <SwiperSlide>
        <h2>Productivity</h2>
        <h1 className="swipe-nav">
          <img className="raven" src={raven} />
          <br></br>
          {props.busywork[0]}
          <br></br>
          <div className='but-box'>
          <button id='busywork' onClick={openModal}>expand</button>
          <button id={props['busywork'][1]} value={props['busywork'][0]} onClick={addToList}>
              Save Activity
            </button>
          </div>
          
        </h1>
      </SwiperSlide>
      ...
    </Swiper>
  );
};
