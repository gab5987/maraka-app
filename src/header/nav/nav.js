import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navegator = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		  <NavLink to='home' activeStyle> Home </NavLink>
		</NavMenu>

		<NavBtn>
      <NavBtnLink to='/signin'>pt-BR</NavBtnLink>
      <NavBtnLink to='/signin'>en-US</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navegator;

