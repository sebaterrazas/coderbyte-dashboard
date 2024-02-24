'use client';

import { useState, useEffect } from "react";

import { GrDocumentCsv } from "react-icons/gr";
import Papa from 'papaparse';


export default function UploadFile ({ setStudents, setAssessments }:  {setStudents: Function, setAssessments: Function}) {

    const [assesmentsReady, setAssesmentsReady] = useState(false);
    
    function handleChangeStudent(event: any) {
        const file = event.target.files[0];

        Papa.parse(file, {
            complete: (result: any) => {
                setStudents(result.data);
            },
            header: true,
        });
    }

    function handleChangeAssessments(event: any) {
        const file = event.target.files[0];

        Papa.parse(file, {
            complete: (result: any) => {
                setAssessments(result.data);
                setAssesmentsReady(true);
            },
            header: true,
        });

    }

    return (
        <div className="">
            {/* <span className="flex flex-row">Choose a CSV file <GrDocumentCsv className="text-2xl transition-transform focus:scale-125 hover:scale-125" /></span> */}         
            <h4>Choose assessments csv file</h4>  
            <input
                placeholder="fileInput"
                type="file"
                multiple={false}
                onChange={handleChangeAssessments}
                accept=".csv"
            />
            {assesmentsReady && 
            <>
                <h4>Choose students csv file</h4> 
                <input
                    placeholder="fileInput"
                    type="file"
                    multiple={false}
                    onChange={handleChangeStudent}
                    accept=".csv"
                /> 
            </>
            }
        </div>
    )
}