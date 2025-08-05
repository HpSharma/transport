import { colors } from '@mui/material';

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

export const BadgeButton = ({ children, variant = 'primary', ...props }) => {
  const backgroundColors = {
    primary: '#4a90e2',  // Blue
    danger: '#e74c3c',   // Red
  };

  const badgebuttonstyle = {
    backgroundColor: backgroundColors[variant] || backgroundColors.primary,
    color: 'white',
    border: 'none',
    padding: '8px 12px',
    margin: '5px 0',
    cursor: 'pointer',
    borderRadius: '4px',
    transition: 'background-color 0.3s ease',
    opacity: props.disabled ? 0.6 : 1,
  };
  // console.log({ disabled });

  return (
    <button style={badgebuttonstyle} {...props}>
      {children}
    </button>
  )
};

// desgin audi buttons


