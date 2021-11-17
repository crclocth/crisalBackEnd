import { SendGridService } from '@anchan828/nest-sendgrid';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateContactDTO, UpdateContactDTO } from './dto/contact.dto';
import { Contact } from './models/contact.model';

@Injectable()
export class ContactService {
  constructor(
    @InjectModel('Contact') private readonly contactModel: Model<Contact>,
    private readonly sendGrid: SendGridService,
  ) {}

  async createContact(createContactDTO: CreateContactDTO): Promise<Contact> {
    const newContact = new this.contactModel(createContactDTO);
    await this.sendGrid.send({
      to: 'crirev@gmail.com',
      from: 'crirev@gmail.com',
      cc: 'crclocth@gmail.com',
      subject: newContact.subject,
      text: newContact.message,
      html: `
        <html>
          <head>
            <title></title>
          </head>
          <body>
            <div style="margin:20px">NOMBRE: ${newContact.name}</div>
            <div style="margin:20px">CORREO: ${newContact.email}</div>
            <div style="margin:20px">MENSAJE: ${newContact.message}</div>
          </body>
        </html>,
    `,
    });
    return newContact.save();
  }

  async getContacts(): Promise<Contact[]> {
    const contacts = await this.contactModel.find();
    return contacts;
  }

  async getContact(id: string): Promise<Contact> {
    const contact = await this.contactModel.findById(id);
    return contact;
  }

  async deleteContact(id: string): Promise<any> {
    const contact = await this.contactModel.findByIdAndDelete(id);
    return contact;
  }

  async updateContact(
    id: string,
    updateContactDTO: UpdateContactDTO,
  ): Promise<Contact> {
    const updatedContact = await this.contactModel
      .findByIdAndUpdate(id, { $set: updateContactDTO }, { new: true })
      .exec();
    return updatedContact;
  }
}
