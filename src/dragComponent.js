
import React from 'react';
export const DragComponent = ({ data, sortData, letMeKnow }) => {
    const dg = (event) => {
        console.log('dragging');
    }
    const ds = (event) => {
        debugger
        event.dataTransfer.setData("Text", event.target.id);
    }
    return (<div className="item-container">
        {data.map((d, idx) =>
            <div id={`item${idx}`}
                className="items"
                key={`item${idx}`}
                draggable={true}
                onDrag={(e) => dg(e)}
                onDragStart={e => ds(e)}>
                {d.description}
            </div>
        )
        }
    </div >)
}