import React from 'react';
import { Field, InjectedFormProps } from 'redux-form';

export const Form = ({ reset }: InjectedFormProps) => (
    <form>
        <div>
            <label htmlFor="login">Логин</label>
            <Field
                name="login"
                id="login"
                component="input"
                type="text"
                placeholder="Логин"
            />
        </div>
        <div>
            <label htmlFor="name">Имя</label>
            <Field
                name="name"
                id="name"
                component="input"
                type="text"
                placeholder="Имя"
            />
        </div>
        <div>
            <label htmlFor="hasActiveStory">Есть активная история</label>
            <Field
                name="hasActiveStory"
                id="hasActiveStory"
                component="input"
                type="checkbox"
            />
        </div>
        <div>
            <label htmlFor="description">Описание</label>
            <Field
                name="description"
                id="description"
                component="textarea"
            />
        </div>
        <button type="button" onClick={reset}>
            Очистить значения
        </button>
    </form>
);
