import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import horrorBooks from "../books/horror.json";
import romanceBooks from "../books/romance.json";
import scifiBooks from "../books/scifi.json";
import fantasyBooks from "../books/fantasy.json";
import historyBooks from "../books/history.json";

const AllTheBooks = () => {
  const booksByGenre = {
    Horror: horrorBooks.slice(0, 4),
    Romance: romanceBooks.slice(0, 4),
    SciFi: scifiBooks.slice(0, 4),
    Fantasy: fantasyBooks.slice(0, 4),
    History: historyBooks.slice(0, 4)
  };

  return (
    <Container className="my-4">
      {Object.keys(booksByGenre).map((genre) => (
        <div key={genre} className="mb-5">
          <h3>{genre}</h3>
          <Row>
            {booksByGenre[genre].map((book, index) => (
              <Col key={book.asin || index} xs={12} sm={6} md={4} lg={3} className="mb-4">
                <Card>
                  <Card.Img variant="top" src={book.img} alt={book.title || "Book cover"} />
                  <Card.Body>
                    <Card.Title>{book.title || "Untitled"}</Card.Title>
                    <p className="text-muted">{book.price ? `$${book.price}` : "Price not available"}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Container>
  );
};

export default AllTheBooks;
