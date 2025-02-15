import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const CmsWrapperComponent = () => {
  return (
    <div className="woman-cms-wrapper">
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} lg={10}>
            <div className="cms-content">
              <h3>Lorem ipsum dolor sit amet consectetur</h3>
              <p>
                <strong>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non tristique
                  nibh.{' '}
                </strong>
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae lacus
                tellus. Duis consectetur risus id mattis vehicula. Duis eget nisl non metus
                ultricies mattis. Sed pellentesque venenatis velit, ut finibus turpis fermentum sit
                amet. Donec scelerisque dapibus condimentum. Sed ornare orci eu nisi porttitor
                aliquam.
              </p>
              <p>
                <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</strong>
              </p>
              <p>
                Nullam imperdiet efficitur tellus vitae gravida. Quisque eu erat molestie sapien
                blandit posuere id eu ex. Mauris ac turpis varius, pellentesque neque vel, dignissim
                leo. Curabitur elit ex, imperdiet non augue quis, sodales dapibus nulla. Donec ut
                gravida dui, sit amet congue purus.
              </p>
              <p>
                <strong>Donec metus tellus, consectetur id leo in, condimentum tempor enim.</strong>
              </p>
              <p>
                Donec blandit accumsan eros, et faucibus orci pretium sit amet. Praesent sit amet
                leo ligula. Praesent auctor venenatis dui, et feugiat erat tempus sit amet. Quisque
                vitae efficitur mi. Suspendisse maximus mauris ut leo tristique tincidunt. Nam
                aliquet tellus eros, eu fermentum quam scelerisque pulvinar.
              </p>
              <p>
                <strong>Aenean eu diam non justo tempor rhoncus.</strong>
              </p>
              <p>
                ultricies sit amet gravida eget, venenatis in elit. Sed cursus sodales mauris, quis
                porta ante varius quis. Morbi scelerisque leo id odio auctor gravida. Mauris feugiat
                vulputate orci, a vehicula est consectetur a. Aliquam suscipit, erat sit amet
                ultrices malesuada, dolor tellus ullamcorper ipsum,
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CmsWrapperComponent;
