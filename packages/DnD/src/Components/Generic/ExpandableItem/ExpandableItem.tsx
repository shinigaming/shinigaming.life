import React from 'react';
import "./ExpandableItem.css";

interface IProps {
    expandableItemBody: JSX.Element | string,
    expandableItemHeader: JSX.Element | string
}

interface IState extends IProps {
    expanded: boolean
}

export class ExpandableItem extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {...props, expanded: false};
    }

    private handleExpandedClick = (): void => {
        this.setState((prevState, props) => ({expanded: !prevState.expanded}));
    };

    private renderBody(): JSX.Element | string {
        if (this.state.expanded) {
            return (<div className="expandableItem-body">
                        {this.props.expandableItemBody}
                    </div>);
        } else {
            return "";
        }
    };

    public render(): JSX.Element {
        return (
            <div>
                <div className="expandableItem-header">
                    <div className="expandableItem-header-content">
                        {this.props.expandableItemHeader}
                    </div>
                    <div className="expandableItem-header-icon" onClick={this.handleExpandedClick}/>
                </div>
                {this.renderBody()}
            </div>
        );
    }
}