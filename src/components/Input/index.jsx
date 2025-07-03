import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Style.module.scss';



export const TextInput = (props) => {

  const {
    hasError = false,
    helperText,
    label,
    icon,
    required,
    value,
    placeholder = "Enter text",
    type = "text",
    onChange } = props;
  return (
    <div className={styles.inputContainer}>
      <label>{label} <span>{required && "*"}</span></label>
      <input
        className={`${styles.textInput} ${hasError && styles.borderRed} ${icon && styles.pr25}`}
        type={type}
        value={value}
        placeholder={placeholder}

        onChange={(e) => onChange(e.target.value)} />
      {icon && <FontAwesomeIcon icon={icon} />}

      <span className={`${hasError && styles.colorRed}`}>{helperText}</span>
    </div>
  )
}

// export const TextAreaInput = (props) => {
//   const {
//     hasError = false,
//     helperText,
//     label,
//     required,
//     value,
//     placeholder = "Enter text",
//     onChange } = props;
//   return (
//     <div className={styles.inputContainer}>
//       <label>{label} <span>{required && "*"}</span></label>
//       <textarea rows="3"
//         className={`${styles.textArea} ${hasError && styles.borderRed}`}
//         value={value}
//         placeholder={placeholder}

//         onChange={(e) => onChange(e.target.value)} />
//       <span className={`${hasError && styles.colorRed}`}>{helperText}</span>
//     </div>
//   )
// }

// export const Button = (props) => {
//   const {

//     label,
//     onClick } = props;

//   return (
//     <div className={styles.buttonContainer}>
//       <button className={styles.button} onClick={onClick}>{label}</button>
//     </div>
//   )
// }


