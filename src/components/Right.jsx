import React, { useState } from 'react'
import { FaShieldAlt, FaInfoCircle, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const boards = [
  { id: 1, name: 'Angola Production' },
  { id: 2, name: 'Attendance Reporting' },
  { id: 3, name: 'CHIVA RH1' },
]

const progressItems = [
  { id: 1, question: 'Are either of your parents living?', color: 'bg-orange-500', progress: 66 },
  { id: 2, question: 'Do you belong to any groups in whi', color: 'bg-blue-500', progress: 33 },
  { id: 3, question: '1-2-1 Events', color: 'bg-pink-500', progress: 100, count: 27 },
]

const initialTasks = [
  { id: 1, text: 'Follow up call needed', completed: false },
  { id: 2, text: 'contact the local authority', completed: false },
  { id: 3, text: 'Book in another meeting', completed: false },
  { id: 4, text: 'Speak to GP about XYZ', completed: false },
  { id: 5, text: 'you need to call her about', completed: false },
  { id: 6, text: 'Supervision deadline', completed: false },
]

export default function Right() {
  const [tasks, setTasks] = useState(initialTasks)
  const [newTask, setNewTask] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState(null)

  const addTask = (e) => {
    e.preventDefault()
    if (newTask.trim()) {
      setTasks([...tasks, { id: tasks.length + 1, text: newTask, completed: false }])
      setNewTask('')
    }
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    setActiveSection(null)
  }

  const openSection = (section) => {
    setActiveSection(section)
  }

  return (
    <div className="w-full max-w-md mx-auto p-4">
      {/* Desktop View */}
      <div className="hidden md:block space-y-6">
        <BoardsSection />
        <ProgressSection />
        <TasksSection 
          tasks={tasks} 
          newTask={newTask} 
          setNewTask={setNewTask} 
          addTask={addTask} 
          toggleTask={toggleTask} 
        />
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        <button
          className="fixed bottom-16  right-4 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg"
          onClick={toggleMobileMenu}
        >
          M
        </button>

        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-5/6 max-w-sm">
              <h2 className="text-xl font-bold mb-4">Menu</h2>
              <div className="space-y-2">
                <button
                  className="w-full text-left p-2 rounded hover:bg-gray-100"
                  onClick={() => openSection('boards')}
                >
                  Boards
                </button>
                <button
                  className="w-full text-left p-2 rounded hover:bg-gray-100"
                  onClick={() => openSection('progress')}
                >
                  Personal Progress
                </button>
                <button
                  className="w-full text-left p-2 rounded hover:bg-gray-100"
                  onClick={() => openSection('tasks')}
                >
                  Tasks
                </button>
              </div>
              <button
                className="mt-4 w-full bg-red-500 text-white p-2 rounded"
                onClick={toggleMobileMenu}
              >
                Close
              </button>
            </div>
          </div>
        )}

        {activeSection === 'boards' && (
          <div className="fixed inset-0 bg-white z-50 overflow-auto p-4">
            <button onClick={() => setActiveSection(null)} className="mb-4">&larr; Back</button>
            <BoardsSection />
          </div>
        )}

        {activeSection === 'progress' && (
          <div className="fixed inset-0 bg-white z-50 overflow-auto p-4">
            <button onClick={() => setActiveSection(null)} className="mb-4">&larr; Back</button>
            <ProgressSection />
          </div>
        )}

        {activeSection === 'tasks' && (
          <div className="fixed inset-0 bg-white z-50 overflow-auto p-4">
            <button onClick={() => setActiveSection(null)} className="mb-4">&larr; Back</button>
            <TasksSection 
              tasks={tasks} 
              newTask={newTask} 
              setNewTask={setNewTask} 
              addTask={addTask} 
              toggleTask={toggleTask} 
            />
          </div>
        )}
      </div>
    </div>
  )
}

function BoardsSection() {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Boards</h2>
        <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm">+ New Board</button>
      </div>
      <ul className="space-y-2">
        {boards.map(board => (
          <li key={board.id} className="flex items-center space-x-2">
            <FaShieldAlt className="text-blue-500" />
            <span>{board.name}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 text-right">
        <a href="#" className="text-blue-500 text-sm hover:underline">Show All</a>
      </div>
    </div>
  )
}

function ProgressSection() {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Personal Progress</h2>
        <a href="#" className="text-blue-500 text-sm hover:underline">Go to board</a>
      </div>
      <ul className="space-y-4">
        {progressItems.map(item => (
          <li key={item.id} className="flex items-center space-x-2">
            <div className={`w-4 h-4 rounded-full ${item.color}`}></div>
            <div className="flex-grow">
              <div className="flex justify-between items-center">
                <span className="text-sm">{item.question}</span>
                <FaInfoCircle className="text-gray-400" />
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                <div 
                  className={`${item.color} h-2 rounded-full`} 
                  style={{width: `${item.progress}%`}}
                ></div>
              </div>
            </div>
            {item.count && <span className="text-sm font-semibold">{item.count}</span>}
          </li>
        ))}
      </ul>
      <div className="mt-4 text-right">
        <a href="#" className="text-blue-500 text-sm hover:underline">Show All</a>
      </div>
    </div>
  )
}

function TasksSection({ tasks, newTask, setNewTask, addTask, toggleTask }) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Tasks</h2>
        <div className="flex space-x-2">
          <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">{tasks.filter(t => !t.completed).length} To Do</span>
          <button className="bg-green-500 text-white px-2 py-1 rounded text-sm">All Done</button>
          <button className="bg-blue-500 text-white px-2 py-1 rounded text-sm">Filters</button>
        </div>
      </div>
      <form onSubmit={addTask} className="flex mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add your next task"
          className="flex-grow border rounded-l px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded-r">Save Task</button>
      </form>
      <ul className="space-y-2">
        {tasks.map(task => (
          <li key={task.id} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className={task.completed ? 'line-through text-gray-500' : ''}>{task.text}</span>
            <button className="ml-auto text-gray-400 hover:text-gray-600">
              <FaInfoCircle />
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex justify-between items-center">
        <button className="text-gray-500 hover:text-gray-700">
          <FaChevronLeft /> Previous
        </button>
        <button className="text-gray-500 hover:text-gray-700">
          Next <FaChevronRight />
        </button>
      </div>
    </div>
  )
}