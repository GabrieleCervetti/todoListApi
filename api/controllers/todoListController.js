'use strict';


var mongoose = require('mongoose'),
  Task = mongoose.model('Tasks');

exports.list_all_tasks = function(req, res) {
  var query = req.query;
  //query.archived = false;
  //console.log("query",query);
  //Task.find(query,null, function(err, tasks) {
	Task.find(query, {status:{ $not: /archived/}}, function(err, tasks) {
    if (err)
      res.send(err);
    res.json(tasks);
  }).sort({'priority': -1});
};


exports.create_a_task = function(req, res) {
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.read_a_task = function(req, res) {
  Task.findById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update_a_task = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.patch_a_task = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.taskId}, {$set: req.body}, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_task = function(req, res) {


  Task.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};


exports.list_completed_tasks = function(req,res){

    var filters = {
        "status": "completed"
    }

    Task.find(filters, function(err, task) {
        if (err)
          res.send(err);
        res.json(task);
    });


}