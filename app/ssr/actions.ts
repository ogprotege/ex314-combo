'use server'

import { createServerSupabaseClient } from './client'
import { auth } from '@clerk/nextjs/server'
import { revalidatePath } from 'next/cache'

export async function addTask(name: string) {
  // Verify that the user is authenticated
  const { userId } = auth()
  if (!userId) {
    throw new Error('Authentication required')
  }

  if (!name || name.trim() === '') {
    throw new Error('Task name is required')
  }

  const client = createServerSupabaseClient()

  try {
    const response = await client.from('tasks').insert({
      name: name.trim(),
      user_id: userId, // Associate the task with the current user
    })

    if (response.error) {
      console.error('Error adding task:', response.error)
      throw new Error(response.error.message)
    }

    // Revalidate the tasks page to show the new task
    revalidatePath('/ssr')
    
    return { success: true }
  } catch (error: any) {
    console.error('Error adding task:', error.message)
    throw new Error('Failed to add task')
  }
}