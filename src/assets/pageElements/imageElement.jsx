import "../../index.css";

//Image Element component that displays images in astyling consistent with the rest of the app
const ImageElement = ({ src, title, alt }) => {
  return (
    <div className="media-container">
      <h3 className="media-title">{title}</h3>
      <img src={`images/${src}`} alt={alt} className="image-element" />
    </div>
  );
};

export default ImageElement;
