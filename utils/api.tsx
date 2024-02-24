import axios from 'axios';

// Make the HTTP request here
export async function fetchData(students: any[], assessments: any[], setStudents: Function) {
  try {
    const processedStudents = await Promise.all(students.map(async (student) => {
      const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://coderbyte.com/api/organization/candidates/${student.email}`, {
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_CODERBYTE_API_KEY}`,
        },
      });
      const userAssessments = await response.data.data.assessments;
      student.completed_2023_1 = assessments.every(assessment =>
        userAssessments.some((userAssessment: any) => userAssessment.test_id === assessment.id)
      );
      return student;
    }));
    setStudents(processedStudents);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};