import MuiButton from './MuiButton'
import Link from "next/link";

export default function LinkButton({ href, startIcon, label, type, variant, endIcon, ...props }) {
    return (
      <Link href={href} {...props}>
        <MuiButton variant = {variant} type={type} color={"success"} label={label} startIcon={startIcon} endIcon={endIcon} />
      </Link>
    );
}