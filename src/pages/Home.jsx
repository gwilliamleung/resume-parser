import React, { useState } from 'react'
import { Document, Page } from 'react-pdf';


const Home = () => {
  const [file, setFile] = useState(null);
  const [pdfText, setPdfText] = useState('');
  const [error, setError] = useState(null);


  const handleFileChange = e => {
    setFile(e.target.files[0]);
    console.log(file)
  };

  const onLoadError = (error) => {
    console.error('Error while loading the file:', error);
    setError(error);
}

  return (
    <div className="bg-blue-100 flex flex-wrap justify-center items-center h-screen ">
        <input type="file" onChange={handleFileChange} accept="application/pdf" />
      {file && (
        <Document
          file={file}
          onLoadSuccess={(pdf) => {
            pdf.getTextContent().then((textContent) => {
              setPdfText(textContent.items.map((item) => item.str).join(""));
            });
          }}
          onLoadError={onLoadError}
        >
          <Page pageNumber={1} />
        </Document>
      )}
      {pdfText && <div>{pdfText}</div>}
      {error && <div>Error loading the file: {error.message}</div>}
    </div>
  )
}

export default Home