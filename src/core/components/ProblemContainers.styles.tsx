import {styled} from "@mui/material/styles";
import {Box} from "@mui/material";

export const StyledProblemContainer = styled(Box)({
    padding: '10px 0',

    '.problem-content': {
        '.problem-content-title': {
            marginTop: 5,
            marginBottom: 5,
        },
        '.problem-content-description': {
            marginTop: 20,
            marginBottom: 20,
        }
    },
});