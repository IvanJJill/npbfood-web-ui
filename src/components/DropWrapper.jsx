import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { Ref, Item } from 'semantic-ui-react';

const dropItem = props => {
  const { id, children, direction } = props;
  return (
    <Droppable droppableId={id} direction={direction}>
      {provided => (
        <Ref innerRef={provided.innerRef} {...provided.droppableProps}>
          <Item>
            {provided.placeholder}
            {children}
          </Item>
        </Ref>
      )}
    </Droppable>
  );
};

export default dropItem;
