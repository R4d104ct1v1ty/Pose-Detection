import styles from './FileChooser.module.css'; 

const FileChooser = () => {
  return (
    <div className={styles.file_chooser}>
        <br /><input type="file"></input>
    </div>
  );
}

export default FileChooser;