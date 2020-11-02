// DATA
const courses = [
  {
    section: 'INF310',
    title: 'Modern JavaScript',
    instructor: 'Mikov',
    department: 'INF',
    credits: 1,
  },
  {
    section: 'INF240',
    title: 'Website Development',
    instructor: 'Dimitrov',
    department: 'INF',
    credits: 3,
  },
  {
    section: 'INF280',
    title: 'Database Systems',
    instructor: 'Christozov',
    department: 'INF',
    credits: 3,
  },
  {
    section: 'MAT104',
    title: 'Calculus II',
    instructor: 'Dalakov',
    department: 'MAT',
    credits: 3,
  },
  {
    section: 'COS221',
    title: 'Fundamental Data Structures',
    instructor: 'Christozov',
    department: 'COS',
    credits: 3,
  },
  {
    section: 'BUS260',
    title: 'Marketing',
    instructor: 'Petkov',
    department: 'BUS',
    credits: 3,
  },
  {
    section: 'BUS300',
    title: 'Business Ethics',
    instructor: 'Schwartz',
    department: 'BUS',
    credits: 4,
  },
  {
    section: 'BUS220',
    title: 'Financial Accounting',
    instructor: 'Cleary',
    department: 'BUS',
    credits: 3,
  },
  {
    section: 'BUS448',
    title: 'Strategic Management',
    instructor: 'Pantelides',
    department: 'BUS',
    credits: 3,
  },
  {
    section: 'THR130',
    title: 'Beginning Acting',
    instructor: 'Delchev',
    department: 'FAR',
    credits: 3,
  },
  {
    section: 'ENG205',
    title: 'Creative Writing',
    instructor: 'Cohen',
    department: 'ENG',
    credits: 4,
  },
];

const students = [
  {
    name: 'Adam Banff',
    standing: 'Junior',
    courses: ['INF240', 'BUS220', 'ENG205']
  },
  {
    name: 'Betty Cahn',
    standing: 'Senior',
    courses: ['INF280', 'COS221', 'INF310']
  },
  {
    name: 'Chisto Dotev',
    standing: 'Senior',
    courses: ['BUS220', 'BUS448', 'THR130']
  },
  {
    name: 'Dani Emerson',
    standing: 'Sophomore',
    courses: ['ENG205', 'THR130', 'INF310']
  },
  {
    name: 'Emy Fang',
    standing: 'Senior',
    courses: ['BUS300', 'BUS260', 'BUS448']
  },
  {
    name: 'Filip Gomez',
    standing: 'Junior',
    courses: ['COS221', 'INF240']
  },
  {
    name: 'Gergana Harris',
    standing: 'Senior',
    courses: ['BUS448', 'ENG205', 'THR130']
  },
  {
    name: 'Harry Insman',
    standing: 'Senior',
    courses: ['INF310', 'ENG205', 'THR130']
  },
  {
    name: 'Iliana Johnes',
    standing: 'Sophomore',
    courses: ['BUS260', 'BUS300', 'ENG205']
  },
  {
    name: 'Jane Kelly',
    standing: 'Sophomore',
    courses: ['BUS220', 'BUS260', 'THR130']
  }
];

// SAMPLE CODE
// Question: How many students are there in each of the classes?
function getStudentsPerCourse() { // define a function that answers the question
  const studentsPerCourse = {}; // define an object that will be used as a dictionary data structure to keep the results
  for (let student of students) { // go through the list of all students
    for (let course of student.courses) { // for each student go through the list of the courses they are enrolled in
      if (!studentsPerCourse[course]) { 
        studentsPerCourse[course] = 0; // if the course is not present in the result dictionary - initialize it to 0
      }
    
      studentsPerCourse[course] += 1; // increment the number of students in the course to include the current student
    }
  }
  return studentsPerCourse; // return the resulting dictionary object
}

/*-----------------------------------------------------------------------------------------------------------------------------------------*/

// Question 1: How many students are there per standing (freshman, sophomore, etc)?

function getStudentsPerStanding(){
  const uniqueStandings = students.map(student => student.standing); //map through all standings

   // initialize answer object by setting all department count to 0
     const studentsPerCourse = {}; 
      uniqueStandings.map(studentStanding => studentsPerCourse[studentStanding] = 0);
  // iterate the studentsPerCourse and add +1 for every occurance
      students.map(studentStanding => {
          let standing = studentStanding.standing;
            studentsPerCourse[standing] += 1;
          });
      return studentsPerCourse;
  };

// Question 2: How many courses are there per department?

function getCoursesPerDepartment(){
  const uniqueCourses = courses.map(course => course.department); //map through all departments in courses
// initialize answer object by setting all department count to 0
  const coursesPerDep ={};
  uniqueCourses.map(depCourses => coursesPerDep[depCourses] = 0)
// iterate the studentsPerCourse and add +1 for every occurance
  courses.map(course => {
    let departmentCourses = course.department;
    coursesPerDep[departmentCourses] += 1;
    });
  return coursesPerDep;
}

