import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { LazyImage } from '../about/About';
// Ensure this path is correct or replace with <img>

const Colors = ({ colors }) => {
  const [current, setCurrent] = useState(colors[0]?.id || 1);

  if (!Array.isArray(colors) || colors.length === 0) {
    return (
      <p className='py-8 text-center text-gray-500'>No color data available.</p>
    );
  }

  return (
    <div className='container flex flex-col items-center py-8 mx-auto mt-16 bg-gray-100 rounded-3xl'>
      {/* Show selected color image */}
      {colors.map((item) => (
        <LazyImage
          key={item.id}
          src={item.img}
          className={item.id === current ? 'mx-auto sm:h-80' : 'hidden'}
          alt={`Color variant ${item.id}`}
        />
      ))}

      {/* Color options */}
      <div className='flex flex-wrap items-center justify-center gap-3 mt-4'>
        {colors.map((item) => {
          const style = {
            background: item.bg || item.hex || '#ccc',
            border: item.border || 'none',
          };

          return (
            <p
              key={item.id}
              onClick={() => setCurrent(item.id)}
              className={`h-5 w-5 rounded-full cursor-pointer transition-transform duration-200 ${
                current === item.id ? 'animate-bounce scale-110' : ''
              }`}
              style={style}
              title={`Color ${item.id}`}
            />
          );
        })}
      </div>
    </div>
  );
};

Colors.propTypes = {
  colors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      hex: PropTypes.string,
      bg: PropTypes.string,
      border: PropTypes.string,
    })
  ).isRequired,
};

export default Colors;
