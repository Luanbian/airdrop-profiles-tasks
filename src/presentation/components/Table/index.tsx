import { Button, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import MuiTable from '@mui/material/Table';
import { Rows } from '../../pages/home';

interface TableProps {
    titles: string[];
    rows: Rows[];
    BtnTitle?: string;
    onClick?: (row: Rows) => void;
}

export default function Table({ titles, rows, BtnTitle, onClick }: TableProps) {
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
                        <TableRow key={rowIndex}>
                            {Object.values(row).map((value, index) => (
                                <TableCell key={index}>
                                    <Typography variant='body1'>{value}</Typography>
                                </TableCell>
                            ))}
                            {BtnTitle && onClick && (
                                <TableCell>
                                    <Button onClick={() => onClick(row)}>{BtnTitle}</Button>
                                </TableCell>
                            )}
                        </TableRow>
                    ))}
                </TableBody>
            </MuiTable>
        </>
    );
}
