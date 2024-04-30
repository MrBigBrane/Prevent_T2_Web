import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

export default function SimpleAlert({ children, severity }) {
  return (
    <Alert  severity={severity}>
      {children}
    </Alert>
  );
}