import MuiButton from './MuiButton'
import Link from "next/link";

export default function LinkButton({ href, startIcon, label, type, variant, ...props }) {
    return (
      <Link href={href} {...props}>
        <MuiButton variant = {variant} type={type} color={"success"} label={label} startIcon={startIcon} />
      </Link>
    );
}