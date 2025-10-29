"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    AdobeDC: any;
  }
}

interface AdobePdfViewerProps {
  source: string;
  fileName: string;
}

const AdobePdfViewer: React.FC<AdobePdfViewerProps> = ({ source, fileName }) => {
  const viewerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    const initAdobeViewer = () => {
      if (!window.AdobeDC) {
        console.error("AdobeDC SDK non disponible.");
        return;
      }

      const adobeDCView = new window.AdobeDC.View({
        clientId: "b65280b4df044404993963e66a5519d4",
        divId: "adobe-dc-view",
        locale: "fr-FR"
      });

      adobeDCView.previewFile(
        {
          content: {
            location: { url: source },
          },
          metaData: { fileName },
        },
        {
          showAnnotationTools: false,
          showDownloadPDF: true,          
        }
      );
    };

    if (!scriptLoadedRef.current) {
      const script = document.createElement("script");
      script.src = "https://acrobatservices.adobe.com/view-sdk/viewer.js";
      script.async = true;

      script.onload = () => {
        scriptLoadedRef.current = true;
        document.addEventListener("adobe_dc_view_sdk.ready", initAdobeViewer);
      };

      document.body.appendChild(script);

     /*  return () => {
        document.removeEventListener("adobe_dc_view_sdk.ready", initAdobeViewer);
      }; */
    } else {
      initAdobeViewer();
    }
  }, [source, fileName]);

  return <div id="adobe-dc-view" ref={viewerRef} className="w-full h-[700px] border border-[gray-400]" />;
};

export default AdobePdfViewer;
