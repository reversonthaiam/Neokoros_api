'use strict'

class TaskController {
  index({view}){
    const tasks = [
      {title: 'Tasks one', body: 'this is tasks one'},
      {title: 'Tasks two', body: 'this is tasks two'},
    ]

    return view.render('task', {
      title: 'your taks',
      tasks: tasks
    })
  }
}

module.exports = TaskController
