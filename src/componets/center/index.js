import React from 'react';
import Style from './center.module.css';
export default function Center (props){
    let {children} = props;
    return(
        <div className={Style.center}>
            {children}
        </div>
    );
}