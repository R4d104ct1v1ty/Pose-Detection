import styles from './Processing.module.css'; 

const Processing = () => {
  return (
    <div id="processing_page">
        <span id="textbox" className={styles.textbox}>HELLO WORLD</span>
        <div id="process_box" className={styles.process_box}>
            <div className={styles.dual_box}>
                <div className={styles.file_chooser}>
                    hihsi
                    <br /><input type="file"></input>
                </div>
                <div className={styles.file_chooser}>hihsi</div>
            </div>
            <button className={styles.submit_button}>Process</button>
        </div>
    </div>
  );
}

export default Processing;