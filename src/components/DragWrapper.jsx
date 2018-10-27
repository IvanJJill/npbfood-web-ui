import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Ref } from 'semantic-ui-react';

/**
 * Draggable wrapper component
 * @param id draggable id - needed for internal needs of draggable lib
 * @param index of item in the array
 */
const draggedItem = props => {
  const { id, index } = props;
  return (
    <Draggable draggableId={id} index={index}>
      {provided => (
        <Ref innerRef={provided.innerRef}>
          {React.cloneElement(props.children, {
            ...provided.dragHandleProps,
            ...provided.draggableProps
          })}
        </Ref>
      )}
    </Draggable>
  );
};

export default draggedItem;
