import {
  render, screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from '../components/Header/index';
import Home from '../components/Home/Home';
import SearchArea from '../components/SearchArea/index';
import Pagination from '../components/Pagination/index'

describe('Testando Component Header', () => {

  it('testa se existe um header', () => {
    render(<Header />);
    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();
  });

  it('testa se o header contem duas imagems', () => {
    render(<Header />);
    const imagens = screen.getAllByRole('img');
    expect(imagens.length).toEqual(2)
  });

  it('testa se o header contem um botão', () => {
    render(<Header />);
    const button = screen.getAllByRole('button');
    expect(button.length).toEqual(1)
  });

  it('testa se ao clicar no botão aparece o input', () => {
    render(<Home />);

    const button = screen.getByTestId('buttonTest')

    userEvent.click(button)
    const input = screen.getByTestId('search-input')

    expect(input).toBeInTheDocument();
  });

  it('testa se ao clicar no botão ele é substituido', () => {
    render(<Home />);

    const button = screen.getByTestId('buttonTest')

    userEvent.click(button)

    expect(button).not.toBeInTheDocument();

    const input = screen.getByTestId('search-input')

    const closeButton = screen.getByTestId('close_button')
    expect(input).toBeInTheDocument();
    expect(closeButton).toBeInTheDocument();
  });
});

describe('Testando Component SearchArea', () => {

  it('testa se existe um searchArea', () => {
    render(<SearchArea />);
    const searcharea = screen.getByTestId('search-area');
    expect(searcharea).toBeInTheDocument();
  });

  it('testa se contem um input', () => {
    render(<SearchArea />);

    const input = screen.getByTestId('search-input')

    expect(input).toBeInTheDocument();
  });
});

describe('Testando Component Home', () => {

  it('testa se existe um Home', () => {
    render(<Home />);
  });

  it('testa se renderiza o Header', () => {
    render(<Home />);

    const header = screen.getByTestId('header')

    expect(header).toBeInTheDocument();
  });

  it('testa se renderiza os pokeCards', () => {
    render(<Home />);

    const pokeCards = screen.getByTestId('pokeCards')

    expect(pokeCards).toBeInTheDocument();
  });

  it('testa se renderiza o pagination', () => {
    render(<Home />);

    const pagination = screen.getByTestId('pagination')

    expect(pagination).toBeInTheDocument();
  });
});

describe('Testando o Component Pagination', () => {

  it('testa se existe um Pagination', () => {
    render(<Pagination />);
  });

  it('testa se contem dois botões', () => {
    render(<Pagination />);

    const buttons = screen.getAllByRole('button')

    expect(buttons.length).toEqual(2);
  });

  it('testa se contem o texto esperado', () => {
    render(<Pagination />);

    const firstText = screen.getByText('<')
    const SecondText = screen.getByText('1/58')
    const ThirdText = screen.getByText('>')

    expect(firstText).toBeInTheDocument();
    expect(SecondText).toBeInTheDocument();
    expect(ThirdText).toBeInTheDocument();
  });
  /*
 
 it('testa se renderiza o pagination', () => {
   render(<Home />);
 
   const pagination = screen.getByTestId('pagination')
 
   expect(pagination).toBeInTheDocument();
 });
 */
});
