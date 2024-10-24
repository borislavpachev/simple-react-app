import PropTypes from 'prop-types';

export default function AppLayout({ children }) {
  return (
    <main className="min-h-screen flex flex-col md:flex-row p-10 md:p-20">{children}</main>
  );
}

AppLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
