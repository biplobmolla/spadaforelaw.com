import { firm } from "@/lib/content";

export const contactFaqs = [
  {
    question: "How do I schedule a consultation?",
    answer: `Complete the contact form with a brief description of your legal issue, or email ${firm.email} or call ${firm.phone}. Spadafore Law’s general response time is ${firm.responseTime}.`,
  },
  {
    question: "Who will handle my legal matter?",
    answer: `From the initial consultation and throughout representation, clients work directly with ${firm.attorney} — not an assistant, paralegal, or junior associate.`,
  },
  {
    question: "What practice areas does Spadafore Law handle?",
    answer:
      "Spadafore Law focuses on Business Law, Real Estate and Construction Law, Employment Law, Healthcare Law, Professional Licensure and Licensure Defense, and Civil Litigation and Appellate Advocacy for clients throughout Ohio.",
  },
  {
    question: "Where is the office located?",
    answer: `${firm.name} is located at ${firm.address}, ${firm.cityLine}. Consultations are ${firm.hoursNote.toLowerCase()}.`,
  },
] as const;
