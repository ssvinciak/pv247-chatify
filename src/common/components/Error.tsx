import * as React from 'react';
import * as PropTypes from 'prop-types';

interface IErrorOwnProps {
    readonly onClick: (id: any) => void;
    readonly error: any;
}
export class Error extends React.PureComponent<IErrorOwnProps> {
    static propTypes = {
        error: PropTypes.shape({
            id: PropTypes.string.isRequired,
            message: PropTypes.string.isRequired,
        }).isRequired,
        onClick: PropTypes.func.isRequired,
    };

    private onClick = () => this.props.onClick(this.props.error.id);

    render() {
        return (
            <div
                className="alert alert-danger alert-dismissible fade text-center"
                role="alert">
                <button
                    type="button"
                    className="close"
                    data-dismiss="alert"
                    aria-label="Close"
                    onClick={this.onClick}
                >
                    <span aria-hidden="true">
                        &times;
                    </span>
                </button>
                <strong>
                    Oh snap!
                </strong>
                &nbsp;
                {this.props.error.message}
            </div>
        );
    }
}