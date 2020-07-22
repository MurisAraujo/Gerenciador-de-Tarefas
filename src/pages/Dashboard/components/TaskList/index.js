import React from 'react';
import { useDrag } from 'react-dnd';
import { Link } from 'react-router-dom';

import { ItemTypes } from '../../../../utils/items';
import { Container, PriorityFlag, TaskTitle, TaskDepartament, TaskDate } from './styles';

function TaskCard({ value }) {

    const [{ setTaskDoing }, drag] = useDrag({
        item: {
            type: ItemTypes.CARD,
            id: value.id,
            state: value.state,
            percent: value.percent
        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    });

    const [{ setTaskDone }, drag2] = useDrag({
        item: {
            type: ItemTypes.CARD2,
            id: value.id,
            state: value.state,
            percent: value.percent
        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        })
    });

    return (
        <>
            {
                value.state === 0 ?
                    <Link to={`/task/${value.id}`}>
                        <Container ref={drag}
                            value={setTaskDoing}>
                            <PriorityFlag value={value.priority} />
                            <TaskTitle>{value.description}</TaskTitle>
                            <TaskDepartament>{value.departament}</TaskDepartament>
                            <TaskDate> {value.initial_date} - {value.final_date} </TaskDate>
                        </Container>
                    </Link>

                    : value.state === 1 ?

                        <Link to={`/task/${value.id}`}>
                            <Container
                                ref={drag2}
                                value={setTaskDone}>
                                <PriorityFlag value={value.priority} />
                                <TaskTitle>{value.description}</TaskTitle>
                                <TaskDepartament>{value.departament}</TaskDepartament>
                                <TaskDate> {value.initial_date} - {value.final_date} </TaskDate>
                            </Container>
                        </Link>

                        :

                        <Link to={`/task/${value.id}`}>
                            <Container
                                ref={drag}
                                value={setTaskDoing}>
                                <PriorityFlag value={value.priority} />
                                <TaskTitle>{value.description}</TaskTitle>
                                <TaskDepartament>{value.departament}</TaskDepartament>
                                <TaskDate> {value.initial_date} - {value.final_date} </TaskDate>
                            </Container>
                        </Link>
            }
        </>
    );
}

export default TaskCard;