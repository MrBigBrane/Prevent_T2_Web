import MuiButton from './MuiButton'
import Link from "next/link";

export default function LinkButton({ href, startIcon, label, type, variant, style }) {
    return (
      <Link href={href}>
        <MuiButton variant = {variant} type={type} color={"success"} label={label} startIcon={startIcon} style={style} />
      </Link>
    );
}