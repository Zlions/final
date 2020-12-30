import { Type } from "class-transformer";
import { IsNotEmpty, Length } from "class-validator";
import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryColumn,
} from "typeorm";
import { CompanyType } from "./CompanyType";
import { UserReg } from "./UserReg";
import { Position } from "./Position";
import { v4 as uuid } from "uuid";

@Entity()
export class Company {
    @PrimaryColumn()
    public id: string = uuid();

    @Column({ unique: true })
    @Length(2, 16)
    @IsNotEmpty({ message: "公司名不允许为空" })
    @Type(() => String)
    public name: string; // 用户名，唯一约束

    @Column({ unique: true })
    @IsNotEmpty({ message: "社会信用代码不允许为空" })
    @Type(() => String)
    public comId: string; // 用户名，唯一约束

    @Column()
    @IsNotEmpty({ message: "公司规模不允许为空" })
    @Type(() => String)
    public scope: string;

    @Column()
    @IsNotEmpty({ message: "融资阶段不允许为空" })
    @Type(() => String)
    public finance: string = "";

    @Column()
    @Type(() => String)
    public addr: string; // 公司地址

    @Column("text")
    @Type(() => String)
    public describe: string = ""; // 公司地址

    @Column()
    @Type(() => String)
    public logo: string = "/assets/companyDefault.jpg"; // 默认的头像图片

    @Column()
    @Type(() => Boolean)
    public auditing: boolean = true; // 审核 默认需要进行审核

    @IsNotEmpty({ message: "类型不可以为空" })
    @ManyToOne((type) => CompanyType, (type) => type.companys, {
        eager: true, // 添加该配置，使获取记录时能够附带上type的内容
    })
    @Type(() => Number)
    public type: CompanyType; // 公司类型

    @IsNotEmpty({ message: "类型不可以为空" })
    @ManyToOne((type) => UserReg, (type) => type.id, {
        eager: true, // 添加该配置，使获取记录时能够附带上type的内容
    })
    public owner: UserReg; // 公司类型

    // 创建时间
    @CreateDateColumn()
    public createdAt: string;

    @OneToMany((type) => Position, (position) => position.belongTo)
    companys: Position[];
}
