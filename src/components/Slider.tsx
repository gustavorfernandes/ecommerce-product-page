import { ReactNode } from 'react';
import { Swiper, SwiperProps } from 'swiper/react';
import { Pagination, Navigation, A11y } from 'swiper';

interface SliderProps {
  settings: SwiperProps;
  children: ReactNode;
}

export default function Slider({ settings, children }: SliderProps) {
  return (
    <Swiper  modules={[Pagination, Navigation, A11y]} {...settings}>{children}</Swiper>
  )
}