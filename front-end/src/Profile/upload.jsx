// import React from 'react';
// import 'react-dropzone-uploader/dist/styles.css'
// import Dropzone from 'react-dropzone-uploader'
// import { getDroppedOrSelectedFiles } from 'html5-file-selector'

// const FileUploadComponent = () => {
//     const fileParams = ({ meta }) => {
//         return { url: 'https://httpbin.org/post' }
//     }
//     const onFileChange = ({ meta, file }, status) => { 
//         console.log(status, meta, file) 
//     }
//     const onSubmit = (files, allFiles) => {
//         allFiles.forEach(f => f.remove())
//     }
//     const getFilesFromEvent = e => {
//         return new Promise(resolve => {
//             getDroppedOrSelectedFiles(e).then(chosenFiles => {
//                 resolve(chosenFiles.map(f => f.fileObject))
//             })
//         })
//     }
//     const selectFileInput = ({ accept, onFiles, files, getFilesFromEvent }) => {
//         const textMsg = files.length > 0 ? 'Upload Again' : 'Select Files'
//         return (
//             <label className="btn btn-danger mt-4">
//                 {textMsg}
//                 <input
//                     style={{ display: 'none',width:500,height:500 }}
//                     type="file"
//                     accept={accept}
//                     multiple
//                     onChange={e => {
//                         getFilesFromEvent(e).then(chosenFiles => {
//                             onFiles(chosenFiles)
//                             console.log(chosenFiles)
//                         })
//                     }}
//                 />
//             </label>
//         )
//     }
//     return (
//         <Dropzone
//             // onSubmit={onSubmit}
//             onChangeStatus={onFileChange}
//             InputComponent={selectFileInput}
//             // getUploadParams={fileParams}
//             getFilesFromEvent={getFilesFromEvent}
//             accept="image/*,audio/*,video/*"
//             maxFiles={1}
//             // inputContent="Drop A File"
//             styles={{
//                 dropzone: { width:200, height: 200 },
//                 // dropzoneActive: { borderColor: 'green' },
//             }}            
//         />
//     );
// };
// export default FileUploadComponent;



import React,{UseState} from 'react'
import { InputText } from 'primereact/inputtext';
import { Dialog } from 'primereact/dialog';
import profile from "../Images/gallery-1.jpg"
        
export const upload = () => {
    const [image, setimage] = UseState("")
  return (
    <div className='profile_img text-center p-4'>
    <div className='flex flex-column justify-content-center align-items-center'>
    <img
    style={{
        width:"200px",
        height:"200px",
        borderRadius:"50%",
        objectFit:"cover",
        border:'4px solid green',
    }} src={profile} alt=""/>

        <InputText type='file'
            accept='/image/*'
            onChange={(event)=>{
                const file=event.target.files[0];
                if(file && file.type.substring(0,5)==="image"){
                    setimage(file)}
                else{
                    setimage(null)
                }
            }}

        />
    </div>

    </div>
  )
}
