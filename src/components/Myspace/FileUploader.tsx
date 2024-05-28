import React, { useState, useRef, useEffect } from 'react';
import { useFetchPresignedUrlQuery } from '@/api/fileApi';
import { useDispatch } from 'react-redux';
import { setFormMetaData } from '@/components/Myspace/formInfoBar/formInfoSlice';

const FileUploader = ({ tempImg }: { tempImg?: string[] }) => {
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>('');
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const { data: presignedData, isLoading: isPresignedLoading } =
    useFetchPresignedUrlQuery(fileName, {
      skip: !fileName,
    });

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files !== null) {
      const selectedFile = event.target.files[0];
      if (selectedFile && selectedFile.type.startsWith('image')) {
        setFile(selectedFile);
        setFileName(selectedFile.name);
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result as string);
        };
        reader.readAsDataURL(selectedFile);
      } else {
        setFile(null);
        setFileName('');
        setPreview(null);
      }
    }
  };

  useEffect(() => {
    if (tempImg && tempImg.length > 0) {
      setPreview(tempImg[0]);
      setFileName(tempImg[0].split('/').pop() || '');
    }
  }, [tempImg]);

  useEffect(() => {
    const uploadFile = async () => {
      if (!file || !presignedData) return;

      const presignedUrl = presignedData.path;

      try {
        const uploadResponse = await fetch(presignedUrl, {
          method: 'PUT',
          headers: {
            'Content-Type': file.type,
          },
          body: file,
        });

        if (uploadResponse.ok) {
          const fileUrl = presignedUrl.split('?')[0];
          dispatch(setFormMetaData({ image: [fileUrl] }));
        }
      } catch (err) {
        console.error('Error uploading file:', err);
      }
    };

    if (file && fileName && presignedData) {
      uploadFile();
    }
  }, [file, fileName, presignedData, dispatch]);

  const handleImgButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="flex flex-row gap-x-2">
      <div>
        {preview && (
          <img
            src={preview as string}
            alt="preview-img"
            className="object-contain w-6 h-6 max-w-6"
          />
        )}
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
      <button
        className="bg-blue-300 text-white px-3.5 py-1 rounded-lg flex items-center justify-center text-xs whitespace-nowrap"
        onClick={handleImgButtonClick}
        disabled={isPresignedLoading}
      >
        파일 선택하기
      </button>
      {fileName && (
        <span className="w-full truncate text-neutral-400">{fileName}</span>
      )}
    </div>
  );
};

export default FileUploader;
