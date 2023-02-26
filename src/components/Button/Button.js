import styles from './Button.module.scss';

const Button = (props) =>{
   return (<div className={styles.button} button onClick={props.onClick}>{props.children}</div>);
};

export default Button;