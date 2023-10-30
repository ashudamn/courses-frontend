import { useParams } from "react-router-dom";
import styles from "../../styles/courseDetails.module.css";
import { useEffect, useState } from "react";
import CourseService from "../../services/courses.service";
import { CoursesInterface } from "../../models/CoursesInterface";

function CourseDetails(){
    let params=useParams();
    const [course,setCourse]=useState<CoursesInterface>();
    useEffect(()=>{
        CourseService.getCourseById(params.id).then(response=>{
            setCourse(response.data);
        }).catch(error=>{
            console.log(error);
        });
    },[]);
    return (<>
            {course && <div className={styles.border_and_margin}>
                <h3>Course ID</h3>
                <p>{course.courseId}</p>
            </div>
            }
    </>)
}

export default CourseDetails;