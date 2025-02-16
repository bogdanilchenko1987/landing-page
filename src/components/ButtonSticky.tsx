interface ButtonStickyProps {
  handleClick: () => void;
}

const ButtonSticky = ({ handleClick }: ButtonStickyProps) => {
  return (
    <button
      onClick={handleClick}
      className="fixed bottom-4 right-4 bg-cyan-900 text-white p-3 rounded-full shadow-lg hover:bg-cyan-800 transition-all"
    >
      ↑
    </button>
  );
};

export default ButtonSticky;
