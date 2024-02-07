import React from 'react';
import { useDropzone } from 'react-dropzone';

function Basic(props) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="container">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p className="caption-regular-4 h-[48px] rounded-[5px] border-[0.75px] border-[#CBCBCB] bg-shade-0 px-4 py-[10px] text-center text-sm text-stone-500 hover:border-primary-500">
          <span className="text-primary-500">Add File</span> or Drop files here
        </p>
      </div>
      <aside>
        <ul>{files}</ul>
      </aside>
    </section>
  );
}

export default Basic;
