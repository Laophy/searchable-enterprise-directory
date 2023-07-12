import Typography from '@mui/material/Typography';

export function MissingPage() {
    return (
        <div style={{ textAlign: 'center', width: '100%', marginTop: '10vh' }}>
                <Typography variant="h3" noWrap component="div">
                    Oh no!
                </Typography>
                <Typography variant="p" noWrap component="div">
                    You have entered a page that is <strong>missing or not available.</strong> <br/>Please check your URL for typos or <strong>return</strong> to the previous page.
                </Typography>
        </div>
    )
}