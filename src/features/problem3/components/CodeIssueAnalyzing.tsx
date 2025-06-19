import {
    Box,
    Typography,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Paper,
    Chip,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import type {IssueTable} from "../misc/types";

const CodeIssueAnalyzing = ({ title, subtitle, rows }: IssueTable) => {
    return (
        <Box mt={4}>
            <Typography variant="h6" gutterBottom>
                <CheckCircleIcon color="success" /> <strong>{title}</strong>
            </Typography>
            <TableContainer component={Paper} variant="outlined">
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell><strong>{subtitle}</strong></TableCell>
                            <TableCell><strong>Explanation</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, idx) => (
                            <TableRow key={idx}>
                                <TableCell>
                                    <Chip
                                        label={row.issue}
                                        color={row.type === 'error' ? 'error' : 'warning'}
                                        variant="outlined"
                                        size="small"
                                    />
                                </TableCell>
                                <TableCell>
                                    <Typography variant="body2" component="div">
                                        {row.explanation.split(/(`[^`]+`)/g).map((part, index) =>
                                            part.startsWith('`') && part.endsWith('`') ? (
                                                <code
                                                    key={index}
                                                    style={{
                                                        backgroundColor: '#eee',
                                                        padding: '2px 4px',
                                                        borderRadius: 4,
                                                        fontFamily: 'monospace',
                                                    }}
                                                >
                                                    {part.slice(1, -1)}
                                                </code>
                                            ) : (
                                                <span key={index}>{part}</span>
                                            )
                                        )}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default CodeIssueAnalyzing;