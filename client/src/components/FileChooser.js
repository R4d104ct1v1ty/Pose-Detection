import styles from './FileChooser.module.css';

function FileChooser({id, passFileFunc}) {

  function getFile(){
    passFileFunc();
  }

  return (
    <div className={styles.file_chooser} id={id}>
        <br /><input type="file" onChange={()=>getFile()}></input>
        <button onClick={()=>getFile()}>CLICKETY</button>
    </div>
  );
}

export default FileChooser;