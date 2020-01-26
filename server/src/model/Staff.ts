import mongoose, { Schema } from 'mongoose';

////////////////////////////////////////////////////////////////////////////

const StaffScheme = new Schema(
{
    name : String,
    type : String,
    basePrice : Number,
    rating : Number,
    buildings : String
});

////////////////////////////////////////////////////////////////////////////

export default mongoose.model( 'Staff', StaffScheme );