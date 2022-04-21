import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import raven from "../raven.png"

export default ({props}) => {
  console.log(props)
  return (
    <Swiper
      // install Swiper modules
      className='swiper'
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
      <h2>Educational</h2>
        <h1><img className='raven'src={raven}/>{props.education}</h1>
        
      </SwiperSlide>
      <SwiperSlide>
      <h2>Volunteer</h2>
        <h1><img className='raven'src={raven}/><br></br>{props.charity}</h1>
      </SwiperSlide>
      <SwiperSlide>
      <h2>Relaxation</h2>
        <h1><img className='raven'src={raven}/><br></br>{props.relaxation}</h1>
      </SwiperSlide>
      <SwiperSlide>
      <h2>Chores</h2>
      <h1><img className='raven'src={raven}/><br></br>{props.busywork}</h1>
      </SwiperSlide>
      ...
    </Swiper>
  );
};