import mongoose, { Schema, Document } from 'mongoose';

//Model/Interfaz para reservaciones
export interface IReservation extends Document {
    reservation_num: string;
    email: mongoose.Schema.Types.ObjectId;
    room_id: mongoose.Schema.Types.ObjectId;
    arrival_date: Date;
    checkout_date: Date;
    num_of_guest: number;
    status: string;
}

//Schema de reservaciones
const reservationSchema: Schema = new Schema({
    reservation_num: { type: String, required: true, unique: true },
    email: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    room_id: { type: Schema.Types.ObjectId, ref: 'Room', required: true },
    arrival_date: { type: Date, required: true },
    checkout_date: { type: Date, required: true },
    num_of_guest: { type: Number, required: true },
    status: { type: String, default: 'pending' }
});

export default mongoose.model<IReservation>('Reservation', reservationSchema);

