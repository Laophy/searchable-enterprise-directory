import Typography from '@mui/material/Typography';

export function Overview() {
    return (
        <div style={{ textAlign: 'center', width: '100%', marginTop: '10vh' }}>
                <Typography variant="h3" noWrap component="div">
                    Overview
                </Typography>
                <Typography variant="p" noWrap component="div">
                    This page is currently under <strong>development!</strong>
                </Typography>
        </div>
    )
}