// Question 3: How many students are in each department
function getStudentsPerDepartment() {
  const uniqueDepartments = courses.map(course => course.department) // map through all courses and return the departments, result is array
    .filter((value, index, self) => self.indexOf(value) === index); // filter array of all departments to only include unique ones
  
  // initialize answer object by setting all department count to 0
  const studentsPerDepartment = {};
  uniqueDepartments.map(department => studentsPerDepartment[department] = 0);
  // map through all of the students
  students.map(student => {
    const studentCourses = student.courses;
    // iterate the studentCourses and add +1 for every occurance
    studentCourses.map(course => {
      studentsPerDepartment[sliceDepartmentFromCourseCode(course)] += 1;
    })
  });
  return studentsPerDepartment;
};

function sliceDepartmentFromCourseCode(courseCode) {
  if (courseCode.length !== 6) throw new Error(`This is most likely not a course: ${courseCode}`)
  let department = courseCode.slice(0,3);
  // handle special cases like THR being a part of the FAR :/
  if (department === 'THR') department = 'FAR';
  return department;
}

// Question 4: How many students does each professor instruct

function getStudentsPerInstructor() {
  const uniqueInstructors = courses.map(course => course.instructor) // map through all courses and return the instructors, result is array
    .filter((value, index, self) => self.indexOf(value) === index);
  
  const studentsPerInstructor = {};
  uniqueInstructors.map(instructor => studentsPerInstructor[instructor] = 0);

  // map through all of the students
  students.map(student => {
    const studentCourses = student.courses;
    // iterate the studentCourses and add +1 for every occurance
    studentCourses.map(course => {
      studentsPerInstructor[getCourseInstructor(course)] += 1;
    });
  });
  return studentsPerInstructor;
};

function getCourseInstructor(course) {
  // assuming a 1 to 1 course <-> professor ratio
  // COS310 is not defined in the courses array, but is present in Filip Gomez 
  return courses.filter(el => el.section === course)[0].instructor;
}

// Question 5: Which course has the most students in it

function getCourseWithMostStudents() {
  const studentsPerCourse = getStudentsPerCourse(); // use getStudentsPerCourse() function from sample code
  return Object.keys(studentsPerCourse).reduce((a, b) => studentsPerCourse[a] > studentsPerCourse[b] ? a : b); //return the object keys, check which course has most students, ternary operator
}

// Question 6: Which course has the least students in it

function getCourseWithLeastStudents() {
  const studentsPerCourse = getStudentsPerCourse();  // use getStudentsPerCourse() function from sample code
  return Object.keys(studentsPerCourse).reduce((a, b) => studentsPerCourse[a] < studentsPerCourse[b] ? a : b); //return the object keys, check which course has least students,ternary operator
}

// Question 7: Which student has the most credits

//return the students name with the credits from the courses
function getStudentWithMostCredits() {
  const studentCredits = students.map(student => {
    return {
      student: student.name,
      credits: calculateStudentCredits(student)
    }
  });
  const studentWithMostCredits = studentCredits.reduce((acc, curr) => acc.credits > curr.credits ? acc : curr);
  return studentWithMostCredits.student;
}
//Return credits for course
function getCourseCredits(course) {
  return courses.filter(el => el.section === course)[0].credits; 
}
//calculate the students credits and return the result
function calculateStudentCredits(student) {
  const { courses } = student;
  return courses.reduce((acc, course) => {
    return acc + getCourseCredits(course); 
  }, 0);
}

// Question 8: Which is the major of every student

//map through all students, get departments and reduce, returns result
function getStudentMajors() {
  return students.map(student => {
    const departments = student.courses.map(course => sliceDepartmentFromCourseCode(course)); //use sliceDepartmentFromCourseCode() from before
    const reducedDepartments = departments.reduce((acc, curr) => {
      acc[curr] ? acc[curr]++ : acc[curr] = 1;
      return acc;
    }, {});
    //Get major with object keys,reduce and ternary, check reduced departments, save to object and properties, return the students name and major
    const major = Object.keys(reducedDepartments).reduce((a, b) => reducedDepartments[a] > reducedDepartments[b] ? a : b);
    if (reducedDepartments[major] === 1) return {
      name: student.name,
      major: 'Cannot determine'
    }
    return {
      name: student.name,
      major
    }
  });
}

// Question 9: Which students are taking courses in the ENG department

function getStudentsInEngDepartment() {
  // map through all student courses, re-use fuction to get first 3 characters, returns index/number of students taking ENG  
  return students.filter(student => {
    const departments = student.courses.map(course => sliceDepartmentFromCourseCode(course)); 
    return departments.indexOf('ENG') > 0;
  }).map(({ name }) => name);
}

//Log all of the answers

console.log(`Students per standing: ${JSON.stringify(getStudentsPerStanding())}`);
console.log(`Courses in department: ${JSON.stringify(getCoursesPerDepartment())}`);
console.log(`Students per course: ${JSON.stringify(getStudentsPerCourse())}`);
console.log(`Students per department: ${JSON.stringify(getStudentsPerDepartment())}`);
console.log(`Students per instructor: ${JSON.stringify(getStudentsPerInstructor())}`);
console.log(`Course with most students: ${JSON.stringify(getCourseWithMostStudents())}`);
console.log(`Course with least students: ${JSON.stringify(getCourseWithLeastStudents())}`);
console.log(`Student with most credits: ${JSON.stringify(getStudentWithMostCredits())}`);
console.log(`Student majors: ${JSON.stringify(getStudentMajors())}`);
console.log(`Students in ENG: ${JSON.stringify(getStudentsInEngDepartment())}`);
