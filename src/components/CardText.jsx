import PropTypes from "prop-types";

// Компонент CardText, который представляет собой текст карточки.
// Он принимает свойство (prop) text.
export default function CardText({ text }) {
  // Возвращает p с классом "card-text", содержащий текст, переданный через props.
  return <p className="card-text">{text}</p>;
}

CardText.propTypes = {
  text: PropTypes.string.isRequired,
};
