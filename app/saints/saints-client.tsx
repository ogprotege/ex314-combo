'use client';

import { useState, Suspense, lazy } from 'react';
import dynamic from 'next/dynamic';

// Lazy load the optimized grid component
const SaintsGridOptimized = dynamic(
  () => import('@/components/saints-grid-optimized').then(mod => ({ default: mod.SaintsGridOptimized })),
  { 
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading saints directory...</p>
        </div>
      </div>
    )
  }
);

interface SaintsClientProps {
  initialSaints?: any[];
}

export default function SaintsClient({ initialSaints = [] }: SaintsClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    type: undefined as string | undefined,
    month: undefined as number | undefined,
    liturgicalColor: undefined as string | undefined,
  });

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const saintTypes = ['Martyr', 'Confessor', 'Virgin', 'Pope', 'Doctor', 'Other'];
  const liturgicalColors = ['Red', 'White', 'Green', 'Purple', 'Rose'];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Saints Directory</h1>
          <p className="text-gray-600 mb-6">
            Explore the lives, teachings, and legacy of Catholic saints.
          </p>
          
          {/* Search and Filters */}
          <div className="space-y-4">
            {/* Search Bar */}
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Search saints by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              {/* Saint Type Filter */}
              <select
                value={filters.type || ''}
                onChange={(e) => setFilters(prev => ({ 
                  ...prev, 
                  type: e.target.value || undefined 
                }))}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Types</option>
                {saintTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              
              {/* Month Filter */}
              <select
                value={filters.month || ''}
                onChange={(e) => setFilters(prev => ({ 
                  ...prev, 
                  month: e.target.value ? parseInt(e.target.value) : undefined 
                }))}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Months</option>
                {months.map((month, index) => (
                  <option key={month} value={index + 1}>{month}</option>
                ))}
              </select>
              
              {/* Liturgical Color Filter */}
              <select
                value={filters.liturgicalColor || ''}
                onChange={(e) => setFilters(prev => ({ 
                  ...prev, 
                  liturgicalColor: e.target.value || undefined 
                }))}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Colors</option>
                {liturgicalColors.map(color => (
                  <option key={color} value={color}>{color}</option>
                ))}
              </select>
              
              {/* Clear Filters Button */}
              {(searchQuery || filters.type || filters.month || filters.liturgicalColor) && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setFilters({
                      type: undefined,
                      month: undefined,
                      liturgicalColor: undefined,
                    });
                  }}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>
        </div>
        
        {/* Saints Grid */}
        <SaintsGridOptimized
          initialSaints={initialSaints}
          searchQuery={searchQuery}
          filters={filters}
        />
      </div>
    </div>
  );
}