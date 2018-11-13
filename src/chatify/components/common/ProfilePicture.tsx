import * as React from 'react';
import * as profilePicture from './profile-picture.png';
import '../../css/chat.css';

export class ProfilePicture extends React.PureComponent<any, any> {
    constructor(props: any) {
        super(props);

        this.toggleDropdown = this.toggleDropdown.bind(this);

        this.state = {
            isExpanded: false
        };
    }

    toggleDropdown() {
        this.setState(function (state: any) {
            return {
                isExpanded: !state.isExpanded
            };
        });
    }

    render() {
        const showAttr = this.state.isExpanded ? 'show' : '';
        const menuClass = `dropdown-menu ${showAttr}`;
        const navDropdownClass = `nav-item dropdown ${showAttr}`;
        return (
            <li className={navDropdownClass} onClick={this.toggleDropdown}>
                <img className="profile-picture img-circle"
                     src={profilePicture} aria-expanded={this.state.isExpanded} />
                <div className={menuClass} aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item">Profile</a>
                    <a className="dropdown-item">Logout</a>
                </div>
            </li>
        );
    }
}
