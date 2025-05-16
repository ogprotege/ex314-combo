import AddTaskForm from './AddTaskForm'
import { createServerSupabaseClient } from './client'
import { auth } from '@clerk/nextjs/server'

export default async function SSRPage() {
  // Ensure the user is authenticated
  const { userId } = auth()
  
  if (!userId) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Authentication Required</h1>
        <p>Please sign in to view your tasks.</p>
      </div>
    )
  }

  // Use the custom Supabase client you created
  const client = createServerSupabaseClient()

  // Query the 'tasks' table to render the list of tasks
  let tasks: any[] = []
  let error = null
  
  try {
    const response = await client.from('tasks').select()
    if (response.error) {
      error = response.error
    } else {
      tasks = response.data || []
    }
  } catch (e: any) {
    error = e.message
  }

  if (error) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Error Loading Tasks</h1>
        <p className="text-red-500">{error}</p>
      </div>
    )
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Tasks</h1>

      {tasks.length === 0 ? (
        <p className="mb-6 text-gray-500">No tasks found. Add your first task below.</p>
      ) : (
        <div className="mb-6 space-y-2">
          {tasks.map((task: any) => (
            <div key={task.id} className="p-3 border rounded bg-white">
              <p>{task.name}</p>
            </div>
          ))}
        </div>
      )}

      <div className="mt-4">
        <AddTaskForm />
      </div>
    </div>
  )
}