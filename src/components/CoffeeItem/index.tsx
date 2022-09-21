import { useContext, useState } from "react";
import { Context } from "../../contexts/Context";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { CartIconArea, CoffeeInfoArea, CoffeeItem, Container, PriceArea, QuantityArea, StyledToastContainer } from "./styles";

import CoffeIcon from '../../assets/images/coffe_icon.svg';

import { ShoppingCart, Plus, Minus } from "phosphor-react";


interface Coffee {
  id: number;
  title: string;
  tag: string;
  description: string;
  price: number;
}

export const CoffeItem = ({ coffee }: any) => {
  const [qtdItem, setQtdItem] = useState(1);

  

  const { cart, setCart } = useContext(Context);

  const handleAddToCart = (coffeeItem: Coffee) => {
    const coffeeObj = {
      ...coffeeItem,
      quantity: qtdItem
    };

    setCart([...cart, coffeeObj]);

    toast('Café adicionado ao carrinho', {
      autoClose: 1500,
    });
  }

  return (
        <Container>
        <CoffeeItem>
              <CoffeeInfoArea>
                <img src={ CoffeIcon } alt="" />
                <span>{ coffee.tag }</span>
                <h3>{ coffee.title }</h3>
                <small>{ coffee.description }</small>
              </CoffeeInfoArea>

              <PriceArea>
                <span>
                  <small>R$</small> 
                  { coffee.price }
                </span>
                <QuantityArea>
                  <Minus onClick={ qtdItem > 1 ? () => setQtdItem(qtdItem - 1) : () => {} } cursor='pointer' />
                  <span>{qtdItem}</span>
                  <Plus onClick={ () => setQtdItem(qtdItem + 1) } cursor='pointer' />
                </QuantityArea>

                <CartIconArea onClick={ () => handleAddToCart(coffee) }>
                  <ShoppingCart size='1.4rem' weight="fill" color='#FFF'/>
                </CartIconArea>
              </PriceArea>
            </CoffeeItem>

            <StyledToastContainer />
      </Container>
  );
}