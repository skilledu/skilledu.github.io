import React from 'react';

// Helper to check if a string is an image URL
const isImageUrl = (url) => {
  if (typeof url !== 'string') return false;
  return url.match(/\.(jpeg|jpg|gif|png|webp)$/i) != null || url.includes('source.unsplash.com') || url.includes('image');
};

const DynamicRenderer = ({ data }) => {
  if (data === null || data === undefined) return null;

  // Render Image directly if the data itself is an image URL
  if (typeof data === 'string' && isImageUrl(data)) {
    return <img src={data} alt="API Result" className="dynamic-image" />;
  }

  // Primitive types
  if (typeof data !== 'object') {
    return <span className="dynamic-primitive">{String(data)}</span>;
  }

  // Array of Objects -> Data Table
  if (Array.isArray(data)) {
    if (data.length === 0) return <p>Empty Array</p>;
    
    // If it's an array of primitives, just list them
    if (typeof data[0] !== 'object') {
      return (
        <ul className="dynamic-list">
          {data.map((item, index) => <li key={index}>{String(item)}</li>)}
        </ul>
      );
    }

    // Array of Objects
    const keys = Array.from(new Set(data.flatMap(Object.keys)));
    return (
      <div className="table-responsive">
        <table className="dynamic-table">
          <thead>
            <tr>
              {keys.map(key => <th key={key}>{key}</th>)}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i}>
                {keys.map(key => (
                  <td key={key}>
                    {typeof row[key] === 'object' ? JSON.stringify(row[key]) : 
                     (typeof row[key] === 'string' && isImageUrl(row[key]) ? <img src={row[key]} alt="img" className="dynamic-thumb" /> : String(row[key]))}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  // Single Object -> Key-Value Cards
  return (
    <div className="dynamic-object">
      {Object.entries(data).map(([key, value]) => (
        <div key={key} className="dynamic-kv-row">
          <span className="dynamic-key">{key}:</span>
          <span className="dynamic-value">
            {typeof value === 'object' ? (
              <DynamicRenderer data={value} />
            ) : (
              typeof value === 'string' && isImageUrl(value) ? <img src={value} alt="img" className="dynamic-image" /> : String(value)
            )}
          </span>
        </div>
      ))}
    </div>
  );
};

export default DynamicRenderer;
