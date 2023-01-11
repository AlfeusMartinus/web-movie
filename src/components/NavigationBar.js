import {Navbar, Container, Nav} from "react-bootstrap"
const NavigationBar = () => { 
    return (
        <div>
        <Navbar variant="light">
            <Container>
                <Navbar.Brand href="/">MovieApp</Navbar.Brand>
                <Nav>
                <Nav.Link href="#trending">TRENDING</Nav.Link>
                <Nav.Link href="#horror">HORROR</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </div>
    )
}

export default NavigationBar