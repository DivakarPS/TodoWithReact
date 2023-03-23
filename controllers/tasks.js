const Task = require('../models/tasks');
createTask =async (req, res) => {
    try {
        const task = await Task.create(req.body);
        return res.status(201).json({
            task
        });
    } catch (error) {
        return res.status(500).json({
            message: "something went wrong",
            data: {},
            success: false,
            err: error
        });
    }
}

destroyTask =async (req, res) => {
    try {
        const response = await Task.findByIdAndRemove({_id:req.params.id});
        console.log(response);
        res.status(200).json({ response })
    } catch (error) {
        return res.status(500).json({
            message: "something went wrong",
            data: {},
            success: false,
            err: error
        });
    }
}
getTask =async (req, res) => {
    try {
        const task = await Task.findOne({_id:req.params.id});
        res.status(200).json({ task })
    } catch (error) {
        return res.status(500).json({
            message: "something went wrong",
            data: {},
            success: false,
            err: error
        });
    }
}
updateTask =async (req, res) => {
    try {
        const { id: taskID } = req.params

        const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
          new: true,
          runValidators: true,
        })
      
        if (!task) {
          return next(createCustomError(`No task with id : ${taskID}`, 404))
        }
      
        res.status(200).json({ task });
    } catch (error) {
        return res.status(500).json({
            message: "something went wrong",
            data: {},
            success: false,
            err: error
        });
    }
}

getAllTasks =async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({ tasks })
    } catch (error) {
        return res.status(500).json({
            message: "something went wrong",
            data: {},
            success: false,
            err: error
        });
    }
}

module.exports = {
    createTask,
    destroyTask,
    getTask,
    updateTask,
    getAllTasks
}
