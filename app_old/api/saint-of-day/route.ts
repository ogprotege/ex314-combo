import { NextRequest } from 'next/server';
import path from 'path';
import fs from 'fs';

// Import saints data if it exists in a static file
let saintsData: any[] = [];
try {
  // This is just an example - adjust the path to where your saints data is stored
  const dataPath = path.join(process.cwd(), 'lib', 'saints-data.ts');
  if (fs.existsSync(dataPath)) {
    const { saints } = require('@/lib/saints-data');
    saintsData = saints;
  }
} catch (error) {
  console.error('Error loading saints data:', error);
}

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
    
    // Find saint whose feast day matches today's date
    const saintOfDay = saintsData.find(saint => {
      const feastDate = saint.feastDay.split('-');
      const feastMonth = parseInt(feastDate[0], 10);
      const feastDay = parseInt(feastDate[1], 10);
      return feastMonth === month && feastDay === day;
    });
    
    if (saintOfDay) {
      return Response.json(saintOfDay);
    }
    
    // If no saint found for today, return a default/fallback
    return Response.json({
      name: "No Saint Found",
      feastDay: `${month}-${day}`,
      description: "There is no saint listed for today in our database."
    });
    
  } catch (error) {
    console.error('Error getting saint of the day:', error);
    return Response.json({ error: 'Error getting saint of the day' }, { status: 500 });
  }
}
