'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import ReactMarkdown, { Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import MarkdownImage from './MarkdownImage.client';

// Define the type for the context value
type FirstImageContextType = [boolean, () => void];

// Create the context
const FirstImageContext = createContext<FirstImageContextType>([false, () => {}]);

// Define the props for the ImageRenderer component
interface ImageRendererProps {
  node?: any; // Set to any to bypass the complex type checking for the node prop
  src?: string;
  alt?: string;
}

const ImageRenderer: React.FC<ImageRendererProps> = ({ node, ...props }) => {
  const [isAlreadyFirstImageRendered, setAsFirstImage] = useContext(FirstImageContext);

  const imageUrl = (props.src as string) || '';
  const altText = (props.alt as string) || '';

  const width = node?.properties?.width ? Number(node.properties.width) : 600;
  const height = node?.properties?.height ? Number(node.properties.height) : 400;

  const isPriority = !isAlreadyFirstImageRendered;

  if (isPriority) {
    setAsFirstImage();
  }

  return (
    <MarkdownImage
      src={imageUrl}
      alt={altText}
      width={width}
      height={height}
      isPriority={isPriority}
    />
  );
};

const components: Components = {
  img: ImageRenderer,
};

type MarkdownProps = {
  content: string;
};

const Markdown: React.FC<MarkdownProps> = ({ content }) => {
  // Manage the state of whether the first image has been rendered
  const [firstImageRendered, setFirstImageRendered] = useState(false);

  // Memoize the function to mark the first image as rendered
  const markFirstImageRendered = useCallback(() => {
    setFirstImageRendered(true);
  }, []);

  return (
    <FirstImageContext.Provider value={[firstImageRendered, markFirstImageRendered]}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </FirstImageContext.Provider>
  );
};

export default Markdown;
