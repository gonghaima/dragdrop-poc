
import React from 'react';
export const DragComponent = ({ data, sortData, doSth }) => {
    const drag = (event) => {
        console.log('dragging');
    }
    const dragStart = (event) => {
        console.log('drag start...');
        event.dataTransfer.setData("Text", event.target.id);
    }

    const allowDrop = (event) => {
        console.log('allowDrop triggered');
        event.preventDefault();
    }

    return (<div className="item-container">
        {
            data.map((d, idx) =>
                <div id={`item${idx}`}
                    className="items"
                    key={`item${idx}`}
                    draggable={true}
                    onDrag={(e) => drag(e)}
                    onDragStart={e => dragStart(e)}
                    onDragOver={event => allowDrop(event)}>
                    {d.description}
                </div>
            )
        }
    </div >)
}