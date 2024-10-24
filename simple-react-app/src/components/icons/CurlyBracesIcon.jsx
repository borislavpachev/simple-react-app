import PropTypes from 'prop-types';

export default function CurlyBracesIcon({ size = 30 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke="#FFFFFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9.5 5H9a2 2 0 0 0-2 2v2c0 1-.6 3-3 3 1 0 3 .6 3 3v2a2 2 0 0 0 2 2h.5m5-14h.5a2 2 0 0 1 2 2v2c0 1 .6 3 3 3-1 0-3 .6-3 3v2a2 2 0 0 1-2 2h-.5"
      />
    </svg>
  );
}

CurlyBracesIcon.propTypes = {
  size: PropTypes.number,
};
