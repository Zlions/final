import { Type } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Position } from "./Position";
import { UserReg } from "./UserReg";

@Entity()
export class SendRecord {
	@PrimaryGeneratedColumn()
	public id: number;

    // @Column()
    // public userId: string;

	@ManyToOne((type) => UserReg, (type) => type.id, {
        eager: true
    })
    public userId: UserReg; // 

    @ManyToOne((type) => Position, (type) => type.id, {
        eager: true
    })
    public positionId: Position; // 公司类型

    // 创建时间
    @CreateDateColumn()
    public createdAt: string;
}
