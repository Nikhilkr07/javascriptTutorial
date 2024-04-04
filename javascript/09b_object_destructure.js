// Object destructure

const course = {
    courseName: "javaScript",
    coursPrice: 2000,
    courseInstructor: "hitesh"
}

// How to destructure a object see here

const {courseInstructor: instructor} = course;  //{} in {} brases we can perform destructuring

// console.log(courseInstructor);
console.log(instructor);