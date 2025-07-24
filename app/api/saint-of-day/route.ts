import { NextRequest } from 'next/server';
import { getAllSaints } from '@/lib/saints-data';

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const date = url.searchParams.get('date');
    
    let today;
    if (date) {
      today = new Date(date);
    } else {
      today = new Date();
    }
    
    if (isNaN(today.getTime())) {
      today = new Date();
    }
    
    const month = today.getMonth() + 1; // JavaScript months are 0-based
    const day = today.getDate();
    
    // Get all saints data
    const saintsData = await getAllSaints();
    
    // Find saint whose feast day matches today's date
    const saintOfDay = saintsData.find(saint => {
      // Parse the feast date (e.g., "January 28" or "October 15")
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                      'July', 'August', 'September', 'October', 'November', 'December'];
      const parts = saint.feastDate.split(' ');
      if (parts.length !== 2) return false;
      
      const monthName = parts[0];
      const dayNum = parseInt(parts[1], 10);
      const monthNum = months.indexOf(monthName) + 1;
      
      return monthNum === month && dayNum === day;
    });
    
    if (saintOfDay) {
      return Response.json(saintOfDay);
    }
    
    // If no saint found for today, return a default/fallback
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                        'July', 'August', 'September', 'October', 'November', 'December'];
    return Response.json({
      name: "No Saint Found",
      feastDate: `${monthNames[month - 1]} ${day}`,
      shortBio: "There is no saint listed for today in our database."
    });
    
  } catch (error) {
    console.error('Error getting saint of the day:', error);
    return Response.json({ error: 'Error getting saint of the day' }, { status: 500 });
  }
}
