import styles from './Processing.module.css'; 
import FileChooser from '../components/FileChooser';

const Processing = () => {
  return (
    <div id="processing_page" className={styles.processing_page}>
        <span id="textbox">HELLO WORLD</span>
        <div id="process_box" className={styles.process_box}>
            <div className={styles.dual_box}>
                <FileChooser />
                <FileChooser />
            </div>
            <button className={styles.submit_button}>Process</button>
        </div>
    </div>
  );
}

export default Processing;