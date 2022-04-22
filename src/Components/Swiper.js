import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import raven from "../raven.png";

export default ({ props, openModal }) => {
  return (
    <Swiper
      // install Swiper modules
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
          <h1>
            <img className="raven" src={raven} />
            <br></br>
            {props.education}
            <button id='education' onClick={openModal}>expand</button>
          </h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <h2>Volunteer</h2>
        <h1>
          <img className="raven" src={raven} />
          <br></br>
          {props.charity}
          <button id='charity' onClick={openModal}>expand</button>
        </h1>
      </SwiperSlide>
      <SwiperSlide>
        <h2>Relaxation</h2>
        <h1>
          <img className="raven" src={raven} />
          <br></br>
          {props.relaxation}
          <button id='relaxation' onClick={openModal}>expand</button>
        </h1>
      </SwiperSlide>
      <SwiperSlide>
        <h2>Chores</h2>
        <h1>
          <img className="raven" src={raven} />
          <br></br>
          {props.busywork}
          <button id='busywork' onClick={openModal}>expand</button>
        </h1>
      </SwiperSlide>
      ...
    </Swiper>
  );
};
