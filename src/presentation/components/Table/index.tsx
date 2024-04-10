import { Button, Collapse, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import MuiTable from '@mui/material/Table';
import { useState } from 'react';

interface TableProps {
    titles: string[];
    rows: string[][];
}

export default function Table({ titles, rows }: TableProps) {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <>
            <MuiTable>
                <TableHead>
                    <TableRow>
                        {titles.map((title, index) => (
                            <TableCell key={index}>{title}</TableCell>
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
                            <TableRow key={rowIndex}>
                                <Collapse in={open === rowIndex} timeout='auto' unmountOnExit>
                                    <TableCell colSpan={titles.length}>{'aaaaa'}</TableCell>
                                </Collapse>
                            </TableRow>
                        </>
                    ))}
                </TableBody>
            </MuiTable>
        </>
    );
}
