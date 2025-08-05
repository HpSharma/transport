export const AddButtons = ({ children, ...props  }) => {
  const buttonStyle = {
    height: '48px',
    minWidth: '48px',
    padding: '0 16px',
    borderRadius: '6px',
    backgroundColor: '#000',
    color: '#fff',
    border: '1px solid #000',
    fontWeight: 600,
    fontSize: '16px',
    fontFamily: 'Arial, sans-serif', // Try Arial first, fallback to generic sans-serif
    letterSpacing: '0.5px',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease, border-color 0.2s ease',
  };

  const hoverStyle = {
    backgroundColor: '#4c4c4c',
    borderColor: '#fffff',
  };

  return (
    <button
      style={buttonStyle}
      onMouseOver={(e) => Object.assign(e.currentTarget.style, hoverStyle)}
      onMouseOut={(e) => Object.assign(e.currentTarget.style, buttonStyle)}
      {...props}
    >
      {children}
    </button>
  );
};
