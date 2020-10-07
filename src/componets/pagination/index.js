import React from 'react';
import { Pagination } from 'semantic-ui-react';
import Style from './pagination.module.css';
export default function  (props) {
    let { totalOfPages,activePage}=props;
    return(
        totalOfPages>1&&
        <div className={Style.container}>
        <Pagination
        onPageChange={(event,{activePage})=>{props.onPageChange(activePage)}}
        boundaryRange={0}
        defaultActivePage={activePage}
        ellipsisItem={null}
        firstItem={null}
        lastItem={null}
        siblingRange={1}
        totalPages={totalOfPages}
      />
      </div>
    )
}