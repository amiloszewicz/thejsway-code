// https://github.com/bpesquet/thejsway/blob/master/manuscript/chapter10.md#student-results

const students = [
    {
      name: "Anna",
      sex: "f",
      grades: [4.5, 3.5, 4]
    },
    {
      name: "Dennis",
      sex: "m",
      country: "Germany",
      grades: [5, 1.5, 4]
    },
    {
      name: "Martha",
      sex: "f",
      grades: [5, 4, 2.5, 3]
    },
    {
      name: "Brock",
      sex: "m",
      grades: [4, 3, 2]
    }
  ];
  
  // Compute female student results
  const femaleStudentsResults = [];
  for (const student of students) {
    if (student.sex === "f") {
      let gradesSum = 0;
      for (const grade of student.grades) {
        gradesSum += grade;
      }
      const averageGrade = gradesSum / student.grades.length;
      femaleStudentsResults.push({
        name: student.name,
        avgGrade: averageGrade
      });
    }
  }
  
console.log(femaleStudentsResults);

const result = students
.filter(student => student.sex === 'f')
.map(student => {
return {
name: student.name,
avgGrade: student.grades.reduce((_sum, current) => _sum + current, 0) / student.grades.length
  };
})

console.log(result);
