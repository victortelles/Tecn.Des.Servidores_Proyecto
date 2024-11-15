import { Schema, model, SchemaTypes, Document } from 'mongoose'

interface IUser extends Document {
    name: string;
    role: string;
    email: string;
    password: string;
    cellphone: string;
    status: string;
}

const userSchema = new Schema<IUser>({
    name: { type: SchemaTypes.String, required: true },
    role: { type: SchemaTypes.String, enum: ['Cliente', 'Recepcionista', 'Gerente', 'Admin'], default: 'Cliente' },
    email: { type: SchemaTypes.String, required: true, unique: true },
    password: { type: SchemaTypes.String },
    cellphone: { type: SchemaTypes.String },
    status: { type: SchemaTypes.String, enum: ['Activo', 'Eliminado', 'Bloqueado'], default: 'Activo' },
})

const user = model('users', userSchema);
export default user
