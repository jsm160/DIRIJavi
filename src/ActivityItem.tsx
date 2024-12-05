import React from 'react';

interface ActivityItemProps {
    nombreImagen: string;
    alt: string;
    time: string;
    description: string;
}

const ActivityItem: React.FC<ActivityItemProps> = ({ nombreImagen, alt, time, description }) => {
  return (
    <div className="item">
      <div className="avatar">
      <img alt={alt} src={`/images/${nombreImagen}.jpg`} />
      </div>
      <span className="time">{time}</span>
      <p>{description}</p>
    </div>
  );
};

export default ActivityItem;
