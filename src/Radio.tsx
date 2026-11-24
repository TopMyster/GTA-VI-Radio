import { Splide, SplideSlide } from '@splidejs/react-splide';

const CHANNELS = [
  {
    name: "Afrobank FM",
    audio: "",
    image: "/assets/radio-images/Afrobank.webp"
  },
  {
    name: "Flash FM",
    audio: "",
    image: "/assets/radio-images/Flash.webp"
  }
]
export default function Radio() {
  const slideOption = {
    perPage: 5,
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
        {CHANNELS.map((channel: { name: string, image: string }) => (
          <SplideSlide>
            <img src={channel.image} alt={channel.name} />
          </SplideSlide>
        ))}
      </Splide>
    </>
  )
}
