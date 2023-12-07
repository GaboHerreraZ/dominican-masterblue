import { UseCase } from "@/base/useCase";
import { Contact } from "@/domain/model/contact";
import { EmailRepository } from "@/domain/repository/emailRepository";

export class SendEmailContactUseCase implements UseCase<Contact, boolean> {
  constructor(private emailRepository: EmailRepository) {
    this.emailRepository = emailRepository;
  }

  execute(contact: Contact): Promise<boolean> {
    return this.emailRepository.sendEmailContact(contact);
  }
}
