
import mongoose, { Schema } from 'mongoose';

////////////////////////////////////////////////////////////////////////////

const UserScheme = new Schema(
{
    email : String,
    passwordHash : String,
    money : Number,
    production : Number,
	timestampProduction : { type: Date, default: Date.now }, 
    staff : [String],
    buildings : [String],
})

////////////////////////////////////////////////////////////////////////////

export default mongoose.model( 'User', UserScheme );