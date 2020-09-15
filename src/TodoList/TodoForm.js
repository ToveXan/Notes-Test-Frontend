import React, { Component } from "react"
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            api_url: props.api_url,
            title: "",
            description: "",
            user_id: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleIdChange = this.handleIdChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(event)
        this.formSubmit(event.target);
    }

    async formSubmit(formData) {
        var data = new FormData(formData);
        await fetch(this.state.api_url, {
            method: "POST",
            mode: "cors",
            body: data
        }).then(response => response.json())
            .then(response => this.props.updateTodoList(response))
    }

    handleTitleChange(event) {
        this.setState({
            title: event.target.value
        })
    }

    handleDescriptionChange(event) {
        this.setState({
            description: event.target.value
        })
    }
    handleIdChange(event) {
        this.setState({
            description: event.target.value
        })
    }

    render() {
        return (
            <div>
                <form
                    onSubmit={this.handleSubmit}
                    id="todo_form"
                    autoComplete="off">

                    <TextField
                        id="task_input"
                        label="Task Title"
                        variant="outlined"
                        type="text"
                        name="todo[title]"
                        onChange={this.handleTitleChange} />
                    <TextField
                        id="task_input"
                        label="Task Description"
                        variant="outlined"
                        type="text"
                        name="todo[description]"
                        onChange={this.handleDescriptionChange} />
                        <TextField
                        id="task_input"
                        label="User Id"
                        variant="outlined"
                        type="text"
                        name="todo[description]"
                        onChange={this.handleIdChange} />
                    <Button variant="contained"
                        color="primary"
                        type="submit">Add Task</Button>
                </form>
            </div>
        )
    }
}
export default TodoForm;