import "./Drawer.css";
import { VscChromeClose } from "react-icons/vsc";

import PropTypes from "prop-types";
export const Drawer = ({ isOpen, onClose, children }) => {
  const handleOverlayClick = (e) => {
    if (e.target.id === "drawer-overlay") {
      onClose();
    }
  };

  return (
    <>
      <div
        id="drawer-overlay"
        className={`fixed  inset-0 bg-black bg-opacity-50 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleOverlayClick}
      ></div>
      <div
        className={`fixed py-10 top-0 z-50 right-0 h-full w-full overflow-auto sm:w-1/2 md:w-1/2 lg:w-1/2 bg-white shadow-lg transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-0 right-0 mt-4 mr-4 text-gray-600"
        >
          <VscChromeClose />
        </button>
        <div className="p-4">{children}</div>
      </div>
    </>
  );
};
Drawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
