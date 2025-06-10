export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-dark-bg">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-purple-500 border-t-transparent animate-spin"></div>
        <div className="text-white text-lg font-medium">Loading Chat Interface...</div>
      </div>
    </div>
  )
}
