import PropTypes from "prop-types";

// Компонент CardTitle, который представляет собой заголовок карточки.
// Он принимает свойство (prop) title.
export default function CardTitle({ title }) {
  // Возвращает h5 с классом "card-title", содержащий текст заголовка, переданный через props.
  return <h5 className="card-title">{title}</h5>;
}

CardTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
