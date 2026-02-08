import React from "react";
import { Bookmark } from "lucide-react";

const Card = (props) => {
    return (
        <div className="project">

            <div className="top">
                <img
                    src={props.logo}

                />
                <button className="but">
                    save <Bookmark />
                </button>
            </div>

            <div className="middle">
                <h2>{props.days}</h2>
                <h3>{props.role}</h3>
                <h3>{props.type}</h3>
                <h3>{props.level}l</h3>
            </div>

            <div className="bottom">
                <h4>{props.location}</h4>
                <h3>{props.salary}</h3>
                <button className="but">apply now</button>
            </div>

        </div>
    );
};

export default Card;
