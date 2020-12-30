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
	@IsNotEmpty({ message: "求职状态不允许为空" })
	@IsString({ message: "求职状态必须是字符串" })
	@Type(() => String)
	public jobState: string;

	@Column()
	@IsBoolean({ message: "性别必须是boolean类型" })
	@IsNotEmpty({ message: "性别不允许为空" })
	@Type(() => Boolean)
	public sex: boolean;

	@Column()
	@Type(() => String)
	public birth: string;

	@Column()
	@Type(() => String)
	public wechat: string;

	@Column()
	@Length(11, 11)
	@IsString({ message: "电话号码必须是字符串类型" })
	@IsNotEmpty({ message: "电话号码不允许为空" })
	@Type(() => String)
	public phone: string = ""; // 11位数的手机号码

	@Column()
	@IsEmail()
	@IsOptional()
	@Type(() => String)
	public email: string;

	@Column()
	@IsString({message:'意向职位必须字符串类型'})
	@Type(() => String)
	public wantedJob: string;

	@Column()
	@IsString({message:'专业必须是字符串类型'})
	@Type(() => String)
	public major: string = '';

	@Column()
	@IsString({message:'毕业院校必须是字符串类型'})
	@Type(() => String)
	public school: string = '';

	@Column()
	@IsString({message:'毕业年份必须是字符串类型'})
	@Type(() => String)
	public eduYear: string = '';

	@Column("text")
	@IsString({message:'个人优势必须是字符串类型'})
	@Type(() => String)
	public godness: string = '';

	@OneToOne(type => UserReg, user => user.resume,  {
		cascade: true
	})
	@JoinColumn()
	public belongTo: UserReg;
}
