import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            "Sign in to your accountt": "Sign in to your account"
        }
    },
    ro: {
        translation: {
            "Sign in to your account": "Autentifică-te în contul tău",
            "Your email": "Adresa ta de email",
            "Login using email": "Autentifică-te folosind email-ul",
            "Login using": "Autentifică-te folosind",
            "Sign in": "Autentifică-te",
            "Your OTP received on email": "Codul OTP primit pe email",
            "Login or resend OTP": "Autentifică-te sau retrimite codul OTP",
            "Send OTP": "Trimite OTP",
            "Home": "Acasă",
            "Subscriptions": "Abonamente",
            "Test yourself": "Testează-te",
            "Courses": "Cursuri",
            "Exams": "Examene",
            "The easiest way to create invoices and manage your business": "Cel mai ușor mod de a crea facturi și de a gestiona afacerea ta",
        }
    }
};

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "ro", 
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;