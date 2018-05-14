import React from 'react';
import { Panel } from "../../Generic/Panel/Panel.js";
import { AbilityRow } from "./AbilityRow.js";
import { Ability } from "../../../Models/Abilities";

interface Props {
    abilities: Ability[]
}

export const AbilitiesPanel = (props: Props) => {
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