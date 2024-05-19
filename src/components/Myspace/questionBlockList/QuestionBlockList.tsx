import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import QuestionBlock from '../questionBlock/QuestionBlock';
import { reorderQuestion } from './questionBlockListSlice';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DraggableProvided,
  DroppableProvided,
  DropResult,
} from 'react-beautiful-dnd';
import { useAppDispatch } from '@hooks/useAppDispatch';

const QuestionBlockList = () => {
  const dispatch = useAppDispatch();
  const { questionList } = useSelector(
    (state: RootState) => state.questionBlockList
  );

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;
    if (destination.index === source.index) return;

    dispatch(
      reorderQuestion({
        fromIndex: source.index,
        toIndex: destination.index,
      })
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="questions" direction="vertical">
        {(provided: DroppableProvided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="flex flex-col gap-sm"
          >
            {questionList.map((question, index) => (
              <Draggable
                key={question.id}
                draggableId={question.id}
                index={index}
              >
                {(provided: DraggableProvided) => (
                  <div ref={provided.innerRef} {...provided.draggableProps}>
                    <QuestionBlock
                      dragHandler={provided.dragHandleProps}
                      questionData={question}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
export default QuestionBlockList;
