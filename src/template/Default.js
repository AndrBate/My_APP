import Container from '@mui/material/Container';
import { makeStyles } from '@material-ui/core'; 

import Header from "../partials/Header/Header"


const useStyle = makeStyles(() => ({
    Container: {
        padding: '15px, 0',
    }
}))

const Default = ({children}) => {
    const Style = useStyle()

    return (
        <>
            <Header />
            <Container className={Style.Container}>
                {children}
            </Container>
        </>
    )
}

export default Default