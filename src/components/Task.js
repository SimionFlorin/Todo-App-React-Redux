import React from 'react'
import {
    Dialog,
    DialogTitle,
    DialogContentText,
    DialogContent,
    DialogActions,
    Divider,
    Select,
    MenuItem
} from '@material-ui/core';
import {TaskStatusEnum} from '../actions';

const Task = ({title, description, taskType, status, updateTaskStatusDispatch, id}) => {

    const [open, setOpen] = React.useState('false')
    const [stateStatus, setStateStatus] = React.useState(status)

    const handleChange = (e) => {
        if (e.target.name === 'status')
            setStateStatus(e.target.value)
    }

    return (
        <React.Fragment>
            <li onClick={() => setOpen(true)}>
                {title}
            </li>
            <Dialog open={open === true} data-testid="UpdateTaskStatusDialog" onClose={() => setOpen('false')}>
                <DialogContent>
                    <DialogTitle>
                        {title}
                    </DialogTitle>
                    <DialogContentText>
                        Description: {description}
                        <Divider/>
                        Type: {taskType}
                        <Divider/>
                        <select
                        data-testid="status"
                            name='status'
                            value={status}
                            onChange={(e) => handleChange(e)}
                            label='Status'
                        >{TaskStatusEnum.map((TaskStatus) => (
                            <option value={TaskStatus}>{TaskStatus}</option>
                        ))}
                        </select>
                    </DialogContentText>
                    <DialogActions>
                        <button onClick={() => setOpen('false')}>
                            Cancel
                        </button>
                        <button onClick={() => {
                            updateTaskStatusDispatch(id, stateStatus)
                            setOpen('false')
                        }}>
                            Change Status
                        </button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    )
}


// Task.propTypes ={
//     tasks: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             title: PropTypes.string.isRequired,
//             description: PropTypes.string.isRequired,
//             taskType: PropTypes.string.isRequired,
//             status :PropTypes.string.isRequired
//         })
//     ),
//     updateTaskStatus:PropTypes.func.isRequired
// }
export default Task
