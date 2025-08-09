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

export class SaintsService {
  /**
   * Get a single saint by ID
   */
  async getSaint(id: string): Promise<Saint | null> {
    try {
      return await getSaintById(id);
    } catch (error) {
      console.error(`Error fetching saint ${id}:`, error);
      throw new Error('Failed to fetch saint');
    }
  }

  /**
   * Get a saint by slug
   */
  async getSaintBySlug(slug: string): Promise<Saint | null> {
    try {
      return await getSaintBySlug(slug);
    } catch (error) {
      console.error(`Error fetching saint by slug ${slug}:`, error);
      throw new Error('Failed to fetch saint');
    }
  }

  /**
   * Get saint with all related data
   */
  async getSaintWithRelations(id: string) {
    try {
      return await getSaintWithRelatedData(id);
    } catch (error) {
      console.error(`Error fetching saint relations for ${id}:`, error);
      throw new Error('Failed to fetch saint with relations');
    }
  }

  /**
   * Search saints with various filters
   */
  async searchSaints(params: SearchSaintsParams) {
    try {
      // Apply default pagination if not provided
      const searchParams = {
        limit: 20,
        page: 1,
        ...params
      };

      return await searchSaints(searchParams);
    } catch (error) {
      console.error('Error searching saints:', error);
      throw new Error('Failed to search saints');
    }
  }

  /**
   * Get saints for a specific day
   */
  async getSaintsByDay(month: number, day: number) {
    try {
      return await getSaintsByDay(month, day);
    } catch (error) {
      console.error(`Error fetching saints for ${month}/${day}:`, error);
      throw new Error('Failed to fetch saints by day');
    }
  }

  /**
   * Get popular saints
   */
  async getPopularSaints(limit: number = 10) {
    try {
      return await getPopularSaints(limit);
    } catch (error) {
      console.error('Error fetching popular saints:', error);
      throw new Error('Failed to fetch popular saints');
    }
  }

  /**
   * Get saints by month
   */
  async getSaintsByMonth(month: number) {
    try {
      return await getSaintsByMonth(month);
    } catch (error) {
      console.error(`Error fetching saints for month ${month}:`, error);
      throw new Error('Failed to fetch saints by month');
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
      throw new Error('Failed to fetch today\'s saints');
    }
  }
}

// Export singleton instance
export const saintsService = new SaintsService();