import PropTypes from "prop-types";

// Компонент Card, который представляет собой общую структуру карточки.
// Он принимает свойства (props) children.
export default function Card({ children }) {
  // Возвращает div с классом "card" и стилем, переданным через props.
  return <div className="card">{children}</div>;
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
};
