import { Card, Container, Row, Col, Image } from "react-bootstrap"
import allofusdeadImage from "../assets/images/horror/allOfUsAreDead.png"
import getsOutAliveImage from "../assets/images/horror/noOneGetsOutAlive.png"
import insideyourhouseImage from "../assets/images/horror/thereIsSomeoneInsideYourHouse.png"
import silentseaImage from "../assets/images/horror/theSilentSea.png"


const horror = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white">HORROR MOVIES</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id="horror">
                        <Card className="bg-dark movieImage">
                        <Image 
                            src={allofusdeadImage} 
                            alt="Anne+ Movies"
                            className="images"
                        />
                        <div className="p-2 m-1 text-white">
                        <Card.Title className="text-center">All Of Us Are Dead</Card.Title>
                        <Card.Text className="text-left">
                        A high school experienced a horrific event due to a zombie virus outbreak. Several trapped students including Cheong San (Yoon Chan Young), Ohn Jo (Park Ji Hoo), Nam Ra (Cho Yi Hyun), Soo Hyuk (Park Solomon), and Gwi Nam (Yoo In Soo) had to get out of there. School while protecting themselves from contracting a virus that can turn them into zombies.
                        </Card.Text>
                        <Card.Text className="text-left">2022</Card.Text>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark movieImage">
                        <Image 
                            src={getsOutAliveImage} 
                            alt="Anne+ Movies" 
                            className="images"
                        />
                        <div className="p-2 m-1 text-white">
                        <Card.Title className="text-center">No One Gets Out Alive</Card.Title>
                        <Card.Text className="text-left">
                        The story opens with a woman who is in a pitch dark room receiving a phone call from her cellular. But suddenly, a screeching sound sounded quite loud from outside the room. As soon as this woman approached the source of the sound, she was pulled by a terrible creature that destroyed her.
                        </Card.Text>
                        <Card.Text className="text-left">2021</Card.Text>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark movieImage">
                        <Image 
                            src={insideyourhouseImage} 
                            alt="Anne+ Movies" 
                            className="images"
                        />
                        <div className="p-2 m-1 text-white">
                        <Card.Title className="text-center">There Is Someone Inside Your House</Card.Title>
                        <Card.Text className="text-left">
                        Tells about a teenager named Makani. He recently moved house after his parents' divorce. Makani attended Osborne High, as a teenager he had many friends and started a relationship with Ollie Larsson. But unfortunately the relationship did not last long and ended without clarity.
                        </Card.Text>
                        <Card.Text className="text-left">2021</Card.Text>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark movieImage">
                        <Image 
                            src={silentseaImage} 
                            alt="Anne+ Movies" 
                            className="images"
                        />
                        <div className="p-2 m-1 text-white">
                        <Card.Title className="text-center">The Silent Sea</Card.Title>
                        <Card.Text className="text-left">
                        Tells about a teenager named Makani. He recently moved house after his parents' divorce. Makani attended Osborne High, as a teenager he had many friends and started a relationship with Ollie Larsson. But unfortunately the relationship did not last long and ended without clarity.
                        </Card.Text>
                        <Card.Text className="text-left">2021</Card.Text>
                        </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default horror