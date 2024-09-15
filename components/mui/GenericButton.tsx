'use client';
import ButtonMUI from '@mui/material/Button';

interface Props {
    variant: "contained" | "outlined";
    text: string;

    minWidth?: string;
    width?: string;
    height?: string;
    Radius?: string;
    className?: string;
    textColor?: string;
    textBold?: 'bold' | 'semiBold' | 'normal';
    backgroundColor?: string;
    icon?: any;
    boxShadow?: string;
    borderColor?: string;

    // Hover
    hoverBoxShadow?: string;
    hoverBorderColor?: string;
    hoverBackgroundColor?: string;
    hoverTextColor?: string;
    
    //disabled
    disabled?: boolean;
}


export default function GenericButton({
    variant,
    icon,
    text,
    width,
    height,
    minWidth,
    className,
    Radius,
    textColor,
    backgroundColor,
    textBold,
    borderColor,
    boxShadow,
    hoverBoxShadow,
    hoverBackgroundColor,
    hoverTextColor,
    hoverBorderColor,
    disabled,
}: Props) {
    return (
            <ButtonMUI
                variant={variant}
                startIcon={icon}
                className={className}
                
                sx={{
                    width: width,
                    height: height,
                    minWidth: minWidth,
                    borderRadius: Radius,
                    color: textColor,
                    backgroundColor: backgroundColor,
                    borderColor: borderColor,
                    fontWeight: textBold,
                    boxShadow: boxShadow,
                    '&:hover': {
                        backgroundColor: hoverBackgroundColor,
                        borderColor: hoverBorderColor,
                        color: hoverTextColor,
                        boxShadow: hoverBoxShadow,
                    },
                }}
                disabled={disabled}
                >
                {text}
            </ButtonMUI>
    );
}
