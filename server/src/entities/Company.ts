import { Type } from "class-transformer";
import {
	IsEmail,
	IsNotEmpty,
	IsOptional,
	IsString,
	Length,
	MaxLength,
	MinLength,
} from "class-validator";
import {
	Column,
	CreateDateColumn,
	Entity,
	ManyToOne,
	PrimaryGeneratedColumn,
} from "typeorm";
import * as bcrypt from "bcrypt";
import { CompanyType } from "./CompanyType";

@Entity()
export class Company {
	@PrimaryGeneratedColumn()
	public id: number;

	@Column({ unique: true })
	@Length(2, 8)
	@IsNotEmpty({ message: "公司名不允许为空" })
	@Type(() => String)
	public name: string; // 用户名，唯一约束

	@MinLength(6, { message: "密码长度最短为$constraint1个字符" })
	@MaxLength(16, { message: "密码长度最长为$constraint1个字符" })
	@IsOptional()
	@Type(() => String)
	public pwd?: string;

	@Column()
	public pwdHash: string = "";

	@Column({ unique: true })
	@IsEmail()
	@IsNotEmpty({ message: "邮箱不允许为空" })
	@Type(() => String)
	public email: string; // 邮箱，唯一约束

	@Column()
	@Type(() => String)
	public web: string = ''; // 网站地址，可为空

	@Column()
	@IsString({ message: "地址必须是字符串类型" })
	@Type(() => String)
	public addr: string = ""; // 公司地址

	@Column()
	@Length(11, 11)
	@IsString({ message: "电话号码必须是字符串类型" })
	@IsNotEmpty({ message: "电话号码不允许为空" })
	@Type(() => String)
	public phone: string = ""; // 11位数的手机号码

	@Column()
	@Type(() => String)
	public logo: string = "/assets/companyDefault.jpg"; // 默认的头像图片

	@Column()
	@Type(() => String)
	public scope: string = "0-99"; // 公司规模

	@IsNotEmpty({message: '类型不可以为空'})
	@ManyToOne(type => CompanyType, type => type.companys, {
		eager: true // 添加该配置，使获取记录时能够附带上type的内容
	})
	@Type(() => Number)
	public type: CompanyType; // 公司类型

	@CreateDateColumn()
	public regTime: Date; // 注册时间，自动创建

	public async compare(password: string) {
		const result = await bcrypt.compare(password, this.pwdHash);
		return result;
	}
}
