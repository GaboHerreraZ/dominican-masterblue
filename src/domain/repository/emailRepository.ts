import { Contact } from "@/domain/model/contact";

export interface EmailRepository {
  sendEmailContact: (contact: Contact) => Promise<boolean>;
}
