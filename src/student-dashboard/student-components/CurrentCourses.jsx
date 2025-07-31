import React from "react";
// import "./CurrentCourses.css";

const CurrentCourses = ({ data }) => {
  return (
    <div className="current-courses">
      <h3>Current Courses</h3>
      <div className="course-list">
        {data.map((course, index) => (
          <div className="course-card" key={index}>
            <h4>{course.name}</h4>
            <p><strong>Platform:</strong> {course.instructor}</p>
            <p><strong>Schedule:</strong> {course.schedule}</p>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${course.progress}% `}}
              ></div>
            </div>
            <p className="grade">Grade: <span>{course.grade}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentCourses;