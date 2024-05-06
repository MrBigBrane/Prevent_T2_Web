import PasswordForm from "../../../components/forms/forgotpassword/PasswordForm";
import MuiSuccess from '@/components/buttons/alerts/MuiSuccess';

export default function ForgotPassword({ searchParams }) {
    return (
        <>
            {searchParams?.passwordreset &&  <MuiSuccess severity="success">Email Sent! Please check your inbox.</MuiSuccess>}
            {searchParams?.passwordnotreset &&  <MuiSuccess severity="error">Email Send Failed.</MuiSuccess>}
            <div className="flex-1 w-full flex flex-col gap-20 items-center">
                <PasswordForm />
            </div>
        </>
        
    )
}