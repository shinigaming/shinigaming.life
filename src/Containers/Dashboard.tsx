import React from 'react';
import Header from '../Components/Header/Header';
import "./Dashboard.css";

import AbilitiesPanel from "../Components/Panels/AbilitiesPanel/AbilitiesPanel";
import AttacksPanel from "../Components/Panels/AttacksPanel/AttacksPanel";
import InventoryPanel from "../Components/Panels/InventoryPanel/InventoryPanel";
import LimitedUsesPanel from "../Components/Panels/LimitedUsesPanel/LimitedUsesPanel";
import PassivesPanel from "../Components/Panels/PassivesPanel/PassivesPanel";
import SkillsPanel from "../Components/Panels/SkillsPanel/SkillsPanel";

import {Currency} from "../Models/Currency";

interface IState {
  remainingHealth: number, 
  remainingLimitedUses: {[limitedUsesName: string]: number},
  currencyTabActive: boolean,
  currency: Currency,
  addNewItemExpanded: boolean
}

export class Dashboard extends React.Component<{}, IState> {
  render() {
    return (
      <div className="App-DnD">
        <div className="App-DnD-header">
          <div className="App-DnD-header-content">
            <Header/>
          </div>
        </div>
        <div className="App-DnD-body">
          <div className="App-DnD-body-content">
            <div className="dashboard">
              {/* TODO clean this css up with styled components or something. */}
              <div className="dashboard-panel">
                <AbilitiesPanel/>
              </div>
              <div className="dashboard-panel">
                <SkillsPanel/>
              </div>
              <div className="dashboard-panel">
                <LimitedUsesPanel/>          
              </div>
              <div className="dashboard-panel">
                <PassivesPanel/>
              </div>
              <div className="dashboard-panel">
                <AttacksPanel/>
              </div>
              <div className="dashboard-panel">
                <InventoryPanel/> 
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}