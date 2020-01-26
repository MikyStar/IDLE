import { GraphQLObjectType, GraphQLID, GraphQLSchema, GraphQLList } from 'graphql'
import _ from 'lodash';

import { BuildingType, dummyBuildings } from './Building';
import { StaffType, dummyStaff } from './Staff';

////////////////////////////////////////////////////////////////////////////

const RootQuery = new GraphQLObjectType(
{
	name : 'RootQueryTypes',
	fields :
	{
		building :
		{
			type : BuildingType,
			args : { id : { type : GraphQLID } },
			resolve( parent, args )
			{
				return _.find( dummyBuildings, { id : args.id } );
			}
        },
        buildings :
        {
            type : new GraphQLList( BuildingType ),
            resolve( parent, args ){ return dummyBuildings; }
        },

        ////////////////////////////////////////////////////////////////////

        staff :
		{
			type : StaffType,
			args : { id : { type : GraphQLID } },
			resolve( parent, args )
			{
				return _.find( dummyStaff, { id : args.id } );
			}
        },
        staffMembers :
        {
            type : new GraphQLList( StaffType ),
            resolve( parent, args ){ return dummyStaff; }
        }
	}
});

////////////////////////////////////////////////////////////////////////////

export default new GraphQLSchema({ query : RootQuery });