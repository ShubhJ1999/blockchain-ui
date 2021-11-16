import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function CustomTable({ rows }) {
    return (
        <TableContainer component={Paper} sx={{backgroundColor: '#17181E', color: '#FFFFFF'}}>
            <Typography fontSize="20px" sx={{margin: 2, marginBottom: 0, fontWeight: 'bold'}}   >Top TENKA Holders</Typography>
            <Table sx={{ minWidth: 650 }} size="medium">
                <TableHead>
                    <TableRow>
                        <TableCell align="left" sx={{color: '#FFFFFF', borderBottom: 0}}></TableCell>
                        <TableCell align="left" sx={{color: '#FFFFFF', borderBottom: '0.6px solid #ACB2CF'}}>Address</TableCell>
                        <TableCell align="left" sx={{color: '#FFFFFF', borderBottom: '0.6px solid #ACB2CF'}}>Balance in TENKA</TableCell>
                        <TableCell align="left" sx={{color: '#FFFFFF', borderBottom: '0.6px solid #ACB2CF'}}>Balance in USD</TableCell>
                        <TableCell align="left" sx={{color: '#FFFFFF', borderBottom: '0.6px solid #ACB2CF'}}>% of coins</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
                    >
                        <TableCell component="th" scope="row" sx={{color: '#FFFFFF', borderBottom: 0}}>
                            {row.id}
                        </TableCell>
                        <TableCell align="left" sx={{color: '#FFFFFF', borderBottom: '0.6px solid #ACB2CF'}}>{row.address}</TableCell>
                        <TableCell align="left" sx={{color: '#FF3564', borderBottom: '0.6px solid #ACB2CF'}}>{row.balTenka}</TableCell>
                        <TableCell align="left" sx={{color: '#FFFFFF', borderBottom: '0.6px solid #ACB2CF'}}>{row.balUSD}</TableCell>
                        <TableCell align="left" sx={{color: '#FFFFFF', borderBottom: '0.6px solid #ACB2CF'}}>{row.coins}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
