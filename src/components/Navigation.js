import {Navbar, Nav} from 'react-bootstrap';
import MyNavItem from './NavItem';
import Container from 'react-bootstrap/Container';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import ShopHome from './ShopHome';
import Product from './Product';
import ProductPage from './ProductPage';
import Cart from './Cart';

function Navigation(props) {
    return (
        <BrowserRouter>
            <Navbar bg="light" expand="lg">
            <LinkContainer to="/">
            <   Navbar.Brand>Our Store</Navbar.Brand>
            </LinkContainer>
                <Container>
                    <Navbar.Toggle aria-controls="basic-Navbar-nav" />
                    <Navbar.Collapse id="basic-Navbar-nav">
                        <Nav className="me-auto">
                            <MyNavItem path="/" title="Home" />
                            <MyNavItem path="/products" title="Products" />
                            <MyNavItem path="/cart" title="Cart" />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Routes>
                <Route 
                path="/" 
                element={<ShopHome/>} 
                />
                <Route 
                path="/products" 
                element={<ProductPage 
                    productList={props.productList}
                    />} 
                />
                <Route 
                path="/cart" 
                element={<Cart 
                    removeFromCart={props.removeFromCart} 
                    inCart={props.inCart} 
                    productList={props.productList} 
                    />} 
                />
                <Route 
                path="/products/:id" 
                element={<Product 
                    addToCart={props.addToCart} 
                    productList={props.productList}
                    />} 
                />
            </Routes>
        </BrowserRouter>
        
    )
}

export default Navigation;