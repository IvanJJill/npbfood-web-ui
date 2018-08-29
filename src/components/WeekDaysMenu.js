import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react';
import WeekDay from '../settings/WeekConst.js'

/**
 * Class represents a component that contains a whole week of meal-planning
 * it contains a framework for displaying contents of each day's content and actions
 */
export default class WeekDaysMenu extends Component {

    state = {
        selected: 0,
    };

    /*
    change the displayed day
     */
    onSelect = (e, selected) => {
        // console.log(e, selected);
        this.setState({selected});

    };

    /*
    renders a general selection bar that contains all days
     */
    renderTopBar = () => {
        const days = WeekDay.fullName;
        return days.map((_, index) => this.renderSelector(index));
    };

    /*
    renders a single day selection element
     */
    renderSelector = (dayNumber) => {
        const days = WeekDay.fullName;
        const {selected} = this.state;
        return(
            <Menu.Item key={days[dayNumber] + dayNumber} name={days[dayNumber]}
                       active={selected === dayNumber}
                       onClick={() => this.onSelect('e', dayNumber)}
            />

        );
    };

    render() {
        return (
            <div>
                <Menu pointing secondary position=''>
                    {this.renderTopBar()}
                </Menu>

            </div>
        )
    }

}
