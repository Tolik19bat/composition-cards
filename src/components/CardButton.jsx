import PropTypes from "prop-types";

// Компонент CardButton, который представляет собой кнопку на карточке.
// Он принимает свойства (props) href и children.
export default function CardButton({ href, children }) {
  // Возвращает a (ссылку) с классом "btn btn-primary" и атрибутом href, переданными через props.
  // Текст кнопки передается через дочерние элементы (children).
  return (
    <a href={href} className="btn btn-primary">
      {children}
    </a>
  );
}

CardButton.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
