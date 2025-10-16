import {Column, Entity, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
// import { Usuario} from "../../usuario/"
// import {Plan } from "./Plan";


@Entity()
export class Rutinas{


    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'int'})
    dia:number;


    @Column({type:'varchar', length: 45 })
    descripcion : string;


    @Column({type:'date'})
    fecha_creacion: Date;


    // @ManyToOne(() => Plan)
    // @JoinColumn({ name: 'Usuario_plan_id_plan' })
    // plan: Plan;


    // @ManyToOne(() => Usuario)
    // @joinColumn({name: 'Usuario_idUsuario'})
    // usuario:Usuario;
}