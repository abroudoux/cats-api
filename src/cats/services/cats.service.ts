import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Cat } from '../interfaces/cat.interface';


@Injectable()
export class CatsService {

    constructor(@InjectModel('Cat') private readonly catModel : Model<Cat>) {}

    async getCats() : Promise<Cat[]> {
        return await this.catModel.find();
    };

    async getCat(id : string) : Promise<Cat> {
        return await this.catModel.findOne({ _id : id });
    };

    async createCat(cat : Cat) : Promise<Cat> {
        const newCat = new this.catModel(cat);
        return await newCat.save();
    };

    async deleteCat(id : string) : Promise<Cat> {
        return await this.catModel.findByIdAndRemove(id);
    };

    async updateCat(id : string, cat : Cat) : Promise<Cat> {
        return await this.catModel.findByIdAndUpdate(id, cat, { new: true });
    };
};
