"use client";

import { useState, useEffect } from 'react';

import { Card, Title, Text } from '@tremor/react';

import Search from '@/components/search';
import { StudentsTable, AssessmentsTable } from '@/components/table';
import UploadFile from '@/components/upload_files';

import { fetchData } from '@/utils/api';

interface Student {
  name: string;
  email: string;
  completed_2023_1: boolean;
  completed_2023_2: boolean;
}

interface Assessment {
  name: string;
  id: string;
  semester: string;
}

export default function IndexPage({
  searchParams
}: {
  searchParams: { q: string };
}) {
  const [students, setStudents] = useState<Student[]>([]);
  const [studentsAreProcessed, setStudentsAreProcessed] = useState(false);
  const [assessments, setAssessments] = useState<Assessment[]>([]);

  useEffect(() => {
    if (!studentsAreProcessed && students.length > 0) {
      fetchData(students, assessments, setStudents);
      setStudentsAreProcessed(true);
    }
  }, [students]); 

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <UploadFile setStudents={setStudents} setAssessments={setAssessments}/>
      <Title>Students</Title>
      <Text>A list of students from a csv.</Text>
      {/* <Search /> */}
      <Card className="mt-6">
        <StudentsTable students={students} />
      </Card>
      <Title>Assessments</Title>
      <Text>A list of assessments from a csv.</Text>
      <Card className="mt-6">
        <AssessmentsTable assessments={assessments} />
      </Card>
    </main>
  );
}