import React from 'react';
import { Helmet } from 'react-helmet-async';

export function SEO({ title, description }) {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* End standard metadata tags */}
    </Helmet>
  );
}
