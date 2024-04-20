import MuiButton from './MuiButton'
import Link from "next/link";

export default function LinkButton({ href, startIcon, label, type }) {
    return (
      <Link href={href}>
        <MuiButton type={type} label={label} startIcon={startIcon} />
      </Link>
    );
}