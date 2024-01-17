import { Contact } from "@/domain/model/contact";
import { EmailRepository } from "@/domain/repository/emailRepository";

export class EmailImplementationRepository implements EmailRepository {
  async sendEmailContact(contact: Contact): Promise<boolean> {
    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    });

    if (response.status === 200) {
      return true;
    }

    return false;
  }
}
