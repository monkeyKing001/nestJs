import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
	constructor(@InjectRepository(User) private repo: Repository<User>) {}

	create(email: string, password: string) {
		//creating has type checking with dto
		const user = this.repo.create({ email, password });
		//how about type checking in saving?
		return this.repo.save(user);
		//return this.repo.save(email, password);//not executing hooks -> no logs
		//create vs save
		//creating is make an instance of entity
		//saving is stroing in db
	}

	//if not found, repo will return null
	findOne(id: number) {
		if (!id) {
		  return null;
		}
		return this.repo.findOneBy({id});
	}

	//return user dto
	find(email: string) {
	  return this.repo.find({ where: { email } });
	}

	//we wouldn't know what kind of an how many attributes will be changed -> sol: attrs: Partial<User>
	async update(id: number, attrs: Partial<User>) {
		const user = await this.findOne(id);
		if (!user) {
		  throw new NotFoundException('user not found');
		}
		// ######## IMPORTANT ########
		Object.assign(user, attrs);
		return this.repo.save(user);
	}

	async remove(id: number) {
		const user = await this.findOne(id);
		if (!user) {
		  throw new NotFoundException('user not found');
		}
		return this.repo.remove(user);
	}
}
