
import React from 'react';
export const DragComponent = ({ data, sortData, swap }) => {
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

    const drop = (event) => {
        console.log('drop...');
        event.preventDefault();
        const origin = event.dataTransfer.getData("Text");
        const replacement = event.target.id;
        swap(origin, replacement);
    }

    return (<div className="item-container">
        {
            data.map((d, idx) =>
                <div id={`${idx}`}
                    className="items"
                    key={`item${idx}`}
                    draggable={true}
                    onDrag={(e) => drag(e)}
                    onDragStart={e => dragStart(e)}
                    onDragOver={event => allowDrop(event)}
                    onDrop={event => drop(event)}>
                    {d.description}
                </div>
            )
        }
    </div >)
}