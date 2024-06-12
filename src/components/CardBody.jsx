import PropTypes from "prop-types";

// Компонент CardBody, который представляет собой тело карточки.
// Он принимает свойство (prop) children.
export default function CardBody({ children }) {
  // Возвращает div с классом "card-body", содержащий дочерние элементы,
  // переданные через props.
  return <div className="card-body">{children}</div>;
}

CardBody.propTypes = {
  children: PropTypes.node.isRequired,
};
