import axios from "axios";
import { API, COURSES_ROUTE } from "../assets/constants";

class CourseService{
    static getAllCourses(){
        return axios.get(API+COURSES_ROUTE);
    }
    static getCourseById(id:string|undefined){
        return axios.get(API+COURSES_ROUTE+"/"+id);
    }
}

export default CourseService;