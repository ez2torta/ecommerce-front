import Link from "next/link";
import styled from "styled-components";
import Center from "@/components/Center";
import { useContext, useState } from "react";
import { CartContext } from "@/components/CartContext";
import BarsIcon from "@/components/icons/Bars";
import CartIcon from "@/components/icons/CartIcon";
import ProductIcon from "@/components/icons/ProductIcon";
import HomeIcon from "@/components/icons/HomeIcon";

// #ff9603
// #2d03ff
// #ff03d5
// #d5ff03

const StyledHeader = styled.header`
  background-color: #222;
`;
const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
  position: relative;
  z-index: 3;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;
const StyledNav = styled.nav`
  ${(props) =>
    props.mobileNavActive
      ? `
    display: block;
  `
      : `
    display: none;
  `}
  gap: 15px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 70px 20px 20px;
  background-color: #222;
  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }
`;
const NavLink = styled(Link)`
  display: relative;
  color: #aaa;
  text-decoration: none;
  padding: 0.5em;
  @media screen and (min-width: 768px) {
    padding: 10px;
  }
`;
const NavButton = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  border: 0;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 3;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const CarritoButton = styled(Link)`
  background-color: transparent;
  width: 30px;
  height: 30px;
  border: 0;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 3;
`;

export default function Header() {
  const { cartProducts } = useContext(CartContext);
  const cartLength = cartProducts.length;
  const [mobileNavActive, setMobileNavActive] = useState(false);
  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <NavButton onClick={() => setMobileNavActive((prev) => !prev)}>
            <BarsIcon />
          </NavButton>
          <Logo href={"/"}>Tortita.net</Logo>
          <StyledNav mobileNavActive={mobileNavActive}>
            <NavLink href={"/"}>Inicio</NavLink>
            <NavLink href={"/products"}>Producto</NavLink>
          </StyledNav>
          <CarritoButton href={"/cart"}>
            <CartIcon /> ({cartLength})
          </CarritoButton>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}
