import ButtonMUI from '@mui/material/Button';

export default function ButtonNavbarContained ({iconOUT, textOUT}) {
    return<ButtonMUI variant="outlined" startIcon={iconOUT} sx={{color: '#eeeeee', borderColor: '#eeeeee', fontWeight: 'bold',  '&:hover':{borderColor:'#76ABAE', color: '#76ABAE',boxShadow: 0,}}} >
            {textOUT}
        </ButtonMUI>
}
