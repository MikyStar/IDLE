
import mongoose, { Schema } from 'mongoose';

////////////////////////////////////////////////////////////////////////////

const UserScheme = new Schema(
{
    email : String,
    passwordHash : String,
    money : Number,
    production : Number,
	lastUpdate : { type: Date, default: Date.now }, 
    staff : [String],
    buildings : [String],
    slotsAvailable : Number
})

////////////////////////////////////////////////////////////////////////////

export default mongoose.model( 'User', UserScheme );