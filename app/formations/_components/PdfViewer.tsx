"use client";

import { useState, useEffect, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

interface PdfViewerProps {
  fileUrl: string;
  fileTitle: string
}

const PdfViewer: React.FC<PdfViewerProps> = ({ fileUrl, fileTitle }) => {
  const [numPages, setNumPages] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [pageWidth, setPageWidth] = useState<number>(600); // default width

  useEffect(() => {
    function updateWidth() {
      if (containerRef.current) {
        const width = containerRef.current.clientWidth;
        setPageWidth(width - 32);
      }
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div className="w-full md:max-w-4xl mx-auto px-4">
      <h2 className="text-xl font-semibold text-center bg-gray-300 text-gray-600">
        {fileTitle}
      </h2>

      <div
        ref={containerRef}
        className="h-[520px] md:h-[80vh] border border-gray-300 py-4 overflow-y-auto overflow-x-hidden"
      >
        <Document file={fileUrl} onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from({ length: numPages }, (_, index) => (
            <div key={`wrapper_${index}`} className="mb-8">
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                width={pageWidth}
                className="shadow-sm shadow-gray-400"
              />
            </div>
          ))}
        </Document>
      </div>
    </div>
  );
};

export default PdfViewer;
