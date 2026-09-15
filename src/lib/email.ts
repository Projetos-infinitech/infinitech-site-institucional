import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { env } from 'process';

export interface DadosEmail {
  name: string;
  email: string;
  company: string;
  challenge: string;
  final_challenge : string;
}

export async function enviarEmail( dados : DadosEmail) {
    const templateParams = {
        name: dados.name,
        email: dados.email,
        company: dados.company,
        challenge: dados.challenge,
        final_challenge: dados.final_challenge
    }

    const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    return response;

}