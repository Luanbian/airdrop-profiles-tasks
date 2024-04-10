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

interface TableProps {
    titles: string[];
    rows: string[][];
    subtitles: string[];
    details: string[][];
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
                                {row.map((cell, cellIndex) => (
                                    <TableCell key={cellIndex}>
                                        {cellIndex === row.length - 1 ? (
                                            <Button
                                                onClick={() =>
                                                    setOpen(open === rowIndex ? null : rowIndex)
                                                }
                                            >
                                                {cell}
                                            </Button>
                                        ) : (
                                            cell
                                        )}
                                    </TableCell>
                                ))}
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
                                                            {detailRow.map(
                                                                (detail, detailIndex) => (
                                                                    <TableCell key={detailIndex}>
                                                                        {detail}
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
