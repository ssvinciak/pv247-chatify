import * as Immutable from 'immutable';
import { IChannelItem } from './IChannelItem';
import { IChatMessage } from './IChatMessage';
import { IProfile } from './IProfile';
import { IError } from './IError';

export interface IChatify {
    channels: Immutable.List<IChannelItem>;
    messageList: Immutable.List<IChatMessage>;
    activeChannel: Uuid;
    token: string | null;
    isLoggingIn: boolean;
    isLoggedIn: boolean;
    isRegistering: boolean;
    profile: IProfile;
    email: string | null;
    errors: Immutable.OrderedMap<Uuid, IError>;
}
