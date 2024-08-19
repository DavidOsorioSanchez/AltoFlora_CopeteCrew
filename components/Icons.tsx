import SvgIcon from "@mui/material/SvgIcon";

interface Props {
  path1: string;
  path2?: string;
  props?: any;
}

export default function Icons({ props, path1, path2 }:Props) {
  return (
    <SvgIcon {...props}>
      <path d={path1} />
      <path d={path2} />
    </SvgIcon>
  );
}
