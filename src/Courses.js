import React from "react";
import Course from "./Course";

const Courses = ({ courses ,removeCourse}) => {
 
    const total = courses.reduce((total,curent)=>{

        return total + Number(curent.price)
    },0)
    
 
  return (
    <div className="courses-main">

      <h2 className="course-title">Kurslarım</h2>
      <h3 style={{textAlign:'center'}}>Kurs Toplam Fiyat:{total} TL</h3>
      
      <div className="course">
        {courses.map((course, index) => {
         
          return <Course key={index} {...course} removeOneCourse={removeCourse} ></Course>;
        })}
      </div>
    </div>
  );
};

export default Courses;
