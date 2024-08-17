
import ButtonMUI from '@mui/material/Button';

export default function ButtonNavbarContained ({icon, text}) {
    return(
        <ButtonMUI  variant="contained" startIcon={icon} sx={{color: '#31363F', backgroundColor: '#eeeeee', fontWeight: 'bold',  '&:hover':{backgroundColor: '#31363F', color: '#eeeeee',boxShadow: 0,}}} >
            {text}
        </ButtonMUI>
    );
}
