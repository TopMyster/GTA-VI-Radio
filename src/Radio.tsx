import { Splide, SplideSlide } from '@splidejs/react-splide';

export default function Radio() {
  const slideOption = {
    perPage: 3,
    perMove: 1,
    type: 'loop',
    keyboard: 'global',
    focus: 'center',
    arrows: true,
    pagination: false,
    wheel: true,
    flickMaxPages: 1,
    speed: 500,
    gap: '0.2px'
  }
  return (
    <>
      <Splide options={slideOption} aria-label="My Favorite Images">
        <SplideSlide>
          <img src="image1.jpg" alt="Image 1"/>
        </SplideSlide>
        <SplideSlide>
          <img src="image2.jpg" alt="Image 2"/>
        </SplideSlide>
        <SplideSlide>
          <img src="image3.jpg" alt="Image 3"/>
        </SplideSlide>
      </Splide>
    </>
  )
}
