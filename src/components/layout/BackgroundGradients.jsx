export default function BackgroundGradients() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[120px] animate-pulse" />
      <div
        className="absolute top-1/3 -right-32 w-[400px] h-[400px] rounded-full bg-violet-600/10 blur-[100px]"
        style={{ animation: 'pulse 8s ease-in-out infinite' }}
      />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[300px] rounded-full bg-fuchsia-600/5 blur-[100px]" />
    </div>
  )
}
