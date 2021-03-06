import * as React from 'react';
import { Title } from './Title';
import * as Immutable from 'immutable';
import { ChannelList } from '../ChannelList';
import { MessageList } from './MessageList';
import { IChatMessage } from '../../models/IChatMessage';
import { Navigation } from '../../../common/components/Navigation';
import { RouteComponentProps } from 'react-router';
import { CHANNEL_ID } from '../../constants/routes';
import { ChannelMembersListContainer } from '../../containers/ChannelMembersListContainer';
import { IUpdateChannelNameDto } from '../../models/dtos/IUpdateChannelNameDto';

interface IChatifyRouterProps {
    match: string;
    id?: string;
}

interface IChatifyOwnProps extends RouteComponentProps<IChatifyRouterProps> { }

export interface IChatifyStateProps {
    channelIds: Immutable.List<Uuid>;
    messageIdsList: Immutable.List<Uuid>;
}

export interface IChatifyDispatchProps {
    readonly onChannelAdd: (text: string) => void;
    readonly updateChannel: (updateChannelNameDto: IUpdateChannelNameDto) => void;
    readonly fetchChannels: () => void;
    readonly fetchMessages: (chanelId: Uuid) => void;
    readonly onSendMessage: (chanelId: Uuid, chatMessage: IChatMessage) => void;
    readonly onDeleteMessage: (channelId: Uuid, chatMessageId: Uuid) => void;
}

export class Chatify extends React.PureComponent<IChatifyStateProps & IChatifyDispatchProps & IChatifyOwnProps> {
    render() {
        const { match } = this.props;
        const isChannelSelected = match.path === CHANNEL_ID;
        const channelId = match.params.id ? match.params.id : '';
        return (
            <>
                <Navigation />
                <div id="container">
                    <div className="row">
                        <div id="sidebar" className="col-lg-3">
                            <ChannelList
                                channelsIds={this.props.channelIds}
                                onChannelAdd={this.props.onChannelAdd}
                                fetchChannels={this.props.fetchChannels}
                            />
                        </div>
                        {isChannelSelected
                            ?
                            <>
                                <div id="messageList" className="col-lg-6">
                                    <div className="container">
                                        <Title />
                                    </div>
                                    <div className="container">
                                        <MessageList
                                            messageIdsList={this.props.messageIdsList}
                                            onSendMessage={this.props.onSendMessage}
                                            channelId={channelId}
                                            fetchMessages={this.props.fetchMessages} />
                                    </div>
                                </div>
                                <div id="right-bar" className="col-lg-3">
                                    <ChannelMembersListContainer
                                        channelId={channelId}
                                    />
                                </div>
                            </>
                            :
                            <div className="col-lg-6" style={{ height: '500px' }}>
                                Select channel please
                            </div>
                        }
                    </div>
                </div>
            </>
        );
    }
}
