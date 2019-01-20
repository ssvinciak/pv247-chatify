import * as React from 'react';
import { Error } from './Error';
import * as Immutable from 'immutable';

export interface IErrorsStateProps {
    readonly errors: Immutable.OrderedMap<string, any>;
}

export interface IErrorsDispatchProps {
    readonly onDismissClick: (id: any) => void;
}

type IErrorProps = IErrorsStateProps & IErrorsDispatchProps;

export class Errors extends React.PureComponent<IErrorProps>  {
    public render() {
        const { errors, onDismissClick } = this.props;

        return (
            (errors || [])
            && errors.map(error => (
                <Error key={error.id} error={error} onClick={onDismissClick} />
            ))
        );
    }
}