import React, { Component } from 'react';
import Icon from '../schedule/icon';

class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <label className="library-course__title">Problem Solving</label>
                { Icon('fas fa-check', 'library-course__icon') }
                {/* arrow component */}
                {/* action button component */}
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