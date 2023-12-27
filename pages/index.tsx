import { redirect } from 'next/navigation';

export default async function GoLanding() {
    redirect('/landing');
}