import React from 'react';
import { Panel } from "../../Generic/Panel/Panel";
import { AbilityRow } from "./AbilityRow";
import { Ability } from "../../../Models/Abilities";

interface IProps {
    abilities: Ability[]
}

export const AbilitiesPanel = (props: IProps) => {
    return (
        <Panel>
            <Panel.Header title="ABILITIES"/>
            <Panel.Body>
                <table>
                    <tbody>
                        {props.abilities.map(item => <AbilityRow key={item.name} ability={item}/>)}
                    </tbody>
                </table>
            </Panel.Body>
        </Panel>
    );
};