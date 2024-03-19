import React from "react";
 
const Course = ({ id, content, title, price,removeOneCourse }) => {
  return (
    <div className="card-item">
      <div className="card-header">
        <h2 className="card-title">{title}</h2>
        <h4 className="card-price">Fiyat: {price}Tl</h4>
      </div>
      <div className="card-footer">
        <p>{content}</p>
      </div>
      <div className="card-delete">
        <button onClick={()=>removeOneCourse(id)}   className="delete-button">Sil</button>
      </div>
    </div>
  );
};

export default Course;
