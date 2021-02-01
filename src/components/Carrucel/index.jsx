import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../Card";
import Subtitle from "../Subtitle";
import "./Style.scss";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
function CarrucelImg({ title, arrayItems }) {
  console.log(title, arrayItems);
  return (
    <div className="wrapperCarrusel">
      <section className="wrapperSection">
        <Subtitle title={title} />
      </section>
      <section className="wrapperCards">
        <Carousel responsive={responsive} infinite={true} itemClass="item">
          {arrayItems.map((item, index, key) => {
            return <Card item={item} key={key} id={index} />;
          })}
        </Carousel>
        ;
      </section>
    </div>
  );
}
export default CarrucelImg;
