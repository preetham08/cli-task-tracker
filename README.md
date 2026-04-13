# CLI Task Tracker
A simple **command line task tracker** built with Node.js as part of the roadmap.sh Node.js projects.

## How to Run
Run commands using:
node index.js <command> [arguments]

## Commands
### Add a Task
node index.js add "Buy groceries"

### Update a Task
node index.js update 1 "Buy groceries and cook dinner"

### Delete a Task
node index.js delete 1

### Mark Task as In Progress
node index.js mark-in-progress 1

### Mark Task as Done
node index.js mark-done 1

### List All Tasks
node index.js list

### List Tasks by Status
List todo tasks
node index.js list todo

List in-progress tasks
node index.js list in-progress

List done tasks
node index.js list done

