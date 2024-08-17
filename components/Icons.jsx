import SvgIcon from "@mui/material/SvgIcon";
export default function Icons({ props, path1, path2 }) {
  return (
    <SvgIcon {...props}>
      <path d={path1} />
      <path d={path2} />
    </SvgIcon>
  );
}
