import { useState } from 'react';
import {
  CardContainerStyled,
  CardImageContainerStyled,
  CardContentStyled,
  CardContainerBottom,
  LinkItem,
} from './CardStyled';
import { Button } from '@nextui-org/react';
import { FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Card = (data) => {
  const [favColor, setFavColor] = useState('white');

  const onFavButtonClick = () => {
    const changeColorSVG = favColor === 'white' ? 'yellow' : 'white';
    setFavColor(changeColorSVG);
  };

  return (
    <CardContainerStyled
      key={data.id}
      as={motion.div}
      whileHover={{ scale: 1.02 }}
    >
      <CardImageContainerStyled>
        <Button
          onClick={onFavButtonClick}
          className="z-0 group inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-3xl   gap-unit-2 rounded-full px-unit-0 data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none bg-transparent data-[hover=true]:bg-default/80 min-w-unit-10 w-unit-10 h-unit-10 absolute top-3 right-3 text-default-400 data-[liked=true]:text-warning"
        >
          <FaStar fill={favColor} />
        </Button>
        <img key={data.id} src={data.src} alt={data.name} />
      </CardImageContainerStyled>

      <CardContentStyled>
        <h2 className="w-full text-center">{data.name}</h2>
        <div className="flex gap-1 justify-center items-center w-full">
          <Button size="sm">S</Button>
          <Button size="sm">M</Button>
          <Button size="sm">L</Button>
          <Button size="sm">XL</Button>v
        </div>
        <CardContainerBottom>
          <span>${data.price}</span>
          <LinkItem to={`/products/${data.name}`}>Ver más</LinkItem>
          {/* <Botton to={data.name}>a</Botton> */}
        </CardContainerBottom>
      </CardContentStyled>
    </CardContainerStyled>
  );
};

export default Card;
