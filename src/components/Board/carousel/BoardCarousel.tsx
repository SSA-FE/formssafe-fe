import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useFetchPopularFormsQuery } from '@/api/viewApi';
import Loading from '@/components/Loading';
import FormCard from '@/components/Myspace/FormCard';
import { useLocation } from 'react-router-dom';
import {
  EffectCoverflow,
  Pagination,
  Autoplay,
  Navigation,
} from 'swiper/modules';
import { HotIcon } from '@/assets/icons';

const BoardCarousel = () => {
  const { data, isLoading } = useFetchPopularFormsQuery();
  const location = useLocation();
  const path = location.pathname;

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="w-full h-[30rem] my-[3rem]">
      <div className="w-full justify-center flex ">
        <h1 className="text-[1.6rem] font-semibold text-center">HOT&nbsp;</h1>
        <HotIcon width="25" />
      </div>
      <div className="w-full h-full flex items-center">
        <Swiper
          modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
          effect={'coverflow'}
          slidesPerView={3} //한 슬라이드에 보여줄 갯수
          spaceBetween={100} //슬라이드간 거리
          loop={true} //슬라이드 반복 여부
          autoplay={{ delay: 5000 }} //자동 슬라이드 시간
          centeredSlides={true}
          grabCursor={true}
          navigation={true}
          coverflowEffect={{
            rotate: 0,
            slideShadows: false,
          }}
          pagination={{
            clickable: true,
          }} //pager여부
          className="coverflow"
        >
          {data?.map((form) => (
            <SwiperSlide key={form.id}>
              <FormCard to={`${form.id}`} path={path} {...form} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BoardCarousel;
