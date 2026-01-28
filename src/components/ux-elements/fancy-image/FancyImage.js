import "./FancyImage.css";

const FancyImage = ({ image, altText }) => {
  return (
    <div className="fancy-image-wrapper">
      <div className="fancy-image-wrapper-box-top-left"></div>
      <div className="fancy-image-wrapper-box-bottom-right"></div>
      <div className="fancy-image">
        {" "}
        <img src={image} alt={altText} />
      </div>
    </div>
  );
};

export default FancyImage;
