import React from 'react'

const  Loading:React.FC = ()=>{
  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-bg px-4'>
        <div className="relative flex items-center justify-center">
            <div className='absolute inset-0 h-12 w-12 rounded-b-full border-t-primary  border-r-transparent border-b-transparent border-l-transparent'
                style={{animation:'spin 0.9s linear infinite'}}
            />
        </div>
        <div className="mt-6 flex flex-col items-center gap-1">
            <span className='font-mono text-6xl font-semibold tracking-tight mb-8'>Loading</span>
            <span className="flex gap-1">
                <span className="h-8 w-8 rounded-full bg-primary animate-bounce" style={{animationDelay:'0ms'}}/>
                <span className="h-8 w-8 rounded-full bg-primary animate-bounce" style={{animationDelay:'120ms'}}/>
                <span className="h-8 w-8 rounded-full bg-primary animate-bounce" style={{animationDelay:'240ms'}}/>
            </span>
        </div>
        <style>
            {`
                @keyframes spin{
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }           
                }
            `}
        </style>
    </div>
  )
}

export default Loading