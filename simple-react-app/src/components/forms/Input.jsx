import PropTypes from 'prop-types';

export default function Input({
  id = '',
  name = '',
  type = 'text',
  placeholder = '',
  autoComplete = 'off',
  value = '',
  onChange,
  className,
  ...props
}) {
  return (
    <input
      type={type}
      className={`${className} text-lg border p-3 rounded-lg text-black focus:outline-orange-500`}
      id={id}
      name={name}
      placeholder={placeholder}
      autoComplete={autoComplete}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  autoComplete: PropTypes.oneOf(['on', 'off']),
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};
