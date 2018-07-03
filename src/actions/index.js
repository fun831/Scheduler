import { FETCH_COURSES } from './types';

function fetchCourses() {
    return {
        type: FETCH_COURSES,
        payload: [
            { 
                title: "Up and Running with Redis",
                description: "In this course you'll learn how to work with the....",
            },
            
            { 
                title: "HTML/CSS Bootcamp",
                description: "Learn HTML5 and CSS3 from scratch, starting with....",
            },

            { 
                title: "UX for developers",
                description: "In this course you'll learn how to work with the....",
            }

        ]
    }
}