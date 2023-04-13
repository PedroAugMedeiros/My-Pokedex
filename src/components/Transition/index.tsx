import { useState } from 'react';
import PikachuGif from '../../transitions/run-pikachu-gif.gif'
import SquirtleGif from '../../transitions/squirtle-transition.gif'
import CharmanderGif from '../../transitions/charmander.gif'
import GastlyGif from '../../transitions/gastly.gif'
import CindaquilGif from '../../transitions/cintaquil.gif'
import PokeballGif from '../../transitions/pokeball.gif'
 

function Transition() {

  const pathings = [PikachuGif, SquirtleGif, CharmanderGif, GastlyGif, CindaquilGif, PokeballGif]
  const random = Math.round(Math.random() * 5)

  return (
    <div className='h-screen m-auto overflow-hidden flex justify-center items-center'>
      <img className='w-4/4 mb-40 max-w-40' src={pathings[random]}></img>
    </div>
  );
}

export default Transition;
