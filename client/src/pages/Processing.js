import styles from './Processing.module.css'; 
import FileChooser from '../components/FileChooser';
import LoadingIcon from '../components/LoadingIcon';

function Processing() {

  function passfile(x) {
    var file_input = document.getElementById("file_input_"+x.toString()).childNodes[1];
    var files = file_input.files
    if (files.length == 0) return;
    console.log(files);
    // var i 
    // var filesMat = []
    // for (i=0; i< files.length; i++){
    //           filesMat.push(files[i])
    // }
    // files = filesMat
    // passFile(files)
  }

  return (
    <div id="processing_page" className={styles.processing_page}>
        <span id="textbox">HELLO WORLD</span>
        <div id="process_box" className={styles.process_box}>
            <div className={styles.dual_box}>
                <FileChooser id="file_input_1" passFileFunc={()=>passfile(1)} />
                <FileChooser id="file_input_2" passFileFunc={()=>passfile(2)} />
            </div>
            <button className={styles.submit_button}>Process</button>
            {/* <LoadingIcon /> */}
        </div>
    </div>
  );
}

export default Processing;