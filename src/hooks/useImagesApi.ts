import Axios from 'axios';
import { useState, useContext, useEffect } from "react";
import { PokedexContext } from '../context/PokedexContext';

export function useImagesApi(url: string) {

  const [actualImage, setActualImage] = useState()

  useEffect(() => {
    Axios.get(url)
      .then(response => {
        setActualImage(response.data)
      })
  }, [])

  return { actualImage }
}
