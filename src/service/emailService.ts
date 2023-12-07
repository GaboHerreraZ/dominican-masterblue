import { EmailImplementationRepository } from "@/data/respository/product/emailImplementationRepository";
import { Contact } from "@/domain/model/contact";
import { SendEmailContactUseCase } from "@/domain/useCase/email/sendEmailContactUseCase";

export default function EmailService() {
  const emailImplementation = new EmailImplementationRepository();

  const sendEmailContactUseCase = new SendEmailContactUseCase(
    emailImplementation
  );

  async function sendEmailContact(contact: Contact) {
    return await sendEmailContactUseCase.execute(contact);
  }

  return {
    sendEmailContact,
  };
}
