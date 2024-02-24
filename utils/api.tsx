import axios from 'axios';

// Make the HTTP request here
export async function fetchData(students: any[], assessments: any[], setStudents: Function) {
  try {
    const processedStudents = await Promise.all(students.map(async (student) => {
      const response = await axios.get(`https://coderbyte.com/api/organization/candidates/${student.email}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_CODERBYTE_API_KEY}`,
        },
      });
      console.log(response);
      const result = await response.data;
      student.completed_2023_1 = assessments.every(assessment =>
        result.data.some((userAssessment: any) => userAssessment.test_id === assessment.id)
      );
      console.log(student);
      return student;
    }));
    setStudents(processedStudents);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};