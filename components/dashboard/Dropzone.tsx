'use client'
import { cn } from '@/lib/utils'
import DropzoneComponent from 'react-dropzone'
const DropZone = () => {
  
  const maxSize = 20971520

  return (
<DropzoneComponent minSize={0} maxSize={maxSize} onDrop={acceptedFiles => console.log(acceptedFiles)}>
  {({getRootProps, 
  getInputProps,
  isDragActive,
  isDragReject,
  fileRejections
  
}) => {
  const isFileTooLarge = fileRejections.length > 0 && fileRejections[0].file.size > maxSize
  return (
    <section className='m-4'>
      <div {...getRootProps()}
      className={cn(
        "w-full h-52 flex justify-center p-5 border border-dashed rounded -lg text-center",
        isDragActive
        ? "bg-[#035FFE] text-white animate-pulse"
        : "bg-slate-100/50 dark:bg-slate-800/80 text-slate-400"
      )}
      >
        <input {...getInputProps()} />
        {!isDragActive && "Click here or drop a file to upload!"}
        {isDragActive && !isDragActive && "Drop to upload this file!"}
        {isFileTooLarge && (
          <div className='text-danger mt-2'>
            File is too large.
          </div>
        )}
      </div>
    </section>
  )
}
  
  }
</DropzoneComponent>
  )
}

export default DropZone