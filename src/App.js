import { useEffect, useState } from "react";
import "./App.css";
import Courses from "./Courses";
import axios from "axios";
import Loading from './Loading'
function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
   const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3003/courses");
      setCourses(response.data);
      setLoading(false);
    } catch (error) {
      console.log("hata mesajı", error);
      setLoading(false);aasdasdas
    }
  };

  const deleteCourse = (id) =>{
 const afterDeletenCourse = courses.filter((course)=>
  course.id !== id 
 )
 setCourses(afterDeletenCourse)
  }
   
  useEffect(() => {
    fetchData();
    
  }, []);
  return (
    <div className="App">
      {loading ? <Loading></Loading> : <Courses  courses={courses} removeCourse={deleteCourse}></Courses>}
    </div>
  );
}

export default App;
