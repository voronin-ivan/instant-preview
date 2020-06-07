import React from 'react';
import { Field, WrappedFieldArrayProps } from 'redux-form';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import classNames from 'classnames';
import { withTranslation, WithTranslation } from 'react-i18next';
import { Button } from '../../Button/Button';
import { Input } from '../../Input/Input';
import { Upload } from '../../Upload/Upload';
import { UploadedFileModel } from '../../../models/file';
import { normalizeTextField } from '../../../utils/normalizer';

interface FormFilesProps extends WrappedFieldArrayProps<UploadedFileModel>, WithTranslation {
    placeholder: string;
    maxFiles: number;
    showFileName: boolean;
}

class FormFilesView extends React.PureComponent<FormFilesProps> {
    private renderDraggableElement = (item: string, index: number) => {
        const { showFileName, placeholder, fields } = this.props;
        const isDragDisabled = fields.length < 2;

        return (
            <Draggable
                key={item}
                draggableId={item}
                index={index}
                isDragDisabled={isDragDisabled}
            >
                {(provided, { isDragging }) => {
                    const rowClassNames = classNames(
                        'form__files-row',
                        { 'form__files-row--dragging': isDragging },
                    );

                    return (
                        <div
                            className={rowClassNames}
                            key={item}
                            ref={provided.innerRef}
                            style={{
                                ...provided.draggableProps.style,
                            }}
                            {...provided.dragHandleProps}
                            {...provided.draggableProps}
                        >
                            {!showFileName && (
                                <Field
                                    name={`${item}.title`}
                                    component={Input}
                                    label={`${placeholder} #${index + 1}`}
                                    normalize={normalizeTextField}
                                />
                            )}
                            <Field
                                name={item}
                                component={Upload}
                                label={`${placeholder} #${index + 1}`}
                                showFileName={showFileName}
                            />
                            <Button
                                className="form__files-remove"
                                icon="remove"
                                onClick={() => fields.remove(index)}
                            />
                        </div>
                    );
                }}
            </Draggable>
        );
    }

    private onDragEnd = ({ source, destination }: DropResult) => {
        if (destination) {
            const prevIndex = source.index;
            const newIndex = destination.index;

            this.props.fields.move(prevIndex, newIndex);
        }
    }

    render() {
        const { fields, maxFiles, t } = this.props;

        return (
            <div className="form__files">
                <div className="form__files-row form__files-row--title">
                    <h2 className="form__files-title">{t(fields.name)}</h2>
                    <Button
                        className="form__files-add"
                        theme="white"
                        onClick={() => fields.push({})}
                        disabled={fields.length >= maxFiles}
                    >
                        {t('add')}
                    </Button>
                </div>
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <Droppable droppableId={fields.name}>
                        {provided => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                {fields.map(this.renderDraggableElement)}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </div>
        );
    }
}

export const FormFiles = withTranslation()(FormFilesView);
