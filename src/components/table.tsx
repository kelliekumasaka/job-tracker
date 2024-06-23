import React, { FC } from 'react'
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material'

enum AppliedOn {
    website = 'Website',
    linkedin = 'LinkedIn',
    builtin = 'BuiltIn',
    indeed = 'Indeed',
    zipRecruiter = 'Zip Recruiter',
    referral = 'Referral',
    otta = 'Otta'
}

enum Status {
    applied = 'Applied',
    interviewing = 'Interviewing',
    rejected = 'Rejected',
    notInterested = 'Not Interested',
    accepted = 'Accepted'
}

function createData (
    name: string,
    position: string,
    appliedOn: AppliedOn,
    status: Status,
    dateOfApp: string 
) {
    return { name, position, appliedOn, status, dateOfApp }
}

const rows = [
    createData('ServiceNow', 'Front-End Software Engineer, UX - Conversational Platform', AppliedOn.website, Status.applied, '6/11/2024')
]

export const JobTracker: FC = () => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Company</TableCell>
                        <TableCell>Position</TableCell>
                        <TableCell>Applied On</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Date of Application</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map( el => (
                        <TableRow key={el.name+el.position}>
                            <TableCell>{el.name}</TableCell>
                            <TableCell>{el.position}</TableCell>
                            <TableCell>{el.appliedOn}</TableCell>
                            <TableCell>{el.status}</TableCell>
                            <TableCell>{el.dateOfApp}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

