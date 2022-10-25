import React from 'react';
import { Link } from 'react-router-dom';

const CoursesName = ({ name }) => {
    return (
        <div>
            <Link to={`/course/${name.id}`}>
                <li className="list-group-item fw-bold mb-2">
                    {name.course_name}
                </li>
            </Link>
        </div>
    );
};

export default CoursesName;