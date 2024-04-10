import {
    Button,
    Card,
    Collapse,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';
import MuiTable from '@mui/material/Table';
import { useState } from 'react';
import { Details, Rows } from '../../pages/home';

interface TableProps {
    titles: string[];
    rows: Rows[];
    subtitles: string[];
    details: Details[];
}

export default function Table({ titles, rows, subtitles, details }: TableProps) {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <>
            <MuiTable>
                <TableHead>
                    <TableRow>
                        {titles.map((title, index) => (
                            <TableCell key={index}>
                                <Typography variant='body1'>{title}</Typography>
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, rowIndex) => (
                        <>
                            <TableRow key={rowIndex}>
                                {Object.values(row).map((value, index) => (
                                    <TableCell key={index}>
                                        <Typography variant='body1'>{value}</Typography>
                                    </TableCell>
                                ))}
                                <TableCell>
                                    <Button
                                        size='small'
                                        onClick={() => {
                                            if (open === rowIndex) {
                                                setOpen(null);
                                            } else {
                                                setOpen(rowIndex);
                                            }
                                        }}
                                    >
                                        {open === rowIndex ? 'Close' : 'Details'}
                                    </Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                                    <Collapse in={open === rowIndex} timeout='auto' unmountOnExit>
                                        <Card
                                            elevation={24}
                                            square={false}
                                            sx={{ border: '1px solid #b9b9b9' }}
                                        >
                                            <MuiTable size='small' aria-label='purchases'>
                                                <TableHead>
                                                    <TableRow>
                                                        {subtitles.map((subtitle, index) => (
                                                            <TableCell key={index}>
                                                                <Typography variant='body1'>
                                                                    {subtitle}
                                                                </Typography>
                                                            </TableCell>
                                                        ))}
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {details.map((detailRow, detailRowIndex) => (
                                                        <TableRow key={detailRowIndex}>
                                                            {Object.values(detailRow).map(
                                                                (detailValue, detailIndex) => (
                                                                    <TableCell key={detailIndex}>
                                                                        <Typography variant='body1'>
                                                                            {detailValue}
                                                                        </Typography>
                                                                    </TableCell>
                                                                ),
                                                            )}
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </MuiTable>
                                        </Card>
                                    </Collapse>
                                </TableCell>
                            </TableRow>
                        </>
                    ))}
                </TableBody>
            </MuiTable>
        </>
    );
}
