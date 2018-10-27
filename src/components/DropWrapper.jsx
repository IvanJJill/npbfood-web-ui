import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { Ref } from 'semantic-ui-react';

const dropItem = props => {
  const { id, children, direction } = props;
  return (
    <Droppable droppableId={id} direction={direction}>
      {provided => (
        <Ref innerRef={provided.innerRef}>
          {React.cloneElement(children, [...provided.droppableProps])}
          {/* {provided.placeholder} */}
        </Ref>
      )}
    </Droppable>
  );
};

export default dropItem;
