const express = require('express');
const Task = require('../models/task');
const auth = require('../middlewares/auth');
const router = new express.Router();

router.post('/tasks', auth, async (req, res) => {
  const task = new Task({
    ...req.body,
    owner: req.user._id,
  });
  try {
    await task.save();
    res.status(201).send(task);
  } catch(error) {
    res.status(400).send(error);
  }
});

// GET /tasks?completed=true
// GET /tasks?limit=2&skip=3
router.get('/tasks', auth, async (req, res) => {
  const match = {};
  const sort = {};
  if (req.query.completed) {
    match.completed = req.query.completed === 'true';
  }
  if (req.query.sortBy) {
    const parts = req.query.sortBy.split(':');
    sort[parts[0]] = parts[1] === 'desc' ? -1 : 1; 
  }
  try {
    // const tasks = await Task.find({ owner: req.user._id });
    // Outra alternativa usando o populate() para pegar todas as tasks do usuário autenticado;
    await req.user.populate({
      path: 'tasks',
      match,
      options: {
        limit: parseInt(req.query.limit),
        skip: parseInt(req.query.skip),
        sort,
      }
    });
    res.send(req.user.tasks);
  } catch(error) {
    res.status(500).send();
  }
});

router.get('/tasks/:id', auth, async (req, res) => {
  const _id = req.params.id;
  try {
    const task = await Task.findOne({ _id, owner: req.user._id });
    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch(error) {
    // Se for um id inválido (menos ou mais do que 12 caracteres) vai cair no catch
    res.status(500).send(error);
  }
});

router.patch('/tasks/:id', auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['description', 'completed'];
  const isValidOperation = updates.every(update => allowedUpdates.includes(update));
  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  }
  try {
    const taskId = req.params.id;
    const owner = req.user._id;
    const task = await Task.findOne({ _id: taskId, owner });
    if (!task) {
      return res.status(404).send();
    }
    updates.forEach(update => task[update] = req.body[update]);
    task.save();

    // Mudança feita para suportar o uso de middlewares do mongoose
    // const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    res.send(task);
  } catch(error) {
    res.status(400).send();
  }
});

router.delete('/tasks/:id', auth, async (req, res) => {
  try {
    const taskId = req.params.id;
    const owner = req.user._id;
    const task = await Task.findOneAndDelete({ _id: taskId, owner });
    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch(error) {
    res.status(400).send(error);
  }
});

module.exports = router;