import { Type } from "class-transformer";
import {
	IsBoolean,
	IsEmail,
	IsNotEmpty,
	IsOptional,
	IsString,
	Length,
} from "class-validator";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserReg } from "./UserReg";

@Entity()
export class Resume {
	@PrimaryGeneratedColumn()
	public id: number;

	@Column()
	@IsNotEmpty({ message: "姓名不允许为空" })
	@Length(2, 6)
	@IsString({ message: "姓名必须是字符串" })
	@Type(() => String)
	public name: string;

	@Column()
	@IsBoolean({ message: "性别必须是boolean类型" })
	@IsNotEmpty({ message: "性别不允许为空" })
	@Type(() => Boolean)
	public sex: boolean;

	@Column()
	@Length(11, 11)
	@IsString({ message: "电话号码必须是字符串类型" })
	@IsNotEmpty({ message: "电话号码不允许为空" })
	@Type(() => String)
	public phone: string = ""; // 11位数的手机号码

	@Column()
	@IsString({ message: "地址必须是字符串类型" })
	@Type(() => String)
	public addr: string = "";

	@Column()
	@IsEmail()
	@IsOptional()
	@Type(() => String)
	public email: string;

	@Column()
	@IsNotEmpty({message: '学历不允许为空'})
	@IsString({message:'学历必须是字符串类型'})
	@Type(() => String)
	public education: string;

	@Column()
	@IsString({message:'学历必须是字符串类型'})
	@Type(() => String)
	public major: string = '';

	@Column()
	@IsString({message:'学历必须是字符串类型'})
	@Type(() => String)
	public school: string = '';

	@Column()
	@IsString({message:'学历必须是字符串类型'})
	@Type(() => String)
	public beforeSchool: string = '';

	@Column()
	@IsString({message:'学历必须是字符串类型'})
	@Type(() => String)
	public afterSchool: string = '';

	@Column()
	@IsString({message:'学历必须是字符串类型'})
	@Type(() => String)
	public expectSalary: string = '';

	@Column()
	@IsString({message:'学历必须是字符串类型'})
	@Type(() => String)
	public certificate: string = '';

	@OneToOne(type => UserReg, {
		eager: true
	})
	@JoinColumn()
	public belongTo: UserReg;
}
