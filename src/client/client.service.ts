import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateClientDTO, UpdateClientDTO } from './dto/client.dto';
import { Client } from './model/client.model';

@Injectable()
export class ClientService {
  constructor(
    @InjectModel('Client')
    private readonly clientModel: Model<Client>,
  ) {}

  async createClient(createClientDTO: CreateClientDTO): Promise<Client> {
    const newClient = new this.clientModel(createClientDTO);
    return newClient.save();
  }

  async getClients(): Promise<Client[]> {
    const clients = await this.clientModel.find();
    return clients;
  }

  async getClient(id: string): Promise<Client> {
    const client = await this.clientModel.findById(id);
    return client;
  }

  async deleteClient(id: string): Promise<any> {
    const client = await this.clientModel.findByIdAndDelete(id);
    return client;
  }

  async updateClient(
    id: string,
    updateClientDTO: UpdateClientDTO,
  ): Promise<Client> {
    const updatedClient = await this.clientModel
      .findByIdAndUpdate(id, { $set: updateClientDTO }, { new: true })
      .exec();
    return updatedClient;
  }
}
