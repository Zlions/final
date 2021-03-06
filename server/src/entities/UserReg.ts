import { Type } from "class-transformer";
import { Column, Entity, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import {
    IsEmail,
    IsNotEmpty,
    IsOptional,
    IsString,
    Length,
    MaxLength,
    MinLength,
} from "class-validator";
import * as bcrypt from "bcrypt";
import {v4 as uuid} from 'uuid'
import { Resume } from "./Resume";
import { Company } from "./Company";
import { SendRecord } from "./SendRecord";

@Entity()
export class UserReg {
    @PrimaryColumn({
        type: 'varchar'
    })
    public id: string = uuid(); // 用户id 自增长

    @Column({ unique: true })
    @Length(2, 6)
    @IsString({ message: "用户名必须是一个字符串" })
    @Type(() => String)
    @IsNotEmpty({ message: "用户名不允许为空" })
    public name: string; // 用户名

    @Column({ unique: true })
    @Length(11, 11)
    @IsString({ message: "电话号码必须是字符串类型" })
    @IsNotEmpty({ message: "电话号码不允许为空" })
    @Type(() => String)
    public phone: string = ""; // 11位数的手机号码

    @MinLength(6, { message: "密码长度最短为$constraint1个字符" })
    @MaxLength(16, { message: "密码长度最长为$constraint1个字符" })
    @IsOptional()
    @Type(() => String)
    public pwd?: string;

    @Column()
    public pwdHash: string = "";

    @Column({
        unique: true,
    })
    @IsEmail()
    @Type(() => String)
    public email: string;

    @OneToOne(type => Resume, resume => resume.belongTo)
    public resume: Resume;

    @OneToMany(type => Company, company => company.owner)
    companys: Company[]
    
    @OneToMany(type => SendRecord, SendRecord => SendRecord.userId)
	sendRecord: SendRecord[]

    public async compare(password: string) {
        const result = await bcrypt.compare(password, this.pwdHash);
        return result;
    }
}
