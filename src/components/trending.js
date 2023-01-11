import { useEffect, useState } from "react"
import { Card, Container, Row, Col, Image } from "react-bootstrap"
import anneImage from "../assets/images/trending/anne.png"
import archiveImage from "../assets/images/trending/archive.png"
import murdervileImage from "../assets/images/trending/murdervile.png"
import tinderImage from "../assets/images/trending/tinder.png"
import axios from "axios"

const Trending = () => {
    const [movies , setMovies] = useState ([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/trending/all/day`, {
            params: {
                api_key: process.env.REACT_APP_TMDB_KEY
            }
        }).then((response) => {
            setMovies(response.data.results)
        })
    }, [])



    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white">TRENDING MOVIES</h1>
                <br />
                <Row>
                    {movies.map((result, index) => {
                        return (
                    <Col md={4} className="movieWrapper" id="trending" key={index}>
                        <Card className="bg-dark movieImage">
                        <Image 
                            src={`${process.env.REACT_APP_IMG_URL}/${result.poster_path}`} 
                            alt="testing"
                            className="images"
                        />
                        <div className="p-2 m-1 text-white">
                        <Card.Title className="text-center">{result.title}</Card.Title>
                        <Card.Text className="text-left">
                        {result.overview}
                        </Card.Text>
                        <Card.Text className="text-left">{result.release_date}</Card.Text>
                        </div>
                        </Card>
                    </Col> ) 
                    })}
                </Row>
            </Container>
            
        </div>
    )
}

export default Trending