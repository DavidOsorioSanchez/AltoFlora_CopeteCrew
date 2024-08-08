import SvgIcon from "@mui/material/SvgIcon";
export default function IconNavbar({ props, path1, path2 }) {
  return (
    <SvgIcon {...props}>
      <path d={path1} />
      <path d={path2} />
    </SvgIcon>
  );
}
