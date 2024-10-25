import PropTypes from 'prop-types';

export default function Form({ children }) {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex flex-col my-10">
      {children}
    </form>
  );
}

Form.propTypes = {
  children: PropTypes.any,
};
