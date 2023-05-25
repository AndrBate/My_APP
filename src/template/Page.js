import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core'; 


const useStyle = makeStyles(() => ({
    Container: {
        padding: '15px, 0',
    }
}))

const TemplatePage = ({title, Component }) => {
    const Style = useStyle()

    return (
        <> 
            <Typography variant="h3">
                {title}
            </Typography>
            <Component />
        </>
    )
}

export default TemplatePage