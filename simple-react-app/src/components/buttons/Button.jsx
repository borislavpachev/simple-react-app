import PropTypes from 'prop-types';

export default function Button({
  onClick,
  type = 'button',
  disabled = false,
  className,
  children,
  ...props
}) {
  return (
    <button
      className={`${className}
       hover:bg-slate-700 disabled:bg-gray-100 disabled:text-gray-500 disabled:border-gray-300 disabled:cursor-not-allowed"
        border-orange-500 border-2 rounded-lg transition-colors ease-in duration-300
        `}
      onClick={onClick}
      type={type}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.any,
};
