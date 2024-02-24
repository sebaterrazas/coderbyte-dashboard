
import {
    Table,
    TableHead,
    TableRow,
    TableHeaderCell,
    TableBody,
    TableCell,
    Text
  } from '@tremor/react';
  
  interface Student {
    name: string;
    email: string;
    completed_2023_1: boolean;
    completed_2023_2: boolean;
  }
  
  export function StudentsTable({ students }: { students: Student[] }) {

    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell>Hizo todo?</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student.email}>
              <TableCell>{student.name}</TableCell>
              <TableCell>
                <Text>{student.email}</Text>
              </TableCell>
              <TableCell>
                <Text>{student.completed_2023_1 ? 'Completado' : 'No completado'}</Text>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }

  interface Assessment {
    name: string;
    id: string;
    semester: string;
  }
  
  export function AssessmentsTable({ assessments }: { assessments: Assessment[] }) {

    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>ID</TableHeaderCell>
            <TableHeaderCell>Semester</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {assessments.map((assessment) => (
            <TableRow key={assessment.id}>
              <TableCell>{assessment.name}</TableCell>
              <TableCell>
                <Text>{assessment.id}</Text>
              </TableCell>
              <TableCell>
                <Text>{assessment.semester}</Text>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }