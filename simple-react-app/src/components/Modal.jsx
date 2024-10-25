import PropTypes from 'prop-types';

export default function Modal({ open, close, children }) {
  return (
    <div
      onClick={close}
      className={`fixed inset-0 flex justify-center items-center z-50 
    transition-colors ${open ? 'visible bg-black/55' : 'invisible'}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-[95%] h-[95%] md:max-w-xl rounded-3xl flex
           bg-slate-700 text-white text-xl overflow-auto
        items-center justify-center"
      >
        <button onClick={close} className="absolute top-0 right-0 m-3 text-2xl">
          ❌
        </button>
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  open: PropTypes.bool,
  close: PropTypes.func,
  children: PropTypes.any,
};
