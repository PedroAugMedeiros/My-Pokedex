import SearchArea from '../SearchArea';
import SearchIcon from '../../icons/searchIcon.png';
import CloseMenuIcon from '../../icons/CloseMenuIcon.png';
import PokeTitle from '../../Images/Title.png'

interface HeaderProps {
  showSearchArea?: boolean;
  setShowSearchArea?: (newState: boolean) => void;
  setSearchInput?: (newState: string) => void;
}

function Header(props: HeaderProps) {
  const handleClick = (show: boolean) => {
    if (show === false && props.setSearchInput) {
      props.setSearchInput('')
    }
    if(props.setShowSearchArea) {
    props.setShowSearchArea(show)
    }
  }

  return (
    <header data-testid='header' id='header' className='flex header justify-center items-center m-0'>
      <img className='poke-title w-6/4 m-3' src={PokeTitle} alt='pokeTitle'></img>
      {props.showSearchArea ?
        <><SearchArea /><button
          data-testid='close_button'
          className='close-menu fixed right-5' onClick={() => handleClick(false)}><img className=' w-4/4 m-3' src={CloseMenuIcon} alt='closeMeunu'></img></button></> : <button data-testid='buttonTest' className='open-search' onClick={() => handleClick(true)}><img className='flex justify-center items-center w-1/2 m-0' src={SearchIcon} alt='open-search'></img></button>}
    </header>
  )
}

export default Header;
