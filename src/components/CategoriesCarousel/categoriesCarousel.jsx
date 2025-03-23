import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import {
  StyledH2,
  StyledImg,
  ContainerImagensCategories,
} from './categoriesCarousel.js';

import cardBurg from '../../assets/cardBurg.png';
import cardDrink from '../../assets/cardDrink.png';
import cardDessert from '../../assets/cardDessert.png';
import cardStarter from '../../assets/cardStarter.png';

const categories = [
  { name: 'Hambúrgueres', image: cardBurg },
  { name: 'Bebidas', image: cardDrink },
  { name: 'Sobremesas', image: cardDessert },
  { name: 'Acompanhamentos', image: cardStarter },
];

export default function CategoriesCarousel() {
  return (
    <div>
      <StyledH2>CATEGORIAS</StyledH2>
      <Swiper slidesPerView={4} spaceBetween={1}>
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <ContainerImagensCategories className="bg-white rounded-lg shadow p-4">
              <StyledImg
                className={
                  category.name === 'Acompanhamentos' ? 'starterImage' : ''
                }
                src={category.image}
                alt={category.name}
              />
              <p className="text-center font-semibold">{category.name}</p>
            </ContainerImagensCategories>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
