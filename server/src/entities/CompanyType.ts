import { Type } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Company } from "./Company";

@Entity()
export class CompanyType {
	@PrimaryGeneratedColumn()
	public id: number;

	@Column({ unique: true })
	@IsNotEmpty({ message: "类型名称不可以为空" })
	@IsString({ message: "类型名称必须是字符串格式" })
	@Type(() => String)
	public name: string = "";

	@OneToMany(type => Company, company => company.type)
	companys: Company[]
}
