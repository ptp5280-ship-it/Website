import React from 'react';
import ContentContainer from '../components/ContentContainer';

const CopyrightNotice = () => {
  return (
    <ContentContainer>
      <h1>Copyright Notice</h1>
      <p>
        Copyright © {new Date().getFullYear()} Peach Tree Plumbing. All rights
        reserved.
      </p>
      <p>
        The content of this website, including but not limited to the text,
        graphics, images, and other material, is protected by copyright and
        other intellectual property laws. You may not reproduce, distribute,
        modify, or create derivative works of any of the content without our
        prior written permission.
      </p>
    </ContentContainer>
  );
};

export default CopyrightNotice;
