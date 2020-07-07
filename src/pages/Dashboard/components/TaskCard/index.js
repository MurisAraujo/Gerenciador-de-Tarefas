import React from 'react';

import { Container, PriorityFlag, TaskTitle, TaskProgress, TaskDepartament, TaskDate } from './styles';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../../../../utils/items';
import { Link } from 'react-router-dom';

function TaskCard({ value }) {

    const [{ setTaskDoing }, drag] = useDrag({
        item: {
            type: ItemTypes.CARD,
            id: value.id,
            state: value.state,
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
        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
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
                            {value.percent == null ?
                                <TaskProgress>0% Completo</TaskProgress> :
                                <TaskProgress>{value.percent}% Completo</TaskProgress>
                            }
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
                            {value.percent == null ?
                                <TaskProgress>0% Completo</TaskProgress> :
                                <TaskProgress>{value.percent}% Completo</TaskProgress>
                            }
                            <TaskDepartament>{value.departament}</TaskDepartament>
                            <TaskDate> {value.initial_date} - {value.final_date} </TaskDate>
                        </Container>
                    </Link>

                :

                    <Link to={`/task/${value.id}`}>
                        <Container>
                            <PriorityFlag value={value.priority} />
                            <TaskTitle>{value.description}</TaskTitle>
                            <TaskProgress>{value.percent == null ? 0 : Math.trunc(value.percent)}% Completo</TaskProgress>
                            <TaskDepartament>{value.departament}</TaskDepartament>
                            <TaskDate> {value.initial_date} - {value.final_date} </TaskDate>
                        </Container>
                    </Link>

            }
        </>
    );
}

export default TaskCard;