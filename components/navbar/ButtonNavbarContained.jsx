
import ButtonMUI from '@mui/material/Button';

export default function ButtonNavbarContained ({icon, text}) {
    return(
        <ButtonMUI  variant="contained" startIcon={icon} sx={{color: '#222831', backgroundColor: '#eeeeee', fontWeight: 'bold',  '&:hover':{backgroundColor: '#222831', color: '#eeeeee',boxShadow: 0,}}} >
            {text}
        </ButtonMUI>
    );
}
