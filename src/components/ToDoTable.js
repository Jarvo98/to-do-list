import React from 'react';

class ToDoTable extends React.Component {
    renderTable(arrayOfObjects, id) {
        if (id != null) {
            return (
                <div>
                    {
                        arrayOfObjects[id].toDo.map(item => {
                            return <p>{item.title}</p>
                        })
                    }
                </div>
            );
        } else {
            return (
                <div>

                </div>
            );
        }
    }

    render() {
        return (
            this.renderTable(this.props.info, this.props.id)
        );
    }
}

export default ToDoTable;