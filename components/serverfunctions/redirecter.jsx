import { redirect } from "next/navigation";

export default function redirecter(route){
    redirect(route);
}