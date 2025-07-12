export const IconButtons = () => {
  const buttonStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#4a90e2',
    color: 'white',
    border: 'none',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'background-color 0.3s ease',
  };

  return <button style={buttonStyle}>SB</button>;
};

export const BadgeButton = () => {
  return <button>Badge Button</button>;
};
