'use client'

import React, { useState } from 'react'
import { addTask } from './actions'
import { useRouter } from 'next/navigation'

function AddTaskForm() {
  const [taskName, setTaskName] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    
    if (!taskName.trim()) {
      setError('Please enter a task name')
      return
    }
    
    setIsSubmitting(true)
    setError(null)
    
    try {
      await addTask(taskName)
      setTaskName('')
      router.refresh()
    } catch (err: any) {
      setError(err.message || 'Failed to add task')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Add New Task</h2>
      
      {error && (
        <div className="mb-3 p-2 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          autoFocus
          type="text"
          name="name"
          placeholder="Enter new task"
          onChange={(e) => setTaskName(e.target.value)}
          value={taskName}
          disabled={isSubmitting}
          className="flex-1 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
          type="submit"
          disabled={isSubmitting}
          className="px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
        >
          {isSubmitting ? 'Adding...' : 'Add'}
        </button>
      </form>
    </div>
  )
}

export default AddTaskForm