import * as React from 'react';
import * as Picture from '../../images/default-profile.png';
import { UserDetailsContainer } from '../../containers/profile/UserDetailsContainer';
import { ClipLoader } from 'react-spinners';

export interface IProfileStateProps {
    readonly isFetchingUserDetails: boolean;
}

export interface IProfileDispatchProps {
    fetchUserProfile: () => void;
}

export class Profile extends React.PureComponent<IProfileDispatchProps & IProfileStateProps> {
    readonly state = {
        selectedFile: null
    };

    private onFileSelect = (e: React.ChangeEvent<HTMLInputElement>): void => {
        if (e.target.files === null) {
            return;
        }
        const inputFile = e.target.files[0];

        this.setState(() => ({
            selectedFile: inputFile
        }));
    }

    private onFileUpload = (e: any): void => {
        console.log(e);
    }

    componentDidMount() {
        this.props.fetchUserProfile();
    }

    render() {
        return (
            <div className="profile">
                <h2>Profile</h2>
                <img src={Picture} />
                <input type="file" onChange={this.onFileSelect} />
                <button onClick={this.onFileUpload}>Upload</button>
                <div className="container">
                    <h2>User details</h2>
                    {this.props.isFetchingUserDetails ? <ClipLoader /> : <UserDetailsContainer />}
                </div>

            </div>
        );
    }
}
