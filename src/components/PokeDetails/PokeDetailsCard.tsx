import React, { useContext, useEffect } from 'react';
import { useApi } from "../../hooks/useApi";
import './index.css';
import { PokedexContext } from '../../context/PokedexContext';
import BackIcon from '../../icons/back-icon.png';
import { useNavigate } from "react-router-dom";
import Transition from '../Transition';
import PokeTitle from '../../Images/Title.png'

function PokeDetailsCard(props: any) {

  const { pokemonSelected, setShowDetails, setSearchInput } = useContext(PokedexContext);

  const { pokemon, mainType, isLoading, getPokemons } = useApi(pokemonSelected.url)

  const types = pokemon?.types?.map((el) => el.type.name)

  const stats = pokemon?.stats.map((el) => el.base_stat)

  const hp = stats?.find((el, index) => index === 0);
  const atk = stats?.find((el, index) => index === 1);
  const def = stats?.find((el, index) => index === 2);
  const spd = stats?.find((el, index) => index === 3);
  const exp = stats?.find((el, index) => index === 4);


  const convertStatusPoints = (stat: any, height: any, weight: any) => {

    if (height === null) {
      const initialNumber = stat?.toFixed(0) * 100
      const converted = initialNumber / 300
      return converted?.toFixed(0)
    }

    const convertedHeight = height?.toString().split('')
    const convertedWeight = weight?.toString().split('')

    const tratedHeight = `${convertedHeight?.find((el: any, index: any) => index === 0)}.${convertedHeight?.find((el: any, index: any) => index === 1) || '0'}`;

    const tratedWeight = `${convertedWeight?.find((el: any, index: any) => index === 0)}${convertedWeight?.find((el: any, index: any) => index === 1)}.${convertedWeight?.find((el: any, index: any) => index === 2) || '0'}`


    return [tratedHeight, tratedWeight]
  }

  const combatePoints = (stat: any) => {

    const xd = `${hp}`
    const converted: number = parseInt(xd)
    return converted;
  }

  const combateHp: number = combatePoints(hp)
  const combateAtk: number = combatePoints(atk)
  const combateDef: number = combatePoints(def)
  const combateSpd: number = combatePoints(spd)
  const combateXp: number = combatePoints(exp)

  const combatStat = combateHp + combateAtk + combateDef + combateSpd + (combateXp * 10)

  const widthStyleHp = {
    width: `${convertStatusPoints(hp, null, null)}%`,
  }

  const widthStyleAtk = {
    width: `${convertStatusPoints(atk, null, null)}%`,
  }

  const widthStyleDef = {
    width: `${convertStatusPoints(def, null, null)}%`,
  }

  const widthStyleSpd = {
    width: `${convertStatusPoints(spd, null, null)}%`,
  }

  const widthStyleExp = {
    width: `${convertStatusPoints(exp, null, null)}%`,
  }

  const navigate = useNavigate();

  const pokeDetailsStyles = `flex items-center justify-center pokeDetailsCard ${mainType}`


  const handleClick = () => {
    setShowDetails(false)
    navigate("/Home");
    setSearchInput('')
  }

  useEffect(() => {
    getPokemons()
  }, [pokeDetailsStyles])

  const heightAndWeight = convertStatusPoints(null, pokemon?.height, pokemon?.weight)

  if (isLoading) {
    return (
      <div className='flex flex-col justify-center items-center'>
        <img className='w-3/4 mt-5 poke-title' src={PokeTitle}></img>
        <Transition />
      </div>)
  }


  return (
    <div className='poke-details flex flex-col bg-[#3C3E44] h-screen justify-between' >
      <div className={pokeDetailsStyles}> <img className='card-details-img w-3/5 mb-1' src={pokemon?.sprites.other.home.front_default} ></img>
        <button className='fixed top-0 left-1 w-1/3' onClick={handleClick}><img className='w-1/3 flex flex-col justify-center' src={BackIcon} /></button>
      </div>
      <article className='poke-info'>
        <h1 className='h1 title self-center font-sans  text-3xl my-3 mb-6 text-second-details'>
          {pokemon?.name}
        </h1>
        <section className='types flex flex-row justify-center items-center space-x-20 mb-5'>
          {types?.map((el) => {
            const typeDivStyles = `type w-1/4 text-center font-sans font-bold  text-1xl rounded-2xl p-1 ${el}`
            return <div className={typeDivStyles}>{el}</div>
          })}
        </section>
        <section className='fisical-atributes flex flex-row justify-between items-center'>
          <div className='flex flex-col justify-center items-center weight w-1/4  font-serif '>
            <h2 className='fisical-atributes text-second-details mb-3 align-baseline text-2xl'>{`${heightAndWeight[0]} M`}</h2>
            <h3 className='fisical-atributes text-primary-details font-bold text-sm'>Altura</h3>
          </div>
          <div className='flex flex-col justify-center items-center weight w-1/4  font-serif  mx-4'>
            <h2 className='fisical-atributes text-second-details mb-3 align-baseline text-2xl'>{`${heightAndWeight[1]} KG`}</h2>
            <h3 className='fisical-atributes  text-primary-details font-bold text-sm'>Peso</h3>
          </div>
        </section>
        <section className='progess-section flex flex-col pb-10'>
          <h1 className='h1-status self-center font-sans  text-3xl mb-3 text-second-details '>
            Status
          </h1>
          <div className='flex flex-col'>
            <div className='flex skill-div flex-row justify-between mb-2'>
              <span className='ml-3 text-second-details'>HP</span>
              <div className="container mr-5 ">
                <div style={widthStyleHp} className=" skill bg-[#F75555] ">{`${hp}/300`}</div>
              </div>
            </div>
            <div className='flex skill-div flex-row justify-between mb-2'>
              <span className='ml-3 text-second-details'>DEF</span>
              <div className="container mr-5">
                <div style={widthStyleAtk} className=" skill bg-[#35B0D1] ">{`${atk}/300`}</div>
              </div>
            </div>
            <div className='skill-div flex flex-row justify-between mb-2'>
              <span className='ml-3 text-second-details'>ATK</span>
              <div className="container mr-5">
                <div style={widthStyleDef} className=" skill bg-[#F770A1] ">{`${def}/300`}</div>
              </div>
            </div>
            <div className='skill-div flex flex-row justify-between status-bar mb-2'><span className='ml-3 text-second-details'>SPD</span>
              <div className="container mr-5 ">
                <div style={widthStyleSpd} className=" skill bg-[#5AC18E] ">{`${spd}/300`}</div>
              </div>
            </div>
            <div className='skill-div flex flex-row justify-between'>
              <span className='ml-3 text-second-details'>EXP</span>
              <div className="container mr-5 bg-primary-details">
                <div style={widthStyleExp} className="skill bg-[#7DB0DF] ">{`${exp}/300`}</div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </div>
  )
}

export default PokeDetailsCard;
