import { Contact } from "@/domain/model/contact";
import { EmailRepository } from "@/domain/repository/emailRepository";
import apiService from "@/lib/apiService";

export class EmailImplementationRepository implements EmailRepository {
  async sendEmailContact(contact: Contact): Promise<boolean> {
    return await apiService.post("/email/contact", contact);
  }
}
