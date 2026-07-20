import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const StructuredData = ({ data }) => {
  const items = Array.isArray(data) ? data : [data];
  return (
    <Helmet>
      {items.map((item, index) => (
        <script key={index} type='application/ld+json'>
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  );
};

StructuredData.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default StructuredData;
