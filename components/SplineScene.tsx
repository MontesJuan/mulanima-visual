'use client';

import { Suspense } from 'react';
import Spline from '@splinetool/react-spline';

interface SplineSceneProps {
    /** URL to the Spline scene (.splinecode file) */
    scene: string;
    /** CSS class to apply to the Spline container */
    className?: string;
    /** Callback fired when the scene finishes loading */
    onLoad?: (app: any) => void;
}

/**
 * SplineScene — Using traditional @splinetool/react-spline for Client Component stability.
 * Removed 'lazy' and '/next' import to resolve "async Client Component" errors in Next.js.
 */
export function SplineScene({ scene, className, onLoad }: SplineSceneProps) {
    return (
        <Suspense
            fallback={
                <div className="w-full h-full flex items-center justify-center">
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-8 h-8 border-2 border-white/10 border-t-white rounded-full animate-spin" />
                        <p className="text-[10px] uppercase tracking-[0.4em] text-white/20 font-medium pb-2">
                            Iniciando Experiencia 3D
                        </p>
                    </div>
                </div>
            }
        >
            <div className={className}>
                <Spline scene={scene} onLoad={onLoad} />
            </div>
        </Suspense>
    );
}
