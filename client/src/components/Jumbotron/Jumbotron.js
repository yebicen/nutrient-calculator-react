import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const JumbotronComponent = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Renovo Juicery</h1>
          <p className="lead">Keep healthy and keep knowledgable! Learn about your nutrition facts here!</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default JumbotronComponent;