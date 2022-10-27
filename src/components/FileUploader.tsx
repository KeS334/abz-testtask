import React, {useRef, useState} from 'react';

interface FileUploaderProps {
    photo: File,
    maxSize: number,
    uploadingPhoto: (data: File) => void
}

const FileUploader = ({photo, maxSize, uploadingPhoto}:FileUploaderProps) => {

    const inputRef  = useRef<HTMLInputElement>(null);
    const [imageError, setImageError] = useState('');
    const uploadButtonClass = imageError?'upload-button__error':'';

    const handlePick = () =>{
        inputRef.current && inputRef.current.click();
    }

    const handleSelectPhoto = async (event: React.ChangeEvent<HTMLInputElement>) => {

        const size = maxSize; //size in MB
        const selectedFile = event.target.files && event.target.files[0]
        if(selectedFile){
            if(selectedFile && selectedFile.size > size * 2**20){
                setImageError('Your file is more then ' + size + 'MB')
            }else{
                setImageError('')
                return uploadingPhoto(selectedFile)
            }
        }
    }

    return (
            <div className={uploadButtonClass + " " + "form-block__upload-button upload-button"}>
                <div className="upload-button__container">
                    <div className="upload-button__button" onClick={handlePick}>Upload</div>
                    <div className="upload-button__label">
                        <p>{photo.name?photo.name: 'Upload your photo'}</p>
                    </div>
                </div>
                {imageError && <div className="upload-button__error-text">{imageError}</div>}
                <input
                    type="file"
                    ref={inputRef}
                    className="upload-button__origin"
                    onChange={handleSelectPhoto}
                    accept=".jpg,.jpeg"
                    required
                />
            </div>
    );
};

export default FileUploader;
