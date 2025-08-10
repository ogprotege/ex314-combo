'use client';

import React, { useState, useEffect, useCallback, useMemo, memo } from 'react';
import { FixedSizeGrid as Grid } from 'react-window';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Image from 'next/image';

interface Saint {
  id: string;
  slug: string;
  name: string;
  feast_date: string;
  feast_date_display: string;
  saint_type: string;
  title?: string;
  short_bio?: string;
  image_url?: string;
  liturgical_color: string;
}

interface SaintsGridProps {
  initialSaints?: Saint[];
  searchQuery?: string;
  filters?: {
    type?: string;
    month?: number;
    liturgicalColor?: string;
  };
}

// Memoized saint card component
const SaintCard = memo(({ saint, style }: { saint: Saint; style: React.CSSProperties }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div style={style} className="p-2">
      <Link 
        href={`/saints/${saint.slug || saint.id}`}
        className="block group h-full"
      >
        <div 
          ref={ref}
          className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200 hover:shadow-lg hover:scale-[1.02] h-full flex flex-col"
        >
          <div className="aspect-w-16 aspect-h-9 bg-gray-100 relative h-48">
            {inView && saint.image_url && !imageError ? (
              <Image
                src={saint.image_url}
                alt={saint.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={`object-cover transition-opacity duration-300 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
                loading="lazy"
              />
            ) : (
              <div className="flex items-center justify-center h-full">
                <span className="text-5xl font-bold text-gray-300">
                  {saint.name[0]}
                </span>
              </div>
            )}
            {inView && !imageLoaded && !imageError && saint.image_url && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div className="w-8 h-8 border-2 border-gray-300 border-t-transparent rounded-full animate-spin" />
              </div>
            )}
          </div>
          
          <div className="p-4 flex-1 flex flex-col">
            <h3 className="text-lg font-bold mb-1 group-hover:text-blue-600 line-clamp-1">
              {saint.name}
            </h3>
            
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="px-2 py-1 bg-gray-100 rounded text-xs">
                {saint.feast_date_display}
              </span>
              
              <span className={`px-2 py-1 rounded text-xs ${
                saint.liturgical_color === 'Red' ? 'bg-red-100 text-red-800' :
                saint.liturgical_color === 'White' ? 'bg-gray-100 text-gray-800' :
                saint.liturgical_color === 'Green' ? 'bg-green-100 text-green-800' :
                saint.liturgical_color === 'Purple' ? 'bg-purple-100 text-purple-800' :
                'bg-pink-100 text-pink-800'
              }`}>
                {saint.saint_type}
              </span>
            </div>
            
            {saint.short_bio && (
              <p className="text-gray-600 text-sm line-clamp-2 flex-1">
                {saint.short_bio}
              </p>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
});

SaintCard.displayName = 'SaintCard';

export function SaintsGridOptimized({ 
  initialSaints = [], 
  searchQuery = '',
  filters = {}
}: SaintsGridProps) {
  const [saints, setSaints] = useState<Saint[]>(initialSaints);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  
  // Calculate grid dimensions based on window size
  const [gridDimensions, setGridDimensions] = useState({
    width: 1200,
    height: 800,
    columnCount: 3,
    columnWidth: 400,
    rowHeight: 320,
  });

  // Debounce utility function
  const debounce = <T extends (...args: any[]) => any>(
    func: T,
    delay: number
  ): ((...args: Parameters<T>) => void) => {
    let timeoutId: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  // Update grid dimensions on resize
  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth - 32; // Account for padding
      const columnCount = width < 640 ? 1 : width < 1024 ? 2 : 3;
      const columnWidth = Math.floor(width / columnCount);
      
      setGridDimensions({
        width,
        height: window.innerHeight - 200, // Account for header/footer
        columnCount,
        columnWidth,
        rowHeight: 320,
      });
    };
    
    // Debounce the resize handler
    const debouncedUpdateDimensions = debounce(updateDimensions, 150);

    // Initial dimensions
    updateDimensions();
    
    // Add resize listener
    window.addEventListener('resize', debouncedUpdateDimensions);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', debouncedUpdateDimensions);
    };
  }, []);

  // Fetch saints from API
  const fetchSaints = useCallback(async (pageNum: number, reset = false) => {
    setLoading(true);
    setError(null);
    
    try {
      const params = new URLSearchParams({
        page: pageNum.toString(),
        limit: '30',
        ...(searchQuery && { query: searchQuery }),
        ...(filters.type && { type: filters.type }),
        ...(filters.month && { month: filters.month.toString() }),
        ...(filters.liturgicalColor && { liturgicalColor: filters.liturgicalColor }),
      });
      
      const response = await fetch(`/api/saints?${params}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch saints');
      }
      
      const data = await response.json();
      
      setSaints(prev => reset ? data.data : [...prev, ...data.data]);
      setTotalCount(data.meta.total);
      setHasMore(pageNum < data.meta.totalPages);
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, [searchQuery, filters]);

  // Debounced search
  const debouncedSearch = useMemo(
    () => debounce((query: string) => {
      setPage(1);
      fetchSaints(1, true);
    }, 500),
    [fetchSaints]
  );

  // Handle search query changes
  useEffect(() => {
    if (searchQuery) {
      debouncedSearch(searchQuery);
    } else {
      fetchSaints(1, true);
    }
  }, [searchQuery, debouncedSearch, fetchSaints]);

  // Handle filter changes
  useEffect(() => {
    setPage(1);
    fetchSaints(1, true);
  }, [filters, fetchSaints]);

  // Load more saints when scrolling near the bottom
  const handleLoadMore = useCallback(() => {
    if (!loading && hasMore) {
      const nextPage = page + 1;
      setPage(nextPage);
      fetchSaints(nextPage);
    }
  }, [loading, hasMore, page, fetchSaints]);

  // Calculate row count
  const rowCount = Math.ceil(saints.length / gridDimensions.columnCount);

  // Cell renderer for the grid
  const Cell = useCallback(({ columnIndex, rowIndex, style }: any) => {
    const index = rowIndex * gridDimensions.columnCount + columnIndex;
    
    if (index >= saints.length) {
      return null;
    }
    
    const saint = saints[index];
    
    // Check if we're near the end and should load more
    if (index === saints.length - 5) {
      handleLoadMore();
    }
    
    return <SaintCard saint={saint} style={style} />;
  }, [saints, gridDimensions.columnCount, handleLoadMore]);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <p className="text-red-600 mb-4">Error: {error}</p>
        <button 
          onClick={() => fetchSaints(1, true)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (saints.length === 0 && !loading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <p className="text-gray-600 text-lg">No saints found</p>
      </div>
    );
  }

  return (
    <div className="relative">
      {totalCount > 0 && (
        <div className="mb-4 text-gray-600">
          Showing {saints.length} of {totalCount} saints
        </div>
      )}
      
      <Grid
        columnCount={gridDimensions.columnCount}
        columnWidth={gridDimensions.columnWidth}
        height={gridDimensions.height}
        rowCount={rowCount}
        rowHeight={gridDimensions.rowHeight}
        width={gridDimensions.width}
      >
        {Cell}
      </Grid>
      
      {loading && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-white rounded-lg shadow-lg px-4 py-2 flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
            <span className="text-sm">Loading more saints...</span>
          </div>
        </div>
      )}
    </div>
  );
}