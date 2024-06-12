import PropTypes from "prop-types";

// Компонент CardImage, который представляет собой изображение карточки.
// Он принимает свойства (props) src и alt.
export default function CardImage({ src, alt }) {
  // Возвращает img с классом "card-img-top" и атрибутами src и alt, переданными через props.
  return (
    <div className="img-container">
      <img src={src} alt={alt} className="card-img-top" />
    </div>
  );
}

CardImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};
