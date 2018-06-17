import React, {SFC} from 'react';
import {Panel} from "../../Generic/Panel/Panel";
import {SkillRow} from "./SkillRow";
import {Skill} from "../../../Models/Skills";
import {connect} from "react-redux";
import {mappedState} from "../../../Types/Types";

interface IProps {
    leftColumnSkills: Skill[],
    rightColumnSkills: Skill[]
}

const SkillsPanelBase: SFC<IProps> = ({leftColumnSkills, rightColumnSkills}) => 
    <Panel>
        <Panel.Header title="SKILLS"/>
        <Panel.Body>
            <div className="panel-content-columns">
                <div className="panel-content-column skill-column">
                    {leftColumnSkills.map(skill => <SkillRow key={skill.skillName} skill={skill}/>) } 
                </div>
                <div className="panel-content-column skill-column">
                    {rightColumnSkills.map(skill => <SkillRow key={skill.skillName} skill={skill}/>) } 
                </div>
            </div>
        </Panel.Body>
    </Panel>;

const mapStateToProps = (state: any): mappedState<IProps> => ({
    leftColumnSkills: state.SkillsPanel.leftColumnSkills,
    rightColumnSkills: state.SkillsPanel.rightColumnSkills
});

const SkillsPanel = connect<{}, {}, IProps>(mapStateToProps)(SkillsPanelBase);

export default SkillsPanel;