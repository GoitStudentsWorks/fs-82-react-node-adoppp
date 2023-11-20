import { useEffect, useState } from 'react'

import classNames from 'classnames/bind';
import styles from './ExercisesList.module.scss';
import { useParams } from 'react-router-dom';
import { Icon } from '../../../ui/Icon';
import { useDispatch, useSelector } from 'react-redux';
import { getAllExercises } from '../../../../storage/operations/exercisesThunk';

const cn = classNames.bind(styles);

const ExercisesList = () => {
    const dispatch = useDispatch();
    const {workout} = useParams();

    const [currentExercisesList, setCurrentExercisesList] = useState([]);

    const allExercises = useSelector((state) => state.exercises.data);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await dispatch(getAllExercises());
            } catch (error) {
                console.error("Error fetching exercises:", error);
            }
        };
    
        fetchData();
    }, [dispatch]);

            useEffect(() => {
                if (allExercises) {
    const filtered = allExercises.filter((element) =>
        element.bodyPart === workout ||
        element.equipment === workout ||
        element.target === workout)

    setCurrentExercisesList(filtered)
                }
        }, [allExercises, workout])

return (
<div className={cn('exercises__container')}>
    <ul className={cn('exercises_ul_collections')}>
        {currentExercisesList.map((exercise)=>
            <li className={cn('exercises_container')} key={exercise._id}>
                <p>WORKOUT</p>
                <button type='button'>Start<Icon iconId="icon-next" w={16} h={16} /></button>
                <h3>{exercise.name}</h3>
                <div className={cn('exercises_info')}>
                    <p>Burned calories:&nbsp;<span>{exercise.burnedCalories}</span></p>
                    <p>Body part:&nbsp; <span>{exercise.bodyPart}</span></p>
                    <p>Target:&nbsp;<span>{exercise.target}</span></p>
                </div>
            </li>
        )}
    </ul>
</div>
  )
  };

export {ExercisesList}