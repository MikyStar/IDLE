import { GraphQLObjectType, GraphQLID, GraphQLSchema } from 'graphql'
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
        staff :
		{
			type : StaffType,
			args : { id : { type : GraphQLID } },
			resolve( parent, args )
			{
				return _.find( dummyStaff, { id : args.id } );
			}
		}
	}
});

////////////////////////////////////////////////////////////////////////////

export default new GraphQLSchema({ query : RootQuery });