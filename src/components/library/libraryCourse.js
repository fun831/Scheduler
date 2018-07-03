import React, { Component } from 'react';
import Icon from '../schedule/icon';
import Arrow from '../schedule/arrow';
import Action from '../action';

class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
            <div className='library-course__title-check'>
                <label className="library-course">Problem Solving</label>
                { Icon('fas fa-check', 'library-course__icon') }
            </div>
            <Arrow className="library-course__arrow" />
            <Action className="library-course__action" />
            <div className="library-course__description">
                <label>Couse Description</label>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book. 
                </p>
            </div>
            </div>
        );
    }
}
export default LibraryCourse;