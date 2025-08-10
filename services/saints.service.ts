/**
 * Saints Service Layer
 * Handles all business logic for saints operations
 */

import { 
  searchSaints, 
  getSaintById, 
  getSaintBySlug,
  getSaintWithRelatedData,
  getSaintsByDay,
  getPopularSaints,
  getSaintsByMonth,
  type SearchSaintsParams,
  type Saint
} from '@/lib/database/saints-repository';
import { withCache } from '@/lib/database/cache-middleware';
import { NotFoundError, DatabaseError, ValidationError } from '@/lib/errors/AppError';

export class SaintsService {
  /**
   * Get a single saint by ID
   */
  async getSaint(id: string): Promise<Saint | null> {
    if (!id || typeof id !== 'string') {
      throw new ValidationError('Invalid saint ID provided');
    }
    
    try {
      const saint = await getSaintById(id);
      return saint;
    } catch (error) {
      console.error(`Error fetching saint ${id}:`, error);
      throw new DatabaseError(`Failed to fetch saint with ID: ${id}`);
    }
  }

  /**
   * Get a saint by slug
   */
  async getSaintBySlug(slug: string): Promise<Saint | null> {
    if (!slug || typeof slug !== 'string') {
      throw new ValidationError('Invalid saint slug provided');
    }
    
    try {
      const saint = await getSaintBySlug(slug);
      return saint;
    } catch (error) {
      console.error(`Error fetching saint by slug ${slug}:`, error);
      throw new DatabaseError(`Failed to fetch saint with slug: ${slug}`);
    }
  }

  /**
   * Get saint with all related data
   */
  async getSaintWithRelations(id: string) {
    if (!id || typeof id !== 'string') {
      throw new ValidationError('Invalid saint ID provided');
    }
    
    try {
      const saintData = await getSaintWithRelatedData(id);
      if (!saintData) {
        throw new NotFoundError('Saint');
      }
      return saintData;
    } catch (error) {
      if (error instanceof NotFoundError) {
        throw error;
      }
      console.error(`Error fetching saint relations for ${id}:`, error);
      throw new DatabaseError(`Failed to fetch saint with relations for ID: ${id}`);
    }
  }

  /**
   * Search saints with various filters
   */
  async searchSaints(params: SearchSaintsParams & { page?: number }) {
    try {
      // Validate pagination parameters
      if (params.limit && (params.limit < 1 || params.limit > 100)) {
        throw new ValidationError('Limit must be between 1 and 100');
      }
      
      if (params.page && params.page < 1) {
        throw new ValidationError('Page must be greater than 0');
      }
      
      // Apply default pagination if not provided
      const searchParams = {
        limit: 20,
        offset: params.offset || ((params.page || 1) - 1) * (params.limit || 20),
        ...params
      };

      return await searchSaints(searchParams);
    } catch (error) {
      if (error instanceof ValidationError) {
        throw error;
      }
      console.error('Error searching saints:', error);
      throw new DatabaseError('Failed to search saints');
    }
  }

  /**
   * Get saints for a specific day
   */
  async getSaintsByDay(month: number, day: number) {
    if (month < 1 || month > 12) {
      throw new ValidationError('Month must be between 1 and 12');
    }
    
    if (day < 1 || day > 31) {
      throw new ValidationError('Day must be between 1 and 31');
    }
    
    try {
      return await getSaintsByDay(month, day);
    } catch (error) {
      console.error(`Error fetching saints for ${month}/${day}:`, error);
      throw new DatabaseError(`Failed to fetch saints for ${month}/${day}`);
    }
  }

  /**
   * Get popular saints
   */
  async getPopularSaints(limit: number = 10) {
    if (limit < 1 || limit > 100) {
      throw new ValidationError('Limit must be between 1 and 100');
    }
    
    try {
      return await getPopularSaints(limit);
    } catch (error) {
      console.error('Error fetching popular saints:', error);
      throw new DatabaseError('Failed to fetch popular saints');
    }
  }

  /**
   * Get saints by month
   */
  async getSaintsByMonth(month: number) {
    if (month < 1 || month > 12) {
      throw new ValidationError('Month must be between 1 and 12');
    }
    
    try {
      return await getSaintsByMonth(month);
    } catch (error) {
      console.error(`Error fetching saints for month ${month}:`, error);
      throw new DatabaseError(`Failed to fetch saints for month ${month}`);
    }
  }

  /**
   * Get today's saints
   */
  async getTodaysSaints() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    
    try {
      return await this.getSaintsByDay(month, day);
    } catch (error) {
      console.error('Error fetching today\'s saints:', error);
      throw new DatabaseError('Failed to fetch today\'s saints');
    }
  }
}

// Export singleton instance
export const saintsService = new SaintsService();