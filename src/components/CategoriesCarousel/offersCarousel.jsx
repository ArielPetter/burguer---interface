import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { toast } from 'react-toastify';
import 'swiper/css';
import { api } from '../../services/api';

import { ContainerOffers, StyledImg } from './offersCarousel';

export default function OffersCarousel() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    async function fetchOffers() {
      try {
        const token = localStorage.getItem('token');
        //console.log(token);
        if (!token) {
          toast.error('Token inválido');
          return;
        }

        const response = await api.get('/products', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setOffers(response.data);
      } catch (error) {
        console.error('Erro ao buscar ofertas:', error);
      }
    }
    fetchOffers();
  }, []);

  return (
    <div>
      <h2 className="text-center text-2xl font-bold text-green-700 my-6">
        OFERTAS DO DIA
      </h2>
      <Swiper slidesPerView={4} spaceBetween={10}>
        {offers.map((offer) => {
          //console.log(offer.url);
          return (
            <SwiperSlide key={offer.id}>
              <ContainerOffers>
                <StyledImg
                  src={offer.url}
                  alt={offer.name}
                  className="w-full h-32 object-cover rounded"
                />
                <p className="text-center font-semibold">{offer.name}</p>
                <p className="text-center text-lg font-bold text-purple-600">
                  R${offer.price}
                </p>
              </ContainerOffers>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
