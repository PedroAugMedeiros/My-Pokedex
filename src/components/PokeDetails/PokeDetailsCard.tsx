import React, { useContext, useEffect } from 'react';
import { useApi } from "../../hooks/useApi";
import './index.css';
import { PokedexContext } from '../../context/PokedexContext';
import { imageApi } from '../../services/api';

function PokeDetailsCard(props: any) {

  const { pokemonSelected } = useContext(PokedexContext);

  const { pokemon } = useApi(pokemonSelected.url)

  const types = pokemon?.types?.map((el) => el.type.name)

  const stats = pokemon?.stats.map((el) => el.base_stat)

  const hp = stats?.find((el, index) => index === 0);
  const atk = stats?.find((el, index) => index === 1);
  const def = stats?.find((el, index) => index === 2);
  const spd = stats?.find((el, index) => index === 3);
  const exp = stats?.find((el, index) => index === 4);

  const conversor = (stat: any) => {
    const initialNumber = stat?.toFixed(0) * 100
    console.log(initialNumber)
    const converted = initialNumber / 300
    return converted?.toFixed(0)
  }

  const widthStyleHp = {
    width: `${conversor(hp)}%`,
  }

  const widthStyleAtk = {
    width: `${conversor(atk)}%`,
  }

  const widthStyleDef = {
    width: `${conversor(def)}%`,
  }

  const widthStyleSpd = {
    width: `${conversor(spd)}%`,
  }

  const widthStyleExp = {
    width: `${conversor(exp)}%`,
  }



  console.log(widthStyleAtk.width)
  return (
    <div className='PokeDetailsCard' >
      <div className='img'> <img src={pokemon?.sprites.other.home.front_default} ></img></div>
      <h1>
        {pokemon?.name}
      </h1>
      <section className='types'>
        {types?.map((el) => <div>{el}</div>)}
      </section>
      <section className='fisical-atributes'>
        <div className='height'>
          <h2>{pokemon?.height}</h2>
          <h3>HEIGHT</h3>
        </div>
        <div className='weight'>
          <h2>{pokemon?.weight}</h2>
          <h3>WEIGHT</h3>
        </div>
      </section>
      <section className='progess-section'>
        <h1>My Skills</h1>
        <div>
          <div className="container">
            <span>HP</span>
            <div style={widthStyleHp} className="skill html">{hp}</div>
          </div>
          <div className="container">
            <span>DEF</span>
            <div style={widthStyleAtk} className="skill html">{atk}</div>
          </div>
          <div className="container">
            <span>ATK</span>
            <div style={widthStyleDef} className="skill html">{def}</div>
          </div>
          <div className="container">
            <span>SPD</span>
            <div style={widthStyleSpd} className="skill html">{spd}</div>
          </div>
          <div className="container">
            <span>EXP</span>
            <div style={widthStyleExp} className="skill html">{exp}</div>
          </div>

        </div>
      </section>

    </div>
  )
}

export default PokeDetailsCard;
