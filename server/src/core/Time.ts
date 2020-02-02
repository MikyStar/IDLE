import moment from 'moment';

////////////////////////////////////////////////////////////////////////////

export namespace Time
{
    export const FORMAT : string = "YYYY-MM-DDTHH:mm:ss.SSS[Z]";
    export const now : string = moment().utc().format( FORMAT );;
}