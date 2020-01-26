import mongoose, { Schema, SchemaDefinition } from 'mongoose';

////////////////////////////////////////////////////////////////////////////

const BuildingScheme = new Schema(
{
	name : String,
	maxLevel : Number,
	currentLevel : Number,
	basePrice : Number,
	productionRate : Number,
	staffID : [String],
	updated: { type: Date, default: Date.now }, 
})

////////////////////////////////////////////////////////////////////////////

export default mongoose.model( 'Building', BuildingScheme );