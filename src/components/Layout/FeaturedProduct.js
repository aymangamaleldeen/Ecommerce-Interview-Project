import React , {useContext} from "react";
import data from "../../data";
import styled from "styled-components";
import CartContext from "../../Store/CartContextProvider";

const Container = styled.div`
margin-top: 6rem;
width: 97%;
border:3px solid maroon;

`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 3%;
`;
const AddTOCartButton = styled.button`
  width: 200px;
  height: 70px;
  color: white;
  background: black;
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover,
  &:active {
    color: black;
    background: white;
  }
`;
const Title = styled.h2``;

const ImageWrapper = styled.div`
  max-width: 1290px;
  height: 553px;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  padding: 0 3%;
  object-fit: cover;

`;
const FeaturedFlag = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 3%;
  background-color: white;
  color: black;
  font-size: 2rem;
`;
const DetailWrapper = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  border: 3px solid green;

  @media (max-width: 750px) {
    flex-direction: column;

  }
`;
const LeftDetails = styled.div`
  margin-right: 10%;
  order: 0;

  @media (max-width: 750px) {
    order:2;
  }
`;
const RightDetails = styled.div`
  order: 1;
`;
const ImageGroup = styled.div`
display: flex;

`;
const SmallImgWrapper = styled.div`
width: 117px;
height: 147px;
`;

const FeaturedProduct = () => {
  const { products } = data;
  const featuredproduct = products[24];
  const ctx = useContext(CartContext);

  return (
    <Container>
      <TitleWrapper>
        <Title> {featuredproduct.name}</Title>
        <AddTOCartButton onClick={() => ctx.addItem(featuredproduct)}>
          ADD TO CART
        </AddTOCartButton>
      </TitleWrapper>
      <ImageWrapper>
        <Image
          src={featuredproduct.image.src}
          alt={featuredproduct.image.alt}
        />
        <FeaturedFlag> Featured </FeaturedFlag>
      </ImageWrapper>
      <DetailWrapper>
        <LeftDetails>
          <h3> Materials people also use</h3>
          <ImageGroup>
            <SmallImgWrapper>
              <Image
                src={featuredproduct.details.recommendations[0].src}
                alt={featuredproduct.details.recommendations[0].alt}
              />
            </SmallImgWrapper>
            <SmallImgWrapper>
              <Image
                src={featuredproduct.details.recommendations[1].src}
                alt={featuredproduct.details.recommendations[1].alt}
              />
            </SmallImgWrapper>
            <SmallImgWrapper>
              <Image
                src={featuredproduct.details.recommendations[2].src}
                alt={featuredproduct.details.recommendations[2].alt}
              />
            </SmallImgWrapper>
          </ImageGroup>
          <div>
            <h3> Details</h3>
            <p> Weight:{featuredproduct.details.weight} g/m2</p>
            <p> Thickness:{featuredproduct.details.thickness} cm</p>
          </div>
        </LeftDetails>
        <RightDetails>
          <h3> About Recycled Plastic</h3>
          <h4>{featuredproduct.category}</h4>
          <p>
            Plastic recycling is the reprocessing of plastic waste into new and
            useful products. When performed correctly, this can reduce
            dependence on landfill, conserve resources and protect the
            environment from plastic pollution and greenhouse gas emissions.
            Although recycling rates are increasing, they lag behind those of
            other recoverable materials, such as aluminum, glass and paper. The
            global recycling rate in 2015 was 19.5%, while 25.5% was incinerated
            and the remaining 55% disposed of to landfill. Since the beginning
            of plastic production in the 20th century, until 2015, the world has
            produced some 6.3 billion tonnes of plastic waste, only 9% of which
            has been recycled, and only ~1% has been recycled more than once.[6]
          </p>
        </RightDetails>
      </DetailWrapper>
    </Container>
  );
};

export default FeaturedProduct;
