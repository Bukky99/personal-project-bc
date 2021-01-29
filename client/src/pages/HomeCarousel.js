import React from 'react';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer} from "mdbreact";

const HomeCarousel = () => {
    return (
        <div>
            <MDBContainer>
          <MDBCarousel
          activeItem={1}
          length={3}
          showControls={true}
          showIndicators={true}
          className="z-depth-1"
          >
            <MDBCarouselInner>
              <MDBCarouselItem itemId="1">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src="https://cms-cdn.thesolesupplier.co.uk/2020/10/jordan-6-singles-day-black_w900.jpg"
                    alt="Singles Day Air Jordan 6"
                  />
                  <MDBMask overlay="black-light" />
                </MDBView>
                <MDBCarouselCaption>
                  <h3 className="h3-responsive">Light Mast</h3>
                  <p>First Text</p>
                </MDBCarouselCaption>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
                <MDBView>
                  <img
                  className="d block w-100"
                  src="https://cms-cdn.thesolesupplier.co.uk/2020/09/jordan-4-fire-red-1_w720.jpg"
                  alt="Fire Red Air Jordan 4"
                  />
                  <MDBMask overlay="black-strong" />
                </MDBView>
                <MDBCarouselCaption>
                  <h3 className="h3-responsive">Strong mast</h3>
                  <p>Second text</p>
                </MDBCarouselCaption>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="3">
                <MDBView>
                  <img
                  className="d-block w-100"
                  src="https://cms-cdn.thesolesupplier.co.uk/2020/12/nike-air-force-1-pixel-grey-gold-chain_w720.jpg"
                  alt="Pixel Chain Gold Chain Nike Air Force 1"
                  />
                  <MDBMask overlay="black-slight" />
                </MDBView>
                <MDBCarouselCaption>
                  <h3 className="h3-responsive">Slight Mast</h3>
                  <p>Third text</p>
                </MDBCarouselCaption>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
        </MDBContainer>
        </div>
    );
};

export default HomeCarousel;