"use client";

import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import "@cyntler/react-doc-viewer/dist/index.css";

interface DocViewerProps {
  fileUrl: string;
}

const MyDocumentViewer: React.FC<DocViewerProps> = ({ fileUrl }) => {
  const documents = [
    { uri: fileUrl },
  ];

  return (
    <DocViewer
      documents={documents}
      pluginRenderers={DocViewerRenderers}
      initialActiveDocument={documents[0]}
      config={{
        header: {
          disableHeader: true,
        },
      }}
    />
  );
};

export default MyDocumentViewer;