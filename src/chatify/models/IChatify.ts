import * as Immutable from 'immutable';
import { IChannelItem } from './IChannelItem';
import { IChatMessage } from './IChatMessage';
import { IUser } from './IUser';

export interface IChatify {
    channels: Immutable.List<IChannelItem>;
    messageList: Immutable.List<IChatMessage>;
    activeChannel: Uuid;
    token: string | null;
    isLoggingIn: boolean;
    isLoggedIn: boolean;
    user: IUser | null;
}
