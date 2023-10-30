import { useEffect, useState } from "react";
import CourseService from "../../services/courses.service";
import { CoursesInterface } from "../../models/CoursesInterface";
import styles from "../../styles/dashboard.module.css";
import { useNavigate } from "react-router-dom";

function DashBoard(){
    const [courses,setCourses]=useState([]);
    const navigate=useNavigate();
    const headers = [
      { id: 1, name: "Id" },
      { id: 2, name: "Category" },
      { id: 3, name: "Title" },
      { id: 4, name: "Description" },
      { id: 5, name: "Details"}
    ];
    useEffect(()=>{
        CourseService.getAllCourses().then(response=>{
            console.log(response);
            let fetchedData=response.data;
            console.log(fetchedData);
            setCourses(fetchedData);
        }).catch(error=>{
            console.log(error);
        })
    },[]);
    
    function goToDetailsPage(id:number|undefined){
        console.log(id);
        navigate(`/coursedetails/${id}`);
    }
    function renderHeader(){
        return <tr>{headers.map(header=><td className={styles.td_padding_border+' '+styles.bold} key={header.id}>{header.name}</td>)}</tr>;
    }

    function renderCourses(){
        return courses.map((course:CoursesInterface)=>{
            return <tr key={course.courseId}>
                <td className={styles.td_padding_border}>{course.courseId}</td>
                <td className={styles.td_padding_border}>{course.category}</td>
                <td className={styles.td_padding_border}>{course.name}</td>
                <td className={styles.td_padding_border}>{course.description}</td>
                <td className={styles.td_padding_border}><button onClick={(event)=>{goToDetailsPage(course.courseId)}}>More Details</button></td>
            </tr>
        })
    }
    function renderTable(){
        return  courses && courses.length>0 && <div>
        <h2>Courses</h2>
        <table>
        <thead>
            {renderHeader()}
            </thead>
            <tbody>
                {renderCourses()}
            </tbody>
        </table>
    </div>;
    }
    return (
        <div>
            <h1>Dashboard</h1>
            {
               renderTable()
            }
            
        </div>
    );
}

export default DashBoard;