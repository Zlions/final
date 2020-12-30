import { Type } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryColumn,
    UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Company } from "./Company";
import { SendRecord } from "./SendRecord";

@Entity()
export class Position {
    @PrimaryColumn()
    public id: string = uuid();

    @Column()
    @IsNotEmpty({ message: "城市不允许为空" })
    @Type(() => String)
    public city: string;

    @Column()
    @IsNotEmpty({ message: "地点不允许为空" })
    @Type(() => String)
    public addr: string;

    @Column()
    @IsNotEmpty({ message: "名称不允许为空" })
    @Type(() => String)
    public name: string;

    @Column()
    @IsNotEmpty({ message: "经验要求不允许为空" })
    @Type(() => String)
    public experience: string;

    @Column()
    @IsNotEmpty({ message: "薪资详情不允许为空" })
    @Type(() => String)
    public finance: string;

    @Column()
    @IsNotEmpty({ message: "学历要求不允许为空" })
    @Type(() => String)
    public education: string; // 公司地址

    @Column("text")
    @Type(() => String)
    public describe: string; // 职位描述

    @Column()
    @Type(() => Boolean)
    public auditing: boolean = false; // 审核 默认需要进行审核

    // 创建时间
    @CreateDateColumn()
    public createdAt: string;

    // 最近修改时间
    @UpdateDateColumn()
    public updatedAt: string;

    @IsNotEmpty({ message: "所属公司不可以为空" })
    @ManyToOne((type) => Company, (type) => type.id, {
        eager: true
    })
    public belongTo: Company; // 公司类型

    @OneToMany(type => SendRecord, SendRecord => SendRecord.userId)
	sendRecord: SendRecord[]
}